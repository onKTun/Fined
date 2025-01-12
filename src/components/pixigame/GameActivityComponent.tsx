"use client";
import { Stage } from "@pixi/react";
import PixiApp from "src/components/pixigame/PixiApp";
import { PixiAppProps } from "src/components/pixigame/PixiApp";

export default function GameActivityComponent({ run, data }: PixiAppProps) {
  return (
    <Stage width={900} height={700} options={{ background: "3385FF" }}>
      <PixiApp run={run} data={data}></PixiApp>
    </Stage>
  );
}
