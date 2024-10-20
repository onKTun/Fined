"use client";
import { Stage } from "@pixi/react";
import PixiApp from "../../../../components/pixigame/PixiApp";
import script from "./CrosswordScript";
import styles from "src/app/education/activities/money-can/activity.module.css";
import crosswordData from "src/data/crossword.json";

export default function CrosswordActivityPage() {
  return (
    <div className={styles.activitycontainer}>
      <Stage width={900} height={700} options={{ background: "3385FF" }}>
        <PixiApp run={script} data={crosswordData}></PixiApp>
      </Stage>
    </div>
  );
}
