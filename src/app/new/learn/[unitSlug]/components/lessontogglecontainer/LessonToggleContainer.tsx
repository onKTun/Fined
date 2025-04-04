import Button from "src/app/new/components/buttonNew/Button";
import styles from "./lessontoggle.module.css";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";

interface LessonToggleProps {
  onLessonChange: (lesson: number) => void;
  selectedLesson: number;
}

export default function LessonToggleContainer({
  selectedLesson,
  onLessonChange,
}: LessonToggleProps) {
  const returnStyle = (lesson: number) => {
    return selectedLesson === lesson ? "blue" : "regular";
  };
  const returnSVGStyle = (lesson: number) => {
    return selectedLesson === lesson ? "white" : "#C9C9C9";
  };

  return (
    <div className={styles.container}>
      <Button
        text={"Lesson 1"}
        styleType={returnStyle(1)}
        onClick={() => {
          onLessonChange(1);
        }}
        svg={<BookSVG color={returnSVGStyle(1)} width={15} height={16} />}
      />
      <Button
        text={"Lesson 2"}
        styleType={returnStyle(2)}
        onClick={() => onLessonChange(2)}
        svg={<BookSVG color={returnSVGStyle(2)} width={15} height={16} />}
      />
      <Button
        text={"Lesson 3"}
        styleType={returnStyle(3)}
        onClick={() => onLessonChange(3)}
        svg={<BookSVG color={returnSVGStyle(3)} width={15} height={16} />}
      />
      <Button
        text={"Lesson 4"}
        styleType={returnStyle(4)}
        onClick={() => onLessonChange(4)}
        svg={<BookSVG color={returnSVGStyle(4)} width={15} height={16} />}
      />
    </div>
  );
}
