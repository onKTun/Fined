import Link from "next/link";
import styles from "./Header.module.css";
import Search from "../search/Search";
import { useSidebar } from "../sidebar/sidebarContext";
import Logo from "../logo/logo";

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
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="">
              Feedback
            </Link>
          </li>
        </ul>
        <Logo></Logo>
        <div className={styles.search}>
          <Search rad={10} wid={"30em"} color="#f8f8f8" />
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
