"use client";
import GameActivityComponent from "src/components/pixigame/GameActivityComponent";
import script from "src/app/education/activities/value-arranger/ValueArranger";
import data from "src/data/valuearranger.json"

export default function ValueArrangerGamePage() {
  return (
    <GameActivityComponent
      width={1118}
      height={730}
      run={script}
      data={data}
    ></GameActivityComponent>
  );
}
