"use client";
import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

import { login } from "src/app/account/login/actions";
import { useRef, useState } from "react";
import Modal from "src/components/preloginmodal/Modal";

export default function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogin = async (formData) => {
    const error = await login(formData);
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
    <div>
      <form className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username" className={styles.subtitle}>
            Enter your username or password
          </label>
          <InputFieldPL
            type="email"
            name="email"
            id="email"
            placeholder="Enter your username or email"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password" className={styles.subtitle}>
            Enter your password
          </label>
          <InputFieldPL
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <div className={styles.extraContent}>
            <div className={styles.rememberMeWrapper}>
              <Checkbox />
              Remember me
            </div>
            <div className={styles.forgotPasswordText}>
              <Link href="/account/forgotpassword" className="highlightedText">
                <label htmlFor="forgotPassword">Forgot your password?</label>
              </Link>
            </div>
          </div>
        </div>
        <Button
          arrow={true}
          formAction={handleLogin}
          text="Sign in"
          type="submit"
          style={"blue"}
          ftSize={1}
          heightWidth={{}}
        />
        <Modal message={modalMessage} isShown={showModal} />
      </form>
    </div>
  );
}
