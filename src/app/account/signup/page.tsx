"use client";

import styles from "../login/Login.module.css";
import Link from "next/link";
import SignUpForm from "./signup";
import Image from "next/image";
import Logo from "src/components/ui/logo/logo";

export default function SignUpPage() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.left}>
        <Logo logoStyle="outline"></Logo>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <p className={styles.titleHeader}>Hello, Sign up!</p>
            <p className={styles.titleSubheader}>
              Please enter your details below
            </p>
          </div>
          <SignUpForm />
        </div>
        <div className={styles.bottomLinkWrapper}>
          <label className={styles.bottomLink}>
            Already have an account?&nbsp;
            <Link href="/account/login" className="highlightedText">
              Sign in.
            </Link>
          </label>
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
