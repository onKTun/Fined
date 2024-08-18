"use client";
import { Shape } from "@react-three/drei";
import styles from "./toggle.module.css";
import { useState } from "react";

export default function Toggle() {
  const [isToggled, toggleButton] = useState(false);
  const onClick = () => {
    toggleButton(!isToggled);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.wrapper} ${isToggled ? styles.toggled : ""}`}
    >
      <div className={styles.circle}></div>
    </button>
  );
}
