export const dynamic = "force-dynamic";
import { createClient } from "utils/supabase/server";
import { getUserAndCache } from "utils/supabase/user";
import ClientsideUnit from "./clientsideunit/ClientsideUnit";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ unitSlug: "1" }];
}
/* eslint-disable */
export default async function UnitPage({
  params,
}: {
  params: { unitSlug: string };
}) {
  /*
    fetch all lesson data (1-4)
    video:
      video thumbnail
      total length
      video percent complete
      video short description
    activities
      total complete

     

  */
  const supabase = createClient();
  const user = await getUserAndCache();
  let pageData: LessonPage[] = [];

  const { data: lessonData, error: lessonError } = await supabase
    .from("lessons")
    .select("lesson_id, unit_id, lesson_name")
    .eq("unit_id", parseInt(params.unitSlug, 10));
  console.log("unitSlug param:", params.unitSlug);
  if (lessonData) {
    for (let i = 0; i < lessonData.length; i++) {
      const lesson = lessonData[i];
      const { data: videoData, error: videoError } = await supabase
        .from("videos")
        .select(
          "video_id, video_name,video_url, video_thumbnail_url, video_length, description, short_description, release_date"
        )
        .eq("lesson_id", lesson.lesson_id)
        .limit(1)
        .single();

      const data: LessonPage = {
        lessonId: lesson.lesson_id,
        lessonName: lesson.lesson_name,
        videoName: videoData?.video_name,
        videoURL: videoData?.video_url,
        videoThumbnailURL: videoData?.video_thumbnail_url,
        videoShortDescription: videoData?.short_description,
        videoDescription: videoData?.description,
        videoLength: videoData?.video_length,
        releaseDate: videoData?.release_date,
      };

      if (user) {
        const { data: videoProgressData, error: videoProgressError } =
          await supabase
            .from("video_progress")
            .select("video_timestamp, video_id")
            .eq("video_id", videoData?.video_id)
            .limit(1)
            .single();

        data.videoMaxTimestamp = videoProgressData?.video_timestamp;
      }
      pageData.push(data);
    }
  }
  return <ClientsideUnit lessonPageData={pageData}></ClientsideUnit>;
}
