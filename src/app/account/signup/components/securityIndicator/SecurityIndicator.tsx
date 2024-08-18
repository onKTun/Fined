import styles from "./SecurityIndicator.module.css";

function SecurityIndicator() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.item}>
        Password must be at least 8 characters in length
      </p>
      <p className={styles.item}>
        Password must include at least one capital and lowercase letter
      </p>
      <p className={styles.item}>
        Username cannot include any special characters ($, %, &, ect.)
      </p>
    </div>
  );
}
export default SecurityIndicator;
