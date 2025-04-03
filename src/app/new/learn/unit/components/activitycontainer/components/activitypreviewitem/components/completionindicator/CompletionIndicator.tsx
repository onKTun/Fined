import SmallClock from "src/app/new/svg/corecomponents/SmallClock";
import styles from "./completionindicator.module.css";
interface Completion {
  complete: boolean;
  time: number;
}
export default function CompletionIndicator({ complete, time }: Completion) {
  return (
    <div className={`${styles.container} ${complete ? styles.complete : ""}`}>
      <SmallClock color={complete ? "#2DD221" : "gray"} />
      {complete ? "Complete" : "" + time + " minutes"}
    </div>
  );
}
