"use client";

import styles from "./Sidebar.module.css";

interface Props {
  sidebarState: boolean;
}

export default function Sidebar({ sidebarState }: Props) {
  const className = `${styles.sidebar} ${
    sidebarState ? styles.sidebarshown : styles.sidebarhidden
  }`;

  return <aside className={className}></aside>;
}
