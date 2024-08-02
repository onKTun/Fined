"use client";
import "src/index.css";
import Header from "../../components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";
import { useState } from "react";
import { metadata } from "../education/metadata";

export const getMetadata = () =>
  metadata; /* metadata is in a seperate file bc it cant be defined while client is being used */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarActive, setIsActive] =
    useState(
      true
    ); /* useState param defines what comes first, so true would mean sidebar automatically appears */
  const toggleClass = () => {
    setIsActive(!isSidebarActive);
  };

  return (
    <div className="viewport">
      <Header toggleClass={toggleClass} />
      <div className="pageContent">
        <Sidebar sidebarState={isSidebarActive} />
        <div id="root">{children}</div>
      </div>
    </div>
  );
}
