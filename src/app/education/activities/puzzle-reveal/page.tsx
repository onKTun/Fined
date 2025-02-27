"use client"
import { Stage } from "@pixi/react";
import PixiApp from "src/components/pixigame/PixiApp";
import script from "./PuzzleRevealApp";
import styles from "src/app/education/activities/puzzle-reveal/activity.module.css";
import optionData from "src/data/puzzleReveal.json"
export default function PuzzleRevealActivityPage(){

    return (
        <div className={styles.activitycontainer}>
        <div className={styles.container}>
        <Stage width={900} height={700} options={{ background: "3385FF" }}>
                    <PixiApp run={script} data={optionData}></PixiApp>
                </Stage>
        </div>
      </div>
    )
}