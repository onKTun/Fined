import { useVideoContext } from "../../hooks/VideoContext";
import styles from "./audiomodal.module.css";
import React, { useState, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onChange: (audio: number) => void;
}

export default function AudioModal({ isOpen, onChange }: Props) {
  const { volume: audio, setVolume: setAudio } = useVideoContext();
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newProgress = Math.min(
          100,
          Math.max(0, (offsetX / rect.width) * 100)
        );
        setAudio(newProgress / 100); // Convert percentage to decimal for volume
        onChange(newProgress / 100);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
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
  }, [isDragging]);

  if (!isOpen) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (progressBarRef.current) {
      setIsDragging(true);
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newProgress = Math.min(
        100,
        Math.max(0, (offsetX / rect.width) * 100)
      );
      setAudio(newProgress / 100); // Set audio as a decimal (0 to 1)]
      onChange(newProgress / 100);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={progressBarRef}
        className={styles.progressWrapper}
        onMouseDown={handleMouseDown}
      >
        <div
          style={{
            width: `${audio * 100}%`, // Convert audio level back to percentage
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
