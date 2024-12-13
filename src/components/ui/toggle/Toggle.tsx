"use client";
import styles from "./toggle.module.css";

export default function Toggle() {
  return (
    <label className={styles.switch}>
      <input className={styles.input} type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
}
