import styles from "./unitmodal.module.css";
import UnitLabel from "./unitlabel/UnitLabel";
import LessonCounter from "./lessoncounter/LessonCounter";
import ProgressionCircle from "./circle/ProgressionCircle";
import Link from "next/link";
import LockedSVG from "src/app/new/svg/corecomponents/LockedSVG";

interface Activity {
  activity: string;
  done: boolean;
  link: string;
}

interface Lesson {
  lesson: string;
  video: string;
  videoDone: boolean;
  activities: Activity[];
}

interface Unit {
  unit: number;
  locked: boolean;
  lessons: Lesson[];
}

interface Props {
  data: Unit;
}

export default function UnitModal({ data }: Props) {
  const unitHref = `/new/learn/` + data.unit;
  // Track the completion status of each lesson
  const lessonProgress = data.lessons.map((lesson) => {
    // Check if the lesson is fully completed (video + all activities)
    const isLessonCompleted =
      lesson.videoDone && lesson.activities.every((activity) => activity.done);
    return isLessonCompleted;
  });

  // Calculate the completed lessons and total lessons
  const completedLessons = lessonProgress.filter(
    (completed) => completed
  ).length;
  const totalLessons = lessonProgress.length;

  const generateButtonText = () => {
    return isLocked ? "Locked" : "Select";
  };

  // Calculate progress percentage
  const progressPercentage = (completedLessons / totalLessons) * 100;
  const isLocked = data.locked;

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        {/* Display unit label with progress percentage */}
        <UnitLabel unit={data.unit} percent={progressPercentage} />

        {/* Display lesson completion count */}
        <LessonCounter text={`${completedLessons}/${totalLessons}`} />
      </div>

      <h3>Topics Covered</h3>
      <div className={styles.middleRow}>
        {data.lessons.map((lesson, index) => {
          // Calculate the total number of activities and completed activities for each lesson
          const totalActivities = lesson.activities.length;
          const completedActivities = lesson.activities.filter(
            (activity) => activity.done
          ).length;

          return (
            <div key={index} className={styles.lessonItem}>
              {/* Display progression circle */}
              <ProgressionCircle
                totalActivities={totalActivities}
                completedActivities={completedActivities}
              />
              <label
                className={`${
                  lesson.activities.every((activity) => activity.done)
                    ? styles.completed
                    : lesson.activities.some((activity) => activity.done)
                    ? styles.inProgress
                    : styles.notStarted
                }`}
              >
                {lesson.lesson}
              </label>
            </div>
          );
        })}
      </div>
      <Link
        className={`${styles.hrefButton} ${
          isLocked ? styles.locked : styles.unlocked
        }`}
        href={!isLocked ? unitHref : ""}
      >
        {isLocked && <LockedSVG />}
        {generateButtonText()}
      </Link>
    </div>
  );
}
