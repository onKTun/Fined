import SearchSVG from "../../svg/corecomponents/SearchSVG";
import styles from "./search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <input
        placeholder={"Search..."}
        type="search"
        className={styles.searchContainer}
      ></input>
      <SearchSVG />
    </div>
  );
}
