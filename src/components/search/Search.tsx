import React from "react";
import styles from "./Search.module.css";

interface Props {
  wid: string;
}
const convertToMeasurement = (value: string): string => {
  // Check if the value contains any CSS unit
  if (/\d+(em|px|%|rem|vw|vh)$/.test(value)) {
    return value;
  }
  // If no unit is found, default to 'em'
  return `${value}em`;
};
const Search: React.FC<Props> = ({ wid }) => {
  const width = convertToMeasurement(wid);
  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="search"
        className={styles.searchBar}
        placeholder="Search..."
        style={{ width }}
      />
      <div className={styles.text}>
        <p className={styles.buttonStyle}>⌘</p>
        <p className={styles.buttonStyle}>S</p>
      </div>
    </div>
  );
};

export default Search;
