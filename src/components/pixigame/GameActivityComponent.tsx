"use client";
import { Stage } from "@pixi/react";
import PixiApp from "src/components/pixigame/PixiApp";
import { PixiAppProps } from "src/components/pixigame/PixiApp";

interface GameActivityComponentProps {
  width?: number;
  height?: number;
}

export default function GameActivityComponent({
  width = 900,
  height = 700,
  run,
  data,
}: GameActivityComponentProps & PixiAppProps) {
  return (
    <Stage width={width} height={height} options={{ background: "3385FF" }}>
      <PixiApp run={run} data={data}></PixiApp>
    </Stage>
  );
}
