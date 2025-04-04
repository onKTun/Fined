import { ReactElement } from "react";
import styles from "./activitypreviewitem.module.css";
import Button from "src/app/new/components/buttonNew/Button";
import PlaySVG from "src/app/new/svg/video/PlaySVG";
import CompletionIndicator from "./components/completionindicator/CompletionIndicator";
interface Props {
  svg: ReactElement;
  text: string;
  complete: boolean;
  activityUrl: string;
  duration: number;
}

export default function ActivityPreviewItem({
  svg,
  text,
  complete,
  activityUrl,
  duration,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.svgbox}>{svg}</div>
        <div className={styles.lines}>
          <label className={styles.title}>{text}</label>
          <CompletionIndicator complete={complete} time={duration} />
        </div>
      </div>

      <Button
        text={complete ? "Restart" : "Start"}
        styleType={"blue"}
        svg={<PlaySVG />}
      />
    </div>
  );
}
