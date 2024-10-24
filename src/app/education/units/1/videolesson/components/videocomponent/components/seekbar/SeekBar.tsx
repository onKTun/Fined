import { useVideoContext } from "../../../../hooks/VideoContext";
import styles from "./seekbar.module.css";
import React, { useState, useRef, useEffect } from "react";
import activityData from "src/data/videoactivity.json";

interface Props {
  onChange: (time: number) => void;
  whileDragging: () => void;
  duration: number;
}

export default function SeekBar({ onChange, whileDragging, duration }: Props) {
  const {
    currentTime,
    setCurrentTime,
    isDragging,
    setIsDragging,
    isActivityActive: isActivityActive,
    maxProgress,
    setMaxProgress,
  } = useVideoContext();
  const [tempProgress, setTempProgress] = useState<number>(
    (currentTime / duration) * 100
  ); // Initialize tempProgress from currentTime
  const progressBarRef = useRef<HTMLDivElement>(null);

  const calcPointColor = (timeStamp: number) => {
    return timeStamp < currentTime + 1 ? "var(--finedgreen)" : "lightgray";
  };

  useEffect(() => {
    const updateMaxProgress = () => {
      const newMaxProgress = (currentTime / duration) * 100;
      if (newMaxProgress > maxProgress && !isActivityActive) {
        setMaxProgress(newMaxProgress);
      }
    };

    const intervalId = setInterval(updateMaxProgress, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime, duration, maxProgress]);

  useEffect(() => {
    // Update tempProgress based on mouse position if dragging + update the sliding bar
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newProgress = Math.min(
          100,
          Math.max(0, (offsetX / rect.width) * 100)
        );
        if (newProgress <= maxProgress && !isActivityActive) {
          setTempProgress(newProgress);
          whileDragging();
        }
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        const newTime = (tempProgress / 100) * duration;
        if (newTime <= maxProgress && !isActivityActive) {
          setCurrentTime(newTime);
          onChange(newTime);
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isDragging,
    tempProgress,
    duration,
    onChange,
    setCurrentTime,
    setIsDragging,
    maxProgress,
  ]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (progressBarRef.current) {
      setIsDragging(true);
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newProgress = Math.min(
        100,
        Math.max(0, (offsetX / rect.width) * 100)
      );
      if (newProgress <= maxProgress && !isActivityActive) {
        setTempProgress(newProgress);
      }
    }
  };

  // Sync tempProgress with currentTime whenever currentTime changes externally, but only if not dragging
  useEffect(() => {
    if (!isDragging) {
      setTempProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration, isDragging]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={progressBarRef}
        className={styles.progressWrapper}
        onMouseDown={handleMouseDown}
      >
        {activityData.map((data, index) => (
          <div
            key={index}
            className={styles.dataPoint}
            style={{
              left: `${(data.timestamp / duration) * 100 - 2.5}%`,
              backgroundColor: `${calcPointColor(data.timestamp)}`,
            }}
          ></div>
        ))}
        <div
          style={{
            width: `${maxProgress}%`, // Use maxProgress for the max width of the progress bar
          }}
          className={styles.maxProgress}
        ></div>
        <div
          style={{
            width: `${tempProgress}%`, // Use tempProgress for the progress bar width
          }}
          className={styles.progress}
        >
          <div
            className={styles.handle}
            onMouseDown={handleMouseDown} // Prevent starting drag when clicking handle
          ></div>
        </div>
      </div>
    </div>
  );
}
