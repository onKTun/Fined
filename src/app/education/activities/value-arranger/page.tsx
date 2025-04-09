"use client";
import data from "src/data/valuearranger.json";
import styles from "src/app/education/activities/money-can/activity.module.css";
import { Stage } from "@pixi/react";
import { useState, useEffect, Suspense } from "react";
import LoadingModal from "src/components/loading/LoadingModal";
import PixiApp from "src/components/pixigame/PixiApp";



const Game = () => {
  const [script, setScript] = useState(() => () => { });

  useEffect(() => {
    let isMounted = true;

    async function loadFunction() {
      const script = (await import("src/app/education/activities/value-arranger/ValueArranger")).default
      if (isMounted) setScript(() => script);
    }

    loadFunction();

    return () => {
      isMounted = false; // Prevent setting state on unmounted component
    };
  }, []);
  return (
    <PixiApp run={script} data={data}></PixiApp>
  );
}

export default function ValueArrangerGamePage() {
  //TODO implement load json data, and pass to component, error handling if no data

  return (<div className={styles.activitycontainer}>
    <div className={styles.container}>
      <Stage width={1118} height={730} options={{ background: "3385FF" }}>
        <Suspense fallback={<LoadingModal />}><Game></Game></Suspense>
      </Stage>
    </div>
  </div>

  )
}