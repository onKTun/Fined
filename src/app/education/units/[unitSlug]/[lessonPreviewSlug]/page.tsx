import ClientsideLessonPreview from "src/components/lesson-preview/ClientsideLessonPreview";

export default function LessonPreview({
  params,
}: {
  params: { lessonPreviewSlug: string };
}) {
  return (
    <ClientsideLessonPreview
      lessonSlug={params.lessonPreviewSlug}
    ></ClientsideLessonPreview>
  );
}
