"use client";

import styles from "../login/Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "../../../components/button/Button";
import Image from "next/image";
import Logo from "src/components/logo/logo";
import { changePassword } from "../login/actions";
import { useState, useRef } from "react";
import Modal from "src/components/preloginmodal/Modal";

export default function ChangePassword() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChangePassword = async (formData: FormData) => {
    const error = await changePassword(formData);
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
            <p className={styles.titleHeader}>Change your Password</p>
            <p className={styles.titleSubheader}>
              Enter your new password below.
            </p>
          </div>
          <form>
            <div className={styles.inputWrapper}>
              <label htmlFor="password" className={styles.subtitle}>
                Enter your new password.
              </label>
              <InputFieldPL
                type="password"
                id="password"
                name="password"
                placeholder="Please enter new password"
              />
            </div>
            <Button
              arrow={true}
              text="Change Password"
              type="submit"
              style={"blue"}
              ftSize={1}
              formAction={handleChangePassword}
              heightWidth={{}}
            />{" "}
          </form>
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
