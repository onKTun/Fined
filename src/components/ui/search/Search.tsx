import React from "react";
import styles from "./Search.module.css";

interface Props {
  wid: string;
  rad: number;
  color: string;
}
const convertToMeasurement = (value: string): string => {
  if (/\d+(em|px|%|rem|vw|vh)$/.test(value)) {
    return value;
  }
  return `${value}em`;
};
export default function Search({ wid, rad, color }: Props) {
  const style = {
    width: convertToMeasurement(wid),
    borderRadius: `${rad}px`,
    backgroundColor: `${color}`,
  };

  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="search"
        className={styles.searchBar}
        placeholder="Search..."
        style={style}
      />
      <div className={styles.text}>
        <p className={styles.buttonStyle}>⌘</p>
        <p className={styles.buttonStyle}>S</p>
      </div>
    </div>
  );
}
