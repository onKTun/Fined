import React from "react";
import styles from "./Search.module.css";

interface Props {
  wid: number;
}

const Search: React.FC<Props> = ({ wid }) => {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="search"
        className={styles.searchBar}
        placeholder="Search..."
        style={{ width: `${wid}em` }}
      />
      <div className={styles.text}>
        <p className={styles.buttonStyle}>⌘</p>
        <p className={styles.buttonStyle}>S</p>
      </div>
    </div>
  );
};

export default Search;
