"use client";

import DashboardSVG from "public/svg/sidebar/DashbordSVG";
import Search from "../ui/search/Search";
import Item from "./components/item/Item";
import Profile from "./components/profile/Profile";
import styles from "./Sidebar.module.css";
import { useSidebar } from "./sidebarContext";
import { usePathname } from "next/navigation";
import LessonSVG from "public/svg/sidebar/LessonSVG";
import GlossarySVG from "public/svg/sidebar/GlossarySVG";
import UpdatesSVG from "public/svg/sidebar/UpdatesSVG";
import ProfileSVG from "public/svg/sidebar/ProfileSVG";
import SettingSVG from "public/svg/sidebar/SettingSVG";

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
            svgObject={
              <DashboardSVG topValue={13} leftValue={20} positionAbs={true} />
            }
            link="/education/dashboard"
            isOn={pathname === "/education/dashboard"}
          />
          <Item
            text="Lessons"
            svgObject={
              <LessonSVG topValue={13} leftValue={20} positionAbs={true} />
            }
            link="/education/unitselector"
            isOn={pathname === "/education/unitselector"}
          />
          <Item
            text="Glossary"
            svgObject={
              <GlossarySVG topValue={13} leftValue={19} positionAbs={true} />
            }
            link="/education/glossary"
            isOn={pathname === "/education/glossary"}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <Profile />
      </div>
    </aside>
  );
}
