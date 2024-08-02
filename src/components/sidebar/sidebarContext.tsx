"use client";
import React, { createContext, useState, useContext } from "react";

// Define the shape of the context's value
const SidebarContext = createContext({
  isSidebarActive: true,
  toggleSidebar: () => {},
});

// Provider component
export const SidebarProvider = ({ children }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for consuming the context
export const useSidebar = () => useContext(SidebarContext);
