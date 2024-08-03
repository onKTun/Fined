"use client";

import Search from "../search/Search";
import Item from "./components/item/Item";
import styles from "./Sidebar.module.css";
import { useSidebar } from "./sidebarContext";

export default function Sidebar() {
  const { isSidebarActive } = useSidebar();
  const className = `${styles.sidebar} ${
    isSidebarActive ? styles.sidebarhidden : styles.sidebarshown
  }`;

  return (
    <aside className={className}>
      <Search wid={"18em"} />
      <div className={styles.buttonGroup}>
        <div className={styles.subtitle}>Essentials</div>
        <Item
          text="Dashboard"
          leftvalue={20}
          topvalue={13}
          src="/assets/sidebar/dashboard.svg"
        />
        <Item
          text="Lessons"
          leftvalue={20}
          topvalue={13}
          src="/assets/sidebar/lessons.svg"
        />
        <Item
          text="Progress"
          leftvalue={19}
          topvalue={12}
          src="/assets/sidebar/progress.svg"
        />
        <Item
          text="Glossary"
          leftvalue={19}
          topvalue={13}
          src="/assets/sidebar/glossary.svg"
        />
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.subtitle}>Essentials</div>
        <Item
          text="Updates"
          leftvalue={20}
          topvalue={13}
          src="/assets/sidebar/updates.svg"
        />
        <Item
          text="Account"
          leftvalue={20}
          topvalue={13}
          src="/assets/sidebar/profile.svg"
        />
        <Item
          text="Settings"
          leftvalue={19}
          topvalue={12}
          src="/assets/sidebar/settings.svg"
        />
      </div>
    </aside>
  );
}
