"use client";
import { Stage, Container, Text } from "@pixi/react";
import PixiApp from "../../../../components/pixigame/PixiApp";
import script from "./MoneyCanApp";
import styles from "src/app/education/activities/money-can/activity.module.css";
import testData from "src/data/moneycan.json";

export default function MoneyCanActivityPage() {
  //TODO implement load json data, and pass to component, error handling if no data

  return (
    <div className={styles.activitycontainer}>
      <Stage width={900} height={700} options={{ background: "3385FF" }}>
        <PixiApp run={script} data={testData}></PixiApp>
      </Stage>
    </div>
  );
}
