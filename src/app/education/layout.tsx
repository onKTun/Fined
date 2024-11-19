// RootLayout.js

import React from "react";

import { getUserAndCache } from "utils/supabase/user";
import ClientsideEducationLayout from "src/components/layouts/clientsideEducationLayout";

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
