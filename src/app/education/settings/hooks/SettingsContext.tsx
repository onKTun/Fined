// src/context/SettingsContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

interface SettingsContextProps {
  highContrast: boolean;
  darkMode: boolean;
  fontSize: string;
  toggleSetting: (settingName: string) => void;
  setFontSize: (size: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({
    highContrast: false,
    darkMode: false,
    fontSize: "medium",
  });

  const toggleSetting = (settingName: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingName]: !prevSettings[settingName],
    }));
  };

  const setFontSize = (size: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      fontSize: size,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{ ...settings, toggleSetting, setFontSize }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
