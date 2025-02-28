"use client";
import GameActivityComponent from "src/components/pixigame/GameActivityComponent";
import data from "src/data/valuearranger.json";
import styles from "src/app/education/activities/money-can/activity.module.css";

export default async function ValueArrangerGamePage() {
  const script = (await import("src/app/education/activities/value-arranger/ValueArranger")).default
  return (
    <div className={styles.activitycontainer}>
      <div className={styles.container}>
        <GameActivityComponent
          width={1118}
          height={730}
          run={script}
          data={data}
        ></GameActivityComponent>
      </div>
    </div>
  );
}
