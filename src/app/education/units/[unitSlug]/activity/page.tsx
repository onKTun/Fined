import styles from "./activitypage.module.css";

export default function ActivityPage() {
  return (
    <section className={styles.mainBody}>
      <div className={styles.activityContainer}>
        <div className={styles.headerContainer}>Current Activity</div>
      </div>
    </section>
  );
}
