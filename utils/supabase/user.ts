import { cache } from "react";
import { createClient } from "./server";
//use in server componets
export const getUserAndCache = cache(async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user session:", error.message);
    return null;
  }
  return user;
});
