import React, { useState } from "react";
import Unitbox from "../unitbox/Unitbox";
import Swipebutton from "../swipebutton/Swipebutton";
import styles from "./parentcomponent.module.css";

const ParentComponent = () => {
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
            progress={unit === 1 ? 100 : unit === 2 ? 20 : 0}
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
};

export default ParentComponent;
