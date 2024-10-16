import { createClient } from "utils/supabase/server";
import Profile from "./Profile";

export default async function ProfilePage() {
  const fun = () => {
    console.log("fun"); //wtf?
  };

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error, status } = await supabase
    .from("students")
    .select(`avatar_url`)
    .eq("student_id", user?.id)
    .single();

  console.log(data?.avatar_url);

  return <Profile avatar_url={data?.avatar_url}></Profile>;
}
