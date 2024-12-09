"use client";
import React, { createContext, useState, useContext } from "react";

interface UnitContextType {
  lessonID: number;
  setLessonID: (num: number) => void;
}

interface UnitContextProps {
  lessonID?: number;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export const UnitProvider: React.FC<
  UnitContextProps & { children: React.ReactNode }
> = ({ children, lessonID: templessonID }) => {
  const [lessonID, setLessonID] = useState(templessonID || 1);

  return (
    <UnitContext.Provider
      value={{
        lessonID: lessonID,
        setLessonID,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export const useUnitContext = () => {
  const context = useContext(UnitContext);
  if (context === undefined) {
    throw new Error("useUnitContext must be used within a UnitProvider");
  }
  return context;
};
