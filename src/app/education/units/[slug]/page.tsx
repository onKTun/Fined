import ClientsideUnit from "src/components/units/ClientsideUnit";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ slug: "1" }];
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  return <ClientsideUnit></ClientsideUnit>;
}
