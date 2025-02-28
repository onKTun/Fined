"use client";
import { Stage } from "@pixi/react";
import PixiApp from "../../../../components/pixigame/PixiApp";
import styles from "src/app/education/activities/money-can/activity.module.css";
import testData from "src/data/moneycan.json";

export default async function MoneyCanActivityPage() {
  //TODO implement load json data, and pass to component, error handling if no data
  const script = (await import("./MoneyCanApp")).default
  return (
    <div className={styles.activitycontainer}>
      <div className={styles.container}>
        <Stage width={900} height={700} options={{ background: "3385FF" }}>
          <PixiApp run={script} data={testData}></PixiApp>
        </Stage>
      </div>
    </div>
  );
}
