export const dynamic = "force-dynamic";
import ClientsideUnit from "src/components/units/ClientsideUnit";
import { createClient } from "utils/supabase/server";
import { getUserAndCache } from "utils/supabase/user";

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

  const { data: lessonData } = await supabase
    .from("lessons")
    .select("lesson_id,unit_id,lesson_name")
    .eq("unit_id", parseInt(params.unitSlug, 10));

  if (lessonData) {
    for (let i = 0; i < lessonData.length; i++) {
      const lesson = lessonData[i];
      const { data: videoData, error: videoError } = await supabase
        .from("videos")
        .select(
          "video_id, video_name,video_url, video_thumbnail_url, video_length, description, short_description"
        )
        .eq("lesson_id", lesson.lesson_id)
        .limit(1)
        .single();

      const { data: activityData, error: activityError } = await supabase
        .from("activities")
        .select(
          '*'
        )
        .eq("lesson_id", lesson.lesson_id)
        .eq("activity_type", 'game')

      const data: LessonPage = {
        lessonId: lesson.lesson_id,
        lessonName: lesson.lesson_name,
        videoName: videoData?.video_name,
        videoURL: videoData?.video_url,
        videoThumbnailURL: videoData?.video_thumbnail_url,
        videoShortDescription: videoData?.short_description,
        videoDescription: videoData?.description,
        videoLength: videoData?.video_length,
      };

      if (activityData) {
        const activities: PixiActivity[] = activityData.map(activity => ({
          activityID: activity.activity_id,
          activityName: activity.activity_name,
          description: activity.description,
          href: activity.activity_url
        }));

        console.log(activities)
        data.activities = activities;
      }
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
