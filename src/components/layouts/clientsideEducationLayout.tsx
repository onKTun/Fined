"use client";

import React from "react";
import { SidebarProvider } from "../../components/sidebar/sidebarContext";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import DefaultHeader from "src/components/header/DefaultHeader";

interface RootLayoutProps {
  children: React.ReactNode;
  loggedIn: boolean;
}

export default function ClientsideEducationLayout({
  children,
  loggedIn = false,
}: RootLayoutProps) {
  return (
    <SidebarProvider>
      <div className="viewport">
        {loggedIn ? <Header /> : <DefaultHeader />}
        <div className="contentWithSidebar">
          <Sidebar />
          <div className="content" id="root">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
