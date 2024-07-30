import React, { useState } from "react";
import styles from "./TypeSelector.module.css";

function TypeSelector() {
  const [selectedType, setSelectedType] = useState<
    "student" | "educator" | null
  >(null);

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          selectedType === "student" ? styles.selected : styles.unselected
        }`}
        onClick={() => setSelectedType("student")}
      >
        Student
      </button>
      <button
        className={`${styles.button} ${
          selectedType === "educator" ? styles.selected : styles.unselected
        }`}
        onClick={() => setSelectedType("educator")}
      >
        Educator
      </button>
    </div>
  );
}

export default TypeSelector;
