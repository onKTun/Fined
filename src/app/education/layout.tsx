// RootLayout.js
"use client";
import React from "react";
import { SidebarProvider } from "../../components/sidebar/sidebarContext";
import Sidebar from "src/components/sidebar/Sidebar";
import { createClient } from "../../../utils/supabase/client";
import { useEffect, useState } from "react";
import DefaultHeader from "src/components/header/DefaultHeader";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="viewport">
        <DefaultHeader />
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
