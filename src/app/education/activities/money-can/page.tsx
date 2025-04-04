"use client";
import { Stage } from "@pixi/react";
import PixiApp from "../../../../components/pixigame/PixiApp";
import styles from "src/app/education/activities/money-can/activity.module.css";
import testData from "src/data/moneycan.json";
import { Suspense, useEffect, useState } from "react";
import LoadingModal from "src/components/loading/LoadingModal";

const Game = () => {
  const [script, setScript] = useState(() => () => { });

  useEffect(() => {
    let isMounted = true;

    async function loadFunction() {
      const script = (await import("./MoneyCanApp")).default
      if (isMounted) setScript(() => script);
    }

    loadFunction();

    return () => {
      isMounted = false; // Prevent setting state on unmounted component
    };
  }, []);
  return (
    <PixiApp run={script} data={testData}></PixiApp>
  );
}

export default function MoneyCanActivityPage() {
  //TODO implement load json data, and pass to component, error handling if no data

  return (<div className={styles.activitycontainer}>
    <div className={styles.container}>
      <Stage width={900} height={700} options={{ background: "3385FF" }}>
        <Suspense fallback={<LoadingModal />}><Game></Game></Suspense>
      </Stage>
    </div>
  </div>

  )
}
