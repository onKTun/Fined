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
  unitId?: number;
  lessonId: number;
  lessonName: string;
  videoId?: number;
  videoName: string;
  videoURL: string;
  videoThumbnailURL: string;
  videoShortDescription: string;
  videoDescription: string;
  videoLength: number;
  videoMaxTimestamp?: number;
  activities?: PixiActivity[];
};

type PixiActivity = {
  activityID: number;
  activityName: string;
  description: string;
  href: string;
  lessonID?: number;
};

type McqQuestion = {
  questionId?: number;
  questionName: string;
  answerChoices: string[];
  correctAnswer: string;
};

type GameActivityStates = "load" | "start" | "play" | "end" | "cleanup";
