"use client";
import React, { createContext, useState, useContext } from "react";

interface VideoContextType {
  currentTime: number;
  setCurrentTime: (time: number) => void;
  volume: number;
  setVolume: (progress: number) => void;
  isActivityActive: boolean; //is activity currently active? prevents video from playing if there is an activity
  setIsActivityActive: (bool: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  isDragging: boolean;
  setIsDragging: (bool: boolean) => void;
  maxProgress: number; //farthest a user has watched
  setMaxProgress: (time: number) => void;
  currentActivity: number; //immediately upcoming or current activity number
  setCurrentActivity: (num: number) => void;
  videoID: number;
  setVideoID: (num: number) => void;
}

interface VideoProviderProps {
  maxProgress?: number;
  videoID?: number;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<
  VideoProviderProps & { children: React.ReactNode }
> = ({ children, maxProgress: initialMaxProgress, videoID: tempVideoID }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [audio, setAudio] = useState<number>(0.05);
  const [isActivityActive, setIsActivityActive] = useState<boolean>(false); //to prevent fast fowarding past activity
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [maxProgress, setMaxProgress] = useState(initialMaxProgress || 0);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [videoID, setVideoID] = useState(tempVideoID || 0);

  return (
    <VideoContext.Provider
      value={{
        currentTime,
        setCurrentTime,
        volume: audio,
        setVolume: setAudio,
        isActivityActive: isActivityActive,
        setIsActivityActive: setIsActivityActive,
        isPlaying,
        setIsPlaying,
        isDragging,
        setIsDragging,
        maxProgress,
        setMaxProgress,
        currentActivity,
        setCurrentActivity,
        videoID,
        setVideoID,
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
