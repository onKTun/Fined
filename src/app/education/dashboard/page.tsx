"use client";
import styles from "./dashboard.module.css";
import { useSidebar } from "../../../components/sidebar/sidebarContext";

export default function Dashboard() {
  const { isSidebarActive } = useSidebar();
  const className = `${styles.bodyDash} ${
    isSidebarActive ? styles.noSidebar : styles.sidebar
  }`;
  return (
    <>
      <div className={className}>
        <div className={styles.banner}></div>
      </div>
    </>
  );
}
