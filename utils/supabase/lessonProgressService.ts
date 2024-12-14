"use server";
import { User } from "@supabase/supabase-js";
import { createClient } from "./server";
import { getUserAndCache } from "./user";

/* eslint-disable */
export async function markComplete(activityID: string) {
  const supabase = createClient();
}

export async function updateVideoProgress(
  video_id: number,
  video_timestamp: number,
  video_status?: string
) {
  const supabase = createClient();
  const user = await getUserAndCache();

  console.log("Update video progress called");
  console.log(video_timestamp);

  if (user) {
    if (video_status) {
      const { data, error } = await supabase
        .from("video_progress")
        .update({
          video_timestamp: video_timestamp,
          video_status: video_status,
        })
        .eq("user_id", user.id)
        .eq("video_id", video_id);
    } else {
      const { data, error } = await supabase
        .from("video_progress")
        .update({ video_timestamp: video_timestamp })
        .eq("user_id", user.id)
        .eq("video_id", video_id);
    }
  }
}
