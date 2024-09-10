"use client";
import { useVideoContext } from "src/app/education/units/1/videolesson/hooks/VideoContext";
import styles from "./videoactivity.module.css";
import Card from "public/assets/videoactivity/card";

interface Props {
  timeStamp: number;
  svgPath: string;
  text: string;
}

export default function VideoActivityItem({ timeStamp, /*svgPath, text*/ }: Props) {
  const { currentTime } = useVideoContext();
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const completed = () => {
    return currentTime > timeStamp ? true : false;
  };

  return (
    <div
      className={`${styles.wrapper} ${
        currentTime > timeStamp ? styles.completed : ""
      }`}
    >
      <div className={styles.time}>{formatTime(timeStamp)}</div>
      <img
        src={
          completed()
            ? "/assets/status/complete.svg"
            : "/assets/status/notstarted.svg"
        }
        width={25}
        height={25}
      />
      <div className={styles.text}>
        <Card color={completed() ? "var(--finedgreen)" : "gray"} />
        Matching Cards
      </div>
    </div>
  );
}
