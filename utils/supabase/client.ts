"use client";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  console.log("create client-side client called");
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getUser() {
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
}
