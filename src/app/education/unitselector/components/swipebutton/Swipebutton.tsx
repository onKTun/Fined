import Link from "next/link";
import styles from "./swipebutton.module.css";

interface Props {
  isSelected: boolean;
  selectedUnit: null;
}

export default function Swipebutton({ isSelected, selectedUnit }: Props) {
  //prevents link from being used if not selected
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!isSelected) {
      event.preventDefault();
    }
  };

  return (
    <Link href={`/education/units/${selectedUnit}`} onClick={handleClick}>
      <div
        className={`${styles.button} ${
          isSelected ? styles.selected : styles.unselected
        }`}
      >
        <div className={styles.glare}></div>
        <div
          className={styles.glare}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        ></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23">
          <path
            d="M 19.167 1.917 L 7.667 1.917 C 6.608 1.917 5.75 2.775 5.75 3.833 L 5.75 15.333 C 5.75 16.392 6.608 17.25 7.667 17.25 L 19.167 17.25 C 20.225 17.25 21.083 16.392 21.083 15.333 L 21.083 3.833 C 21.083 2.775 20.225 1.917 19.167 1.917 Z M 12.523 13.878 L 9.385 10.74 L 10.74 9.385 L 12.394 11.039 L 16.514 6.095 L 17.987 7.323 Z"
            fill="rgb(255, 255, 255)"
          ></path>
          <path
            d="M 3.833 21.083 L 14.375 21.083 L 14.375 19.167 L 3.833 19.167 L 3.833 7.667 L 1.917 7.667 L 1.917 19.167 C 1.917 20.224 2.776 21.083 3.833 21.083 Z"
            fill="rgb(255, 255, 255)"
          ></path>
        </svg>
        Select Unit
      </div>
    </Link>
  );
}
