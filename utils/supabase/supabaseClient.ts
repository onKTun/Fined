import { createClient } from "@supabase/supabase-js";
// You can get these values from your Supabase project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseNoSSR = createClient(supabaseUrl, supabaseKey);
