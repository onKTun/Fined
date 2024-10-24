//component that contains the actual game, required parameter of a function housing game logic
import { useApp } from "@pixi/react";
import { useEffect } from "react";
import { Application } from "pixi.js";

interface Props {
  run: (app: Application, data?: JSONValue) => void;
  data?: JSONValue;
}

export default function PixiApp({ run, data }: Props) {
  const app = useApp();

  useEffect(() => {
    app.stage.removeChildren();
    run(app, data);
  }, [app]);

  return <></>;
}
