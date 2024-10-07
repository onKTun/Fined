import Link from "next/link";
import styles from "./account/login/Login.module.css";
import SignOutButton from "src/app/signouttest";

export default function SiteMap() {
  return (
    <div className={styles.left}>
      <p>Temporary Sitemap for Development...</p>
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
      <Link href="/education/activities/money-can" className="highlightedText">
        Money-can activity
      </Link>
      <SignOutButton></SignOutButton>
    </div>
  );
}
