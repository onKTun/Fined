"use client";
import React from "react";
import Sidebar from "src/app/new/components/sidebar/Sidebar";
import Header from "src/app/new/components/header/Header";

interface RootLayoutProps {
  children: React.ReactNode;
  loggedIn: boolean;
}

export default function ClientsidePrelogin({
  children,
  loggedIn = false,
}: RootLayoutProps) {
  return (
    <div className="viewport">
      <div className="contentPreLogin">
        <div className="children">{children}</div>
      </div>
    </div>
  );
}
