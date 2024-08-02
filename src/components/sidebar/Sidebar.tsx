"use client";

import styles from "./Sidebar.module.css";
import { useSidebar } from "./sidebarContext";

export default function Sidebar() {
  const { isSidebarActive } = useSidebar();
  const className = `${styles.sidebar} ${
    isSidebarActive ? styles.sidebarshown : styles.sidebarhidden
  }`;

  return <aside className={className}></aside>;
}
