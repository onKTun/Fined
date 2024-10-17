"use client";
import { useVideoContext } from "src/app/education/units/1/videolesson/hooks/VideoContext";
import styles from "./videoactivity.module.css";
import Card from "public/assets/videoactivity/card";
import { useEffect } from "react";

interface Props {
  timeStamp: number;
  svgPath: string;
  text: string;
  inprogress: boolean;
}

export default function VideoActivityItem({
  timeStamp,
  //svgPath,
  //text,
  inprogress,
}: Props) {
  const { currentTime } = useVideoContext();
  const { setActivityLock } = useVideoContext();
  const offset = 1;

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const completed = () => {
    return currentTime + offset > timeStamp ? true : false;
  };

  useEffect(() => {
    if (currentTime === timeStamp - offset) {
      setActivityLock(true);
    }
  }, [currentTime, timeStamp]);

  return (
    <div
      className={`${styles.wrapper} ${
        completed() ? styles.completed : inprogress ? styles.inprogress : ""
      }`}
    >
      <div className={styles.time}>{formatTime(timeStamp)}</div>
      <img
        src={
          completed()
            ? "/assets/status/complete.svg"
            : inprogress
            ? "/assets/status/inprogress.svg"
            : "/assets/status/notstarted.svg"
        }
        width={25}
        height={25}
      />
      <div className={styles.text}>
        <Card
          color={
            completed()
              ? "var(--finedgreen)"
              : inprogress
              ? "var(--finedblue)"
              : "gray"
          }
        />
        Matching Cards
      </div>
    </div>
  );
}
