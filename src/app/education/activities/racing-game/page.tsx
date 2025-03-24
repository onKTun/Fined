"use client";

import styles from "src/app/education/activities/money-can/activity.module.css";
import { Stage } from "@pixi/react";
import { Suspense, useEffect, useState } from "react";
import LoadingModal from "src/components/loading/LoadingModal";
import PixiApp from "src/components/pixigame/PixiApp";

const Game = () => {
    const [script, setScript] = useState(() => () => { });

    useEffect(() => {
        let isMounted = true;

        async function loadFunction() {
            const script = (await import("src/app/education/activities/racing-game/RacingGame")).default
            if (isMounted) setScript(() => script);
        }

        loadFunction();

        return () => {
            isMounted = false; // Prevent setting state on unmounted component
        };
    }, []);
    return (
        <PixiApp run={script} ></PixiApp>
    );
}
export default function RacingGamePage() {


    return (<div className={styles.activitycontainer}>
        <div className={styles.container}>
            <Stage width={924} height={648} options={{ background: "3385FF" }}>
                <Suspense fallback={<LoadingModal />}><Game></Game></Suspense>
            </Stage>
        </div>
    </div>

    )
}