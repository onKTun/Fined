export const dynamic = "force-dynamic";
import styles from "./lessonvideo.module.css";
import Video from "./components/videocomponent/Video";
import { VideoProvider } from "./hooks/VideoContext";
import AdditionalInformation from "./components/additional/AdditonalInformation";

import { createClient } from "utils/supabase/server";
import { supabaseNoSSR } from "utils/supabase/supabaseClient";
import { getUserAndCache } from "utils/supabase/user";

export async function generateStaticParams() {
  const { data, error } = await supabaseNoSSR.from("videos").select("*");
  console.log("video error:" + error);

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
      <div className={styles.bodyDash}>
        {/* <ActivityBox /> */}
        <div className={styles.rightColumn}>
          <div className={styles.videoContainer}>
            <div className={styles.headerWrapper}>
              <div className={styles.headerLeft}>
                <div className={styles.svgWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M 12.502 0.833 L 7.497 0.833 L 7.497 4.83 L 12.502 4.83 Z M 13.877 0.833 L 13.877 4.83 L 19.047 4.83 C 18.58 2.309 16.719 0.843 13.877 0.833 Z M 0.833 6.205 L 0.833 13.841 C 0.833 17.177 2.823 19.167 6.159 19.167 L 13.841 19.167 C 17.178 19.167 19.167 17.177 19.167 13.841 L 19.167 6.205 Z M 12.237 13.832 L 10.33 14.932 C 9.927 15.161 9.532 15.28 9.166 15.28 C 8.891 15.28 8.643 15.216 8.414 15.087 C 7.882 14.785 7.589 14.162 7.589 13.355 L 7.589 11.155 C 7.589 10.348 7.882 9.725 8.414 9.422 C 8.946 9.111 9.624 9.166 10.33 9.578 L 12.237 10.678 C 12.942 11.082 13.327 11.65 13.327 12.264 C 13.327 12.878 12.933 13.419 12.237 13.832 Z M 6.122 0.833 C 3.28 0.843 1.419 2.309 0.952 4.83 L 6.122 4.83 Z"
                      fill="rgb(255, 255, 255)"
                    ></path>
                  </svg>
                </div>
                <div className="header_text">
                  Video
                  <div className={styles.header_subtext}>
                    Finish watching the video
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.videoDisplay}>
              <div className={styles.video}>
                <Video videoUrl={fetchedVideoURL}></Video>
              </div>
            </div>
            {/* <div className={styles.buttonRow}>
              <RoutingButton
                style={"blue"}
                text={"Go to Activities"}
                ftSize={1}
                additonalStyles={{ flexGrow: "1" }}
                url={data.activity_url}
              />{" "}
              <RoutingButton
                style={"gray"}
                text={"Activity Answers"}
                ftSize={1}
                additonalStyles={{}}
                url={data.activity_answer}
              />
              
            </div>
            */}
            <AdditionalInformation />
          </div>
        </div>
      </div>
    </VideoProvider>
  );
}
