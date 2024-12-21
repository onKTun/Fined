import React, { useState } from "react";
import Unitbox from "../unitbox/Unitbox";
import Swipebutton from "../swipebutton/Swipebutton";
import styles from "./parentcomponent.module.css";
import unitsData from "src/data/info.json";

interface Props {
  percent: number[];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ParentComponent({ percent }: Props) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isSwipeButtonSelected, setIsSwipeButtonSelected] = useState(false);

  const handleUnitClick = (unit) => {
    if (selectedUnit === unit) {
      setSelectedUnit(null);
      setIsSwipeButtonSelected(false);
    } else {
      setSelectedUnit(unit);
      setIsSwipeButtonSelected(true);
    }
  };

  return (
    <>
      <div className={styles.untiselection}>
        {unitsData.map((unitData) => (
          <Unitbox
            key={unitData.unit}
            unit={unitData.unit}
            progress={0}
            isSelected={selectedUnit === unitData.unit}
            onClick={() => handleUnitClick(unitData.unit)}
            topicsCovered={unitData.topicsCovered}
            isLocked={unitData.isLocked}
          />
        ))}
      </div>
      <div className={styles.buttonSection}>
        <Swipebutton
          isSelected={isSwipeButtonSelected}
          selectedUnit={selectedUnit}
        />
      </div>
    </>
  );
}
