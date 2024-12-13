import ClientsideLessonPreview from "src/components/lesson-preview/ClientsideLessonPreview";

export default function LessonPreview({
  params,
}: {
  params: { lessonSlug: string };
}) {
  return (
    <ClientsideLessonPreview
      lessonSlug={params.lessonSlug}
    ></ClientsideLessonPreview>
  );
}
