import React, { useState } from "react";
import styles from "./TypeSelector.module.css";

interface AccountTypeSelectorProps {
  selectedType: AccountType;
  setSelectedType: (arg0: AccountType) => void;
}

export default function AccountTypeSelector({
  selectedType,
  setSelectedType,
}: AccountTypeSelectorProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          selectedType === "student" ? styles.selected : styles.unselected
        }`}
        type="button"
        onClick={() => setSelectedType("student")}
      >
        Student
      </button>
      <button
        className={`${styles.button} ${
          selectedType === "educator" ? styles.selected : styles.unselected
        }`}
        type="button"
        onClick={() => setSelectedType("educator")}
      >
        Educator
      </button>
    </div>
  );
}
