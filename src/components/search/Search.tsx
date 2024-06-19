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
      <p>⌘S</p>
    </div>
  );
};

export default Search;
