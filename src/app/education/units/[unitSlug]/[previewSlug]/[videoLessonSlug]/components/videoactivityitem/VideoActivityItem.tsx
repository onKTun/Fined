"use client";
import { useVideoContext } from "src/app/education/units/[unitSlug]/[previewSlug]/[videoLessonSlug]/hooks/VideoContext";
import styles from "./videoactivity.module.css";
import Card from "public/assets/videoactivity/card";
import { useEffect } from "react";
import Image from "next/image";

interface Props {
  timeStamp: number;
  text: string;
  inprogress: boolean;
}

export default function VideoActivityItem({
  timeStamp,
  text,
  inprogress,
}: Props) {
  const { currentTime } = useVideoContext();
  const { setIsActivityActive: setIsActivityActive } = useVideoContext();
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
      setIsActivityActive(true);
    }
  }, [currentTime, timeStamp]);

  return (
    <div
      className={`${styles.wrapper} ${
        completed() ? styles.completed : inprogress ? styles.inprogress : ""
      }`}
    >
      <div className={styles.time}>{formatTime(timeStamp)}</div>
      <Image
        src={
          completed()
            ? "/assets/status/complete.svg"
            : inprogress
            ? "/assets/status/inprogress.svg"
            : "/assets/status/notstarted.svg"
        }
        width={25}
        height={25}
        alt=""
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
        <span>{text}</span>
      </div>
    </div>
  );
}
