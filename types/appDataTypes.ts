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

type LessonPage = {
  lessonId: number;
  lessonName: string;
  videoName:string;
  videoURL: string;
  videoThumbnailURL: string;
  videoShortDescription: string;
  videoDescription: string;
  videoLength: number;
  videoMaxTimestamp?: number;

}