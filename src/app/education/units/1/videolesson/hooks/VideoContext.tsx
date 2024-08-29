"use client";
import React, { createContext, useState, useContext } from "react";

interface VideoContextType {
  currentTime: number;
  setCurrentTime: (time: number) => void;
  audio: number;
  setAudio: (progress: number) => void;
  activityLock: boolean;
  setActivityLock: (bool: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  isDragging: boolean;
  setIsDragging: (bool: boolean) => void;
  maxProgress: number;
  setMaxProgress: (time: number) => void;
  currentActivity: number;
  setCurrentActivity: (num: number) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [audio, setAudio] = useState<number>(0.05);
  const [activityLock, setActivityLock] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [maxProgress, setMaxProgress] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(0);

  return (
    <VideoContext.Provider
      value={{
        currentTime,
        setCurrentTime,
        audio,
        setAudio,
        activityLock,
        setActivityLock,
        isPlaying,
        setIsPlaying,
        isDragging,
        setIsDragging,
        maxProgress,
        setMaxProgress,
        currentActivity,
        setCurrentActivity,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};
