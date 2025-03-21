//component that contains the actual game, required parameter of a function housing game logic
"use client"
import { useApp } from "@pixi/react";
import { useEffect } from "react";
import { Application } from "pixi.js";
import script from "src/components/pixigame/ExampleApp";
export interface PixiAppProps {
  run?: (app: Application, data?: JSONValue) => void;
  data?: JSONValue;
}

export default function PixiApp({ run = script, data }: PixiAppProps) {
  const app = useApp();

  useEffect(() => {
    app.stage.removeChildren();
    run(app, data);
  }, [app]);

  return <></>;
}
