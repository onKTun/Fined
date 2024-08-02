import Link from "next/link";
import styles from "./account/login/Login.module.css";

export default function SiteMap() {
  return (
    <div className={styles.left}>
      <p>Temp Sitemap</p>
      <Link href="/account/login" className="highlightedText">
        Login
      </Link>
      <Link href="/account/signup" className="highlightedText">
        Signup
      </Link>
      <Link href="/account/forgotpassword" className="highlightedText">
        Forgot Password
      </Link>
      <Link href="/education/dashboard" className="highlightedText">
        Dashboard
      </Link>
    </div>
  );
}
