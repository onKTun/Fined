"use client";
import React, { createContext, useState, useContext } from "react";

interface VideoContextType {
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <VideoContext.Provider value={{ currentTime, setCurrentTime }}>
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
