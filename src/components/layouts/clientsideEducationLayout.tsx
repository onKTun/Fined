// RootLayout.js
"use client";
import React, { useEffect, useState } from "react";
import { SidebarProvider } from "../sidebar/sidebarContext";
import Header from "../header/Header";
import Sidebar from "src/components/sidebar/Sidebar";

import DefaultHeader from "src/components/header/DefaultHeader";
import { getUser } from "utils/supabase/client";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function ClientSideEducationLayout({
  children,
}: RootLayoutProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(getUser());
  });

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
