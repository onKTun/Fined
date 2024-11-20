"use client";

import styles from "../login/Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "../../../components/button/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "src/components/logo/logo";
import { forgotPassword } from "../login/actions";
import { useState, useRef } from "react";
import Modal from "src/components/preloginmodal/Modal";

export default function ForgotPassword() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleForgotPassword = async (formData: FormData) => {
    const error = await forgotPassword(formData);
    if (error) {
      setModalMessage(error);
      setShowModal(true);

      // Clear the previous timeout if it's still running
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Automatically close modal after 8 seconds
      timeoutRef.current = setTimeout(() => setShowModal(false), 8000);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <Modal message={modalMessage} isShown={showModal} />
      <div className={styles.left}>
        <Logo logoStyle="outline"></Logo>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <p className={styles.titleHeader}>Forgot your Password?</p>
            <p className={styles.titleSubheader}>
              No worries, please enter your details below
            </p>
          </div>
          <form>
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.subtitle}>
                Enter your account's corresponding email
              </label>
              <InputFieldPL
                type="email"
                id="email"
                name="email"
                placeholder="Please enter email"
              />
            </div>
            <Button
              arrow={true}
              text="Send Confirmation Email"
              type="submit"
              style={"blue"}
              ftSize={1}
              formAction={handleForgotPassword}
              heightWidth={{}}
            />{" "}
          </form>
        </div>
        <div className={styles.bottomLinkWrapper}>
          <p className={styles.bottomLink}>
            Don't have an account?&nbsp;
            <Link href="/account/signup" className="highlightedText">
              Sign in.
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
