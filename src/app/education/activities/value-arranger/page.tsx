"use client";
import GameActivityComponent from "src/components/pixigame/GameActivityComponent";
import script from "src/app/education/activities/value-arranger/ValueArranger";

export default function ValueArrangerGamePage() {
  return (
    <GameActivityComponent
      width={1118}
      height={730}
      run={script}
    ></GameActivityComponent>
  );
}
