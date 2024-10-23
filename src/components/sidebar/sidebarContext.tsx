"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

// Define the shape of the context's value
const SidebarContext = createContext({
  isSidebarActive: false,
  toggleSidebar: () => {},
});

// Provider component
export const SidebarProvider = ({ children }) => {
  //when useState(true) the side bar does not display on initial load
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  useEffect(() => {
    !isSidebarActive ? toggleSidebar() : {};
  }, [pathname]);

  return (
    <SidebarContext.Provider value={{ isSidebarActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for consuming the context
export const useSidebar = () => useContext(SidebarContext);
