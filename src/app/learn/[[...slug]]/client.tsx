"use client";

import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../../../App"), { ssr: false }); //dynamic client side rendering

export function ClientOnly() {
  return <App />;
}
