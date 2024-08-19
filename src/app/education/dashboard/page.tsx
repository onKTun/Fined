"use client";
import ProgressionParent from "./components/progressionparent/ProgressionParent";
import UpcomingAssignmentParent from "./components/upcomingassigmentparent/UpcomingAssignmentParent";
import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className={styles.bodyDash}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTop}>
          <div className={styles.pageIndicator}>
            <img src="/assets/sidebar/dashboard.svg" />
            Dashboard
          </div>
          <p className={styles.bannerTitle}>FIN'ED© Introduction to Finance</p>
          <p className={styles.bannerText}>
            Something doesn't feel right? Edit it! If you'd like to edit your
            information,{" "}
            <Link href="/education/profile" className={styles.underlinedText}>
              click here.
            </Link>
          </p>
        </div>
        <div className={styles.searchWrapper}>
          <Link
            href="/education/unitselector"
            className={styles.lessonShortcut}
          >
            <div className={styles.svgContainer}>
              <img src="/assets/sidebar/lessons.svg"></img>
            </div>{" "}
            Go to Lessons
          </Link>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <ProgressionParent />
        <UpcomingAssignmentParent />
      </div>
    </div>
  );
}
