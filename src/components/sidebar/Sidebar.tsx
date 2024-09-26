"use client";

import Search from "../search/Search";
import Item from "./components/item/Item";
import Profile from "./components/profile/Profile";
import styles from "./Sidebar.module.css";
import { useSidebar } from "./sidebarContext";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { isSidebarActive } = useSidebar();
  const className = `${styles.sidebar} ${
    isSidebarActive ? styles.sidebarhidden : styles.sidebarshown
  }`;
  const pathname = usePathname();
  return (
    <aside className={className}>
      <div className={styles.top}>
        <Search rad={5} wid={"18em"} color="#f8f8f8" />
        <div className={styles.buttonGroup}>
          <div className={styles.subtitle}>Essentials</div>
          <Item
            text="Dashboard"
            leftvalue={20}
            topvalue={13}
            src="/assets/sidebar/dashboard.svg"
            link="/education/dashboard"
            isOn={pathname === "/education/dashboard"}
          />
          <Item
            text="Lessons"
            leftvalue={20}
            topvalue={13}
            src="/assets/sidebar/lessons.svg"
            link="/education/unitselector"
            isOn={pathname === "/education/unitselector"}
          />
          <Item
            text="Glossary"
            leftvalue={19}
            topvalue={13}
            src="/assets/sidebar/glossary.svg"
            link="/education/glossary"
            isOn={pathname === "/education/glossary"}
          />
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.subtitle}>Personal</div>
          <Item
            text="Updates"
            leftvalue={20}
            topvalue={13}
            src="/assets/sidebar/updates.svg"
            link=""
            isOn={pathname === ""}
          />
          <Item
            text="Account"
            leftvalue={20}
            topvalue={13}
            src="/assets/sidebar/profile.svg"
            link="/education/profile"
            isOn={pathname === "/education/profile"}
          />
          <Item
            text="Settings"
            leftvalue={19}
            topvalue={12}
            src="/assets/sidebar/settings.svg"
            link="/education/settings"
            isOn={pathname === "/education/settings"}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <Profile />
      </div>
    </aside>
  );
}
