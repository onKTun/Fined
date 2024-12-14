type LessonProgress = {
  lessonId: number;
  unitId: number;
  videoProgressId: number;
  videoId: number;
  videoStatus: "not started" | "in progress" | "completed";
  videoTimestamp: number;
  videoLength: number;
  videoPercentComplete: number;
};
