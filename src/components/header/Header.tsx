"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Search from "../search/Search";
import { useSidebar } from "../sidebar/sidebarContext";

export default function Header() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} href="">
              Contact
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="">
              Sitemap
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="">
              Signout
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="">
              Contact
            </Link>
          </li>
        </ul>
        <Link className={styles.link} href="/account/login">
          <div className={styles.logoWrapper}>
            <div className={styles.logoSVGwrapper}></div>
            <svg
              className={styles.logosvg}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
            >
              <path
                d="M 29.75 13.458 C 29.75 16.979 24.041 19.833 17 19.833 M 29.75 13.458 C 29.75 9.938 24.041 7.083 17 7.083 C 9.959 7.083 4.25 9.938 4.25 13.458 M 29.75 13.458 L 29.75 21.25 C 29.75 24.381 24.041 26.917 17 26.917 M 17 19.833 C 9.959 19.833 4.25 16.979 4.25 13.458 M 17 19.833 L 17 26.917 M 4.25 13.458 L 4.25 21.25 C 4.25 24.381 9.959 26.917 17 26.917 M 9.917 25.962 L 9.917 18.759 M 24.083 25.962 L 24.083 18.759 M 22.667 13.458 C 22.667 14.631 20.131 15.583 17 15.583 C 13.869 15.583 11.333 14.631 11.333 13.458 C 11.333 12.285 13.869 11.333 17 11.333 C 20.131 11.333 22.667 12.285 22.667 13.458 Z"
                fill="transparent"
                stroke-width="2"
                stroke="rgb(255, 255, 255)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray=""
              ></path>
            </svg>
            <div className={styles.logoText}>fin'ed</div>
          </div>
        </Link>
        <div className={styles.search}>
          <Search wid={"30em"} />
        </div>
      </div>
      <button onClick={toggleSidebar} className={styles.sideBarMinimizer}>
        <div className={styles.hamburgerPart}></div>
        <div className={styles.hamburgerPart}></div>
        <div className={styles.hamburgerPart}></div>
      </button>
    </div>
  );
}
