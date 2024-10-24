"use server";

import { UserResponse } from "@supabase/supabase-js";
import { createClient } from "utils/supabase/server";

export async function updateProgress(
  activityId: number,
  status: string,
  frqResponse?: string,
  mcqResponse?: number
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log("User found:", user.id);
    //check to see if table has row already
    const { data: progress } = await supabase
      .from("activity_progress")
      .select("activity_id, user_id")
      .eq("user_id", user.id)
      .eq("activity_id", activityId)
      .limit(1)
      .single();

    if (progress) {
      console.log(
        "Existing row found for user:",
        progress?.user_id,
        "and activity:",
        progress?.activity_id
      );
      //update existing row
      const { data, error } = await supabase
        .from("activity_progress")
        .update({
          status: status,
          ...(frqResponse && { frq_response: frqResponse }),
          ...(mcqResponse && { mcq_answer: mcqResponse }),
        })
        .eq("user_id", user.id)
        .eq("activity_id", activityId)
        .select();

      if (error) {
        console.error("Error updating row:", error);
      } else {
        console.log("Row updated successfully:", data);
      }
    } else {
      console.log(
        "No existing row found, inserting new row for user:",
        user.id,
        "and activity:",
        activityId
      );
      //create new row
      const { data, error } = await supabase
        .from("activity_progress")
        .insert([
          {
            activity_id: activityId,
            user_id: user.id,
            status: status,
            ...(frqResponse && { frq_response: frqResponse }),
            ...(mcqResponse && { mcq_answer: mcqResponse }),
          },
        ])
        .select();

      if (error) {
        console.error("Error inserting row:", error);
      } else {
        console.log("Row inserted successfully:", data);
      }
    }
  } else {
    console.log("User is not logged in");
  }
}
