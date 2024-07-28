import { useState } from "react";
import styles from "./Checkbox.module.css";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={isChecked}
        onChange={handleChange}
        id="customCheckbox"
      />
      <label className={styles.checkboxLabel} htmlFor="customCheckbox">
        {/* Custom checkbox styles applied here */}
      </label>
    </div>
  );
}

export default Checkbox;
