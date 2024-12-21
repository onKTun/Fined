import ProgressBar from "src/components/ui/progress/ProgressBar";
import styles from "./unitbox.module.css";
interface Props {
  unit: number;
  progress: number;
  isSelected: boolean;
  topicsCovered: string[];
  onClick: () => void;
  isLocked: boolean;
}

export default function Unitbox({
  unit,
  progress,
  isSelected,
  topicsCovered,
  onClick,
  isLocked,
}: Props) {
  // Function to determine the correct style based on progress
  function findStyle(index: number): string {
    const totalTopics = topicsCovered.length;
    const progressPerTopic = 100 / totalTopics;
    const topicProgress = progress >= progressPerTopic * index;

    if (topicProgress) {
      return styles.completedTopic;
    } else if (progress > progressPerTopic * (index - 1)) {
      return styles.inprogressTopic;
    }
    return styles.notStartedTopic;
  }

  return (
    <div
      className={`${styles.wrapper} ${isLocked ? styles.lockedWrapper : {}} ${
        isSelected ? styles.selected : styles.unselected
      }`}
      onClick={() => (!isLocked ? onClick() : {})}
    >
      {/*<div
        className={`${styles.topIndicator} ${
          isLocked
            ? styles.locked
            : progress === 0
            ? styles.notstarted
            : progress < 100 && progress > 0
            ? styles.inprogress
            : styles.completed
        }`}
      ></div>*/}
      <div className={styles.content}>
        <div className={styles.unitTitle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M 22 4.85 L 22 16.74 C 22 17.71 21.21 18.6 20.24 18.72 L 19.93 18.76 C 18.29 18.98 15.98 19.66 14.12 20.44 C 13.47 20.71 12.75 20.22 12.75 19.51 L 12.75 5.6 C 12.75 5.23 12.96 4.89 13.29 4.71 C 15.12 3.72 17.89 2.84 19.77 2.68 L 19.83 2.68 C 21.03 2.68 22 3.65 22 4.85 Z M 10.708 4.71 C 8.878 3.72 6.108 2.84 4.228 2.68 L 4.158 2.68 C 2.958 2.68 1.988 3.65 1.988 4.85 L 1.988 16.74 C 1.988 17.71 2.778 18.6 3.748 18.72 L 4.058 18.76 C 5.698 18.98 8.008 19.66 9.868 20.44 C 10.518 20.71 11.238 20.22 11.238 19.51 L 11.238 5.6 C 11.241 5.228 11.037 4.885 10.708 4.71 Z M 4.998 7.74 L 7.248 7.74 C 7.662 7.74 7.998 8.076 7.998 8.49 C 7.998 8.904 7.662 9.24 7.248 9.24 L 4.998 9.24 C 4.584 9.24 4.248 8.904 4.248 8.49 C 4.248 8.076 4.584 7.74 4.998 7.74 Z M 7.998 12.24 L 4.998 12.24 C 4.584 12.24 4.248 11.904 4.248 11.49 C 4.248 11.076 4.584 10.74 4.998 10.74 L 7.998 10.74 C 8.412 10.74 8.748 11.076 8.748 11.49 C 8.748 11.904 8.412 12.24 7.998 12.24 Z"
              fill="rgb(255, 255, 255)"
            ></path>
          </svg>
          <label>Unit {`${unit}`}</label>
        </div>
        <label className={styles.topicsCoveredText}>Learning Objectives</label>
        <div className={styles.line}></div>
        <ul className={styles.list}>
          {topicsCovered.map((_, index) => (
            <li
              key={index}
              className={`${findStyle(index + 1)} ${styles.topicDefault}`}
            >
              <label>{topicsCovered[index]}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.progressPOS}>
        {/*<ProgressBar progress={progress} />*/}
      </div>
    </div>
  );
}
