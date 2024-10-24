// RootLayout.js
"use client";
import React from "react";
import { SidebarProvider } from "../../components/sidebar/sidebarContext";
import Header from "../../components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";
import { createClient } from "../../../utils/supabase/client";
import { useEffect, useState } from "react";
import DefaultHeader from "src/components/header/DefaultHeader";

export default function RootLayout({ children }) {
  const supabase = createClient(); // Initialize Supabase client
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession(); // Ensure to use getSession()

      if (error) {
        console.error("Error fetching user session:", error.message);
      }

      if (session) {
        setLoggedIn(true);
      }
    };

    checkSession();
  }, [supabase]); // Add su

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
