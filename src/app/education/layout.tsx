// RootLayout.js

import React from "react";

import { getUserAndCache } from "utils/supabase/user";
import ClientsideEducationLayout from "src/components/layouts/ClientsideEducationLayout";
import DefaultHeader from "src/components/header/DefaultHeader";
import Header from "src/components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";
import { SidebarProvider } from "src/components/sidebar/sidebarContext";

export default async function RootLayout({ children }) {
  const user = await getUserAndCache();

  let isLoggedIn = false;
  if (user != null) {
    isLoggedIn = true;
  }

  return (
    <ClientsideEducationLayout loggedIn={isLoggedIn}>
      {children}
    </ClientsideEducationLayout>
  );
}
