export const dynamic = "force-dynamic";
import ClientsideLessonPreview from "src/components/lesson-preview/ClientsideLessonPreview";
import { createClient } from "utils/supabase/server";
import { supabaseNoSSR } from "utils/supabase/supabaseClient";

export async function generateStaticParams() {
  const { data, error } = await supabaseNoSSR.from("lessons").select("*");
  console.log(data);
  console.log(error);

  if (data) {
    return data.map((lesson) => ({
      lessonPreviewSlug: lesson.lesson_id.toString(),
    }));
  }

  return [{ lessonPreviewSlug: "1" }];
}
export default async function LessonPreview({
  params,
}: {
  params: { lessonPreviewSlug: string };
}) {
  const supabase = createClient();

  const { data: lessonData } = await supabase
    .from("lessons")
    .select("lesson_id,lesson_name, unit_id")
    .eq("lesson_id", parseInt(params.lessonPreviewSlug, 10))
    .limit(1)
    .single();

  const { data: videoData } = await supabase
    .from("videos")
    .select(
      "video_id, video_name,video_url, video_thumbnail_url, video_length, description, short_description"
    )
    .eq("lesson_id", lessonData?.lesson_id)
    .limit(1)
    .single();

  const data: LessonPage = {
    unitId: lessonData?.unit_id,
    lessonId: lessonData?.lesson_id,
    lessonName: lessonData?.lesson_name,
    videoId: videoData?.video_id,
    videoName: videoData?.video_name,
    videoURL: videoData?.video_url,
    videoThumbnailURL: videoData?.video_thumbnail_url,
    videoShortDescription: videoData?.short_description,
    videoDescription: videoData?.description,
    videoLength: videoData?.video_length,
    releaseDate: "",
  };

  return <ClientsideLessonPreview lessonData={data}></ClientsideLessonPreview>;
}
