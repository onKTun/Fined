"use client";
import styles from "./unitselector.module.css";
import unitData from "src/data/unitdata.json";
import UnitModal from "./components/unitmodal/UnitModal";

export default function UnitSelector() {
  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerSVGContainer}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 2.67671V17.3431C24 18.5396 23.0526 19.6375 21.8893 19.7855L21.5175 19.8348C19.5507 20.1062 16.7803 20.945 14.5497 21.9071C13.7701 22.2402 12.9067 21.6357 12.9067 20.76V3.60185C12.9067 3.14545 13.1585 2.72606 13.5543 2.50402C15.749 1.28285 19.071 0.197361 21.3256 0H21.3976C22.8367 0 24 1.1965 24 2.67671ZM10.4577 2.50402C8.26304 1.28285 4.94104 0.197361 2.68639 0H2.60244C1.1633 0 0 1.1965 0 2.67671V17.3431C0 18.5396 0.947431 19.6375 2.11073 19.7855L2.48251 19.8348C4.44933 20.1062 7.21967 20.945 9.45033 21.9071C10.2299 22.2402 11.0933 21.6357 11.0933 20.76V3.60185C11.0969 3.14298 10.8523 2.71989 10.4577 2.50402ZM3.60983 6.24156H6.30822C6.80472 6.24156 7.20768 6.65601 7.20768 7.16669C7.20768 7.67736 6.80472 8.09182 6.30822 8.09182H3.60983C3.11333 8.09182 2.71037 7.67736 2.71037 7.16669C2.71037 6.65601 3.11333 6.24156 3.60983 6.24156ZM7.20768 11.7923H3.60983C3.11333 11.7923 2.71037 11.3779 2.71037 10.8672C2.71037 10.3565 3.11333 9.94208 3.60983 9.94208H7.20768C7.70418 9.94208 8.10714 10.3565 8.10714 10.8672C8.10714 11.3779 7.70418 11.7923 7.20768 11.7923Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        Select the Unit
      </div>
      <div className={styles.unitContainer}>
        {unitData.units.map((unit, index) => (
          <UnitModal data={unit} />
        ))}
      </div>
    </section>
  );
}
