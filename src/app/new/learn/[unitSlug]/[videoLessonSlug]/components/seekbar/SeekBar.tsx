import { updateVideoProgress } from "utils/supabase/lessonProgressService";
import styles from "./seekbar.module.css";
import React, { useState, useRef, useEffect } from "react";
import { useVideoContext } from "../../hooks/VideoContext";

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
    videoID,
  } = useVideoContext();
  const [tempProgress, setTempProgress] = useState<number>(currentTime); // Initialize tempProgress from currentTime
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMaxProgress = () => {
      console.log(`Current Time: ${currentTime}, Max Progress: ${maxProgress}`);
      const newMaxProgress = currentTime;
      if (newMaxProgress > maxProgress && !isActivityActive) {
        setMaxProgress(newMaxProgress);
        updateVideoProgress(videoID, maxProgress);
      }
    };

    const intervalId = setInterval(updateMaxProgress, 100);

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
        <div
          style={{
            width: `${100}%`, // Use maxProgress for the max width of the progress bar
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
