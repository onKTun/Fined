"use client";
import styles from "./toggle.module.css";
import { useState } from "react";

interface ToggleProps {
  onChange: (checked: boolean) => void;
}

export default function Toggle({ onChange }: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <label className={styles.switch}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
