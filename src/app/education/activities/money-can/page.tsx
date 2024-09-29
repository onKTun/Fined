"use client";
import { Stage, Container, Text } from "@pixi/react";
import PixiApp from "../../../../components/pixigame/PixiApp";
import script from "./MoneyCanApp";
import styles from "src/app/education/activities/money-can/activity.module.css";

export default function ActivityPage() {
  return (
    <div className={styles.activitycontainer}>
      <Stage width={900} height={700} options={{ background: "3385FF" }}>
        <PixiApp run={script}></PixiApp>
      </Stage>
    </div>
  );
}
