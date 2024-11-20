import ProgressBar from "src/components/progress/ProgressBar";
import styles from "./activityselbutton.module.css";
interface Props {
  isSelected: boolean;
  onClick: () => void;
  lessonNum: number;
}

export default function ActivitySelectorButton({
  isSelected,
  onClick,
  lessonNum,
}: Props) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.wrapper} ${isSelected ? styles.selected : {}}`}
      >
        Lesson{" " + lessonNum}
      </button>
      {/* this is just for aesthetics idk how to implement progress lmao */}
    </div>
  );
}
