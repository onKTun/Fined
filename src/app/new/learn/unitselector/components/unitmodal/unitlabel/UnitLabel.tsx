import styles from "./unitlabel.module.css";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";
interface Props {
  unit: number;
  percent: number;
}
export default function UnitModal({ unit, percent }: Props) {
  return percent === 0 ? (
    <div className={`${styles.container} ${styles.notStarted}`}>
      <BookSVG color={"#C4C4C4"} width={16} height={16} /> Unit {unit}
    </div>
  ) : percent === 100 ? (
    <div className={`${styles.container} ${styles.completed}`}>
      <BookSVG color={"#10DC01"} width={16} height={16} /> Unit {unit}
    </div>
  ) : (
    <div className={`${styles.container} ${styles.inProgress}`}>
      <BookSVG color={"#FFD365"} width={16} height={16} /> Unit {unit}
    </div>
  );
}
