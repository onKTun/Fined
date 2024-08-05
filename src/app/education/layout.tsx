// RootLayout.js
import React from "react";
import { SidebarProvider } from "../../components/sidebar/sidebarContext";
import Header from "../../components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="viewport">
        <Header />
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
