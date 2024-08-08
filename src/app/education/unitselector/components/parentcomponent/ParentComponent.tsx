import React, { useState } from "react";
import Unitbox from "../unitbox/Unitbox";
import Swipebutton from "../swipebutton/Swipebutton";
import styles from "./parentcomponent.module.css";
interface Props {
  percent: number[];
}

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
        {[1, 2, 3, 4].map((unit) => (
          <Unitbox
            key={unit}
            unit={unit}
            progress={percent[unit - 1]}
            isSelected={selectedUnit === unit}
            onClick={() => handleUnitClick(unit)}
          />
        ))}
      </div>
      <div className={styles.buttonSection}>
        <Swipebutton isSelected={isSwipeButtonSelected} />
      </div>
    </>
  );
}
