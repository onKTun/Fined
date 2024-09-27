"use client";

import { useEffect, useRef } from "react";
import { Application } from "pixi.js";
import "@pixi/events";

export default function MoneyCanActivity() {
  //use ref used to maintain pure function and still persist value throughout multiple renders
  const pixiApp = useRef<Application>(null);

  if (pixiApp.current === null) {
    pixiApp.current = new Application({
      width: 800,
      height: 600,
      backgroundColor: 0x5bba6f,
    });
  }

  //reference to div
  const pixiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On first render add app to DOM
    pixiRef.current!.appendChild(pixiApp.current!.view as HTMLCanvasElement);

    // Start the PixiJS app
    pixiApp.current!.start();

    return () => {
      // On unload stop the application
      pixiApp.current!.stop();
    };
  }, []);

  return <div ref={pixiRef}></div>;
}
