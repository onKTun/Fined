import styles from "./svg.module.css";
interface Props {
  topValue: number;
  leftValue: number;
  positionAbs: boolean;
}

export default function ProfileSVG({
  topValue,
  leftValue,
  positionAbs,
}: Props) {
  return (
    <svg
      style={{
        left: `${leftValue}`,
        top: `${topValue}`,
        position: `${positionAbs ? "absolute" : "relative"}`,
      }}
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
    >
      <path
        d="M 15.125 6.474 C 15.125 9.403 13.356 11.917 11 11.917 C 8.642 11.917 6.875 9.403 6.875 6.474 C 6.875 3.546 8.397 1.833 11 1.833 C 13.603 1.833 15.125 3.545 15.125 6.474 Z M 3.76 18.464 C 4.113 18.883 5.633 20.167 11 20.167 C 16.367 20.167 17.886 18.883 18.24 18.464 C 18.306 18.383 18.336 18.278 18.322 18.174 C 18.242 17.365 17.514 13.75 11 13.75 C 4.486 13.75 3.758 17.365 3.677 18.174 C 3.663 18.278 3.694 18.383 3.76 18.464 Z"
        fill="rgb(255, 255, 255)"
      ></path>
    </svg>
  );
}