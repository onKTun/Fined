"use client";
import styles from "./Login.module.css";
import Link from "next/link";
import Image from "next/image";

import LoginForm from "src/app/account/login/login";
import Logo from "src/components/logo/logo";

export default function Login() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.left}>
        <Logo logoStyle="outline"></Logo>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <p className={styles.titleHeader}>Hello, Welcome Back!</p>
            <p className={styles.titleSubheader}>
              Please enter your details below
            </p>
          </div>
          <LoginForm />
        </div>
        <div className={styles.bottomLinkWrapper}>
          <p className={styles.bottomLink}>
            Don't have an account?&nbsp;
            <Link href="/account/signup" className="highlightedText">
              Sign up.
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          alt=""
          src="/assets/backgrounds/MAINBACKGROUND.png"
          layout="fill" // Make the image responsive to the div's size
          objectFit="cover" // Ensure the image fills the div without stretching
        />
      </div>
    </div>
  );
}
