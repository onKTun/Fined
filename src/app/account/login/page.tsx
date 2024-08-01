"use client";

import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.left}>
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
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <p className={styles.titleHeader}>Hello, Welcome Back!</p>
            <p className={styles.titleSubheader}>
              Please enter your details below
            </p>
          </div>
          <div className={styles.inputWrapper}>
            <p className={styles.subtitle}>Enter your username</p>
            <InputFieldPL type="email" />
          </div>
          <div className={styles.inputWrapper}>
            <p className={styles.subtitle}>Enter your password</p>
            <InputFieldPL type="password" />
            <div className={styles.extraContent}>
              <div className={styles.rememberMeWrapper}>
                <Checkbox />
                Remember me
              </div>
              <div className={styles.forgotPasswordText}>
                <Link
                  href="/account/forgotpassword"
                  className="highlightedText"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>
          <Button text="Sign in" />
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
      <div className={styles.right}></div>
    </div>
  );
}
