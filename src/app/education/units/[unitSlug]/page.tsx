import ClientsideUnit from "src/components/units/ClientsideUnit";
import { createClient } from "utils/supabase/server";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ unitSlug: "1" }];
}

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
  const { data: unitData, error: unitError } = await supabase
    .from("lessons")
    .select("lesson_id,unit_id")
    .eq("unit_id", parseInt(params.unitSlug, 10));

  const { data, error } = await supabase
    .from("videos")
    .select("video_thumbnail_url, video_length")
    .eq("lesson_id", unitData)
    .limit(1)
    .single();
  return <ClientsideUnit></ClientsideUnit>;
}
