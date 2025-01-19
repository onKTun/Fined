import Checkbox from "src/components/ui/checkbox/Checkbox";
import styles from "./login.module.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { login } from "./actions";
import Modal from "src/components/ui/preloginmodal/Modal";
import InputFieldAuth from "../components/inputfieldauth/InputFieldAuth";
import AuthButton from "../components/authbutton/AuthButton";
import AuthModal from "../components/authmodal/AuthModal";

export default function LoginPanel() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
    <form className={styles.formContainer}>
      <div className={styles.login_orSignUpWith}>
        <label
          className={styles.login_orSignUpWithLabel}
          htmlFor="orSignUpWith"
        >
          or sign up with
        </label>
        <hr className={styles.line} />
      </div>
      <div className={styles.login_signUpWith_container}>
        <div className={styles.login_textInput_title}>
          <svg
            width="18"
            height="14"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3883_434)">
              <path
                d="M2.59277 3.23808L8.33351 7.66661C9.3212 8.42851 10.6792 8.42851 11.6668 7.66661L17.4076 3.23804"
                stroke="#838383"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4818 1.33325H3.51884C2.49609 1.33325 1.66699 2.18604 1.66699 3.23801V12.7618C1.66699 13.8138 2.49609 14.6666 3.51884 14.6666H16.4818C17.5046 14.6666 18.3337 13.8138 18.3337 12.7618V3.23801C18.3337 2.18604 17.5046 1.33325 16.4818 1.33325Z"
                stroke="#838383"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3883_434">
                <rect width="20" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Enter your email
        </div>
        <InputFieldAuth
          type="email"
          name="email"
          id="email"
          placeholder="Enter your username or email"
        />
      </div>
      <div className={styles.login_signUpWith_container}>
        <div className={styles.login_textInput_title}>
          <svg
            width="18"
            height="14"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3883_434)">
              <path
                d="M2.59277 3.23808L8.33351 7.66661C9.3212 8.42851 10.6792 8.42851 11.6668 7.66661L17.4076 3.23804"
                stroke="#838383"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4818 1.33325H3.51884C2.49609 1.33325 1.66699 2.18604 1.66699 3.23801V12.7618C1.66699 13.8138 2.49609 14.6666 3.51884 14.6666H16.4818C17.5046 14.6666 18.3337 13.8138 18.3337 12.7618V3.23801C18.3337 2.18604 17.5046 1.33325 16.4818 1.33325Z"
                stroke="#838383"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3883_434">
                <rect width="20" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Enter your password
        </div>
        <InputFieldAuth
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <div className={styles.login_extra}>
          <div className={styles.login_rememberMeWrapper}>
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
      <AuthButton formAction={handleLogin} text="Sign in" />

      <AuthModal message={modalMessage} isShown={showModal} />
    </form>
  );
}
