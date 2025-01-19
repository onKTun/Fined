"use client";
import React from "react";
import Sidebar from "src/app/new/components/sidebar/Sidebar";
import Header from "src/app/new/components/header/Header";

interface RootLayoutProps {
  children: React.ReactNode;
  loggedIn: boolean;
}

export default function ClientsideEducationLayout({
  children,
  loggedIn = false,
}: RootLayoutProps) {
  return (
    <div className="viewport">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="childrenContent">{children}</div>
      </div>
    </div>
  );
}
