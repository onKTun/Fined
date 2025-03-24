//dont use this shit bro
"use client";
import { useState, useEffect } from "react";
import PixiApp from "src/components/pixigame/PixiApp";

interface GameActivityComponentProps {
  scriptPath: string;
  data?: JSONValue
}
export default function GameActivityComponent({ scriptPath, data }: GameActivityComponentProps) {
  const [script, setScript] = useState(() => () => { });

  useEffect(() => {
    let isMounted = true;

    async function loadFunction() {
      const script = (await import(scriptPath)).default
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
