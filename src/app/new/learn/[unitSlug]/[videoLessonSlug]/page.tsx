export const dynamic = "force-dynamic";

import styles from "./videopage.module.css";

import { createClient } from "utils/supabase/server";
import { supabaseNoSSR } from "utils/supabase/supabaseClient";
import { getUserAndCache } from "utils/supabase/user";
import { VideoProvider } from "src/app/new/learn/[unitSlug]/[videoLessonSlug]/hooks/VideoContext";
import Video from "src/app/new/learn/[unitSlug]/[videoLessonSlug]/components/videocomponent/Video";
import ContainerHeader from "src/app/new/components/containerheader/ContainerHeader";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";

export async function generateStaticParams() {
  const { data, error } = await supabaseNoSSR.from("videos").select("*");

  if (data) {
    return data.map((video) => ({
      videoLessonSlug: video.video_id.toString(),
    }));
  }
  return [{ videoLessonSlug: "1" }];
}

//static page generated at build
export default async function VideoLesson({
  params,
}: {
  params: { videoLessonSlug: string };
}) {
  //fetch video data
  const supabase = createClient();
  console.log("Fetching video for:", params.videoLessonSlug);
  const { data, error } = await supabase
    .from("videos")
    .select("video_id, video_url, activity_url, activity_answer")
    .eq("video_id", params.videoLessonSlug)
    .limit(1)
    .single();
  if (error) {
    return <p>Error fetching db data</p>;
  }
  if (!data) {
    return <p>No videos found...</p>;
  }

  const fetchedVideoURL = data?.video_url;
  const user = await getUserAndCache();
  let maxProgress: number = 0;
  if (user) {
    const { data: progressData, error: progressError } = await supabase
      .from("video_progress")
      .select("video_timestamp, video_id")
      .eq("video_id", params.videoLessonSlug)
      .limit(1)
      .single();

    if (progressError) {
      console.error("Error fetching video progress:", progressError.message);
      maxProgress = 0; // Default value in case of error
    } else {
      maxProgress = progressData?.video_timestamp || 0; // Fallback to 0 if no timestamp
    }
  }

  if (data.activity_url == undefined) {
    data.activity_url = "";
  }

  return (
    <VideoProvider videoID={data.video_id} maxProgress={maxProgress}>
      <div className={styles.container}>
        <ContainerHeader
          text={"The Impact of Financial"}
          svg={<BookSVG color={"white"} width={15} height={15} />}
        />
        <Video videoUrl={fetchedVideoURL}></Video>
      </div>
    </VideoProvider>
  );
}
