// RootLayout.js

import React from "react";

import { getUserAndCache } from "utils/supabase/user";
import ClientsidePrelogin from "src/components/layouts/clientsidePrelogin";

export default async function RootLayout({ children }) {
  const user = await getUserAndCache();

  let isLoggedIn = false;
  if (user != null) {
    isLoggedIn = true;
  }

  return (
    <ClientsidePrelogin loggedIn={isLoggedIn}>{children}</ClientsidePrelogin>
  );
}
