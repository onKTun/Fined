import styles from "./svg.module.css";
interface Props {
  topValue: number;
  leftValue: number;
  positionAbs: boolean;
}

export default function DashboardSVG({
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
      width="20"
      height="20"
    >
      <path
        d="M 20.648 9.56 L 17.465 6.377 L 17.465 2.7 C 17.465 2.036 16.926 1.497 16.26 1.497 C 15.596 1.497 15.058 2.036 15.058 2.7 L 15.058 3.97 L 12.688 1.6 C 11.516 0.429 9.479 0.431 8.31 1.602 L 0.352 9.56 C -0.117 10.03 -0.117 10.792 0.352 11.262 C 0.822 11.732 1.585 11.732 2.055 11.262 L 10.012 3.304 C 10.272 3.046 10.728 3.046 10.986 3.303 L 18.945 11.262 C 19.17 11.488 19.477 11.615 19.796 11.614 C 20.104 11.614 20.412 11.497 20.648 11.262 C 21.118 10.792 21.118 10.03 20.648 9.56 Z"
        fill="rgb(255, 255, 255)"
      ></path>
      <path
        d="M 10.918 5.589 C 10.687 5.357 10.313 5.357 10.082 5.589 L 3.082 12.586 C 2.971 12.697 2.909 12.848 2.909 13.005 L 2.909 18.109 C 2.909 19.306 3.88 20.277 5.078 20.277 L 8.543 20.277 L 8.543 14.91 L 12.456 14.91 L 12.456 20.277 L 15.922 20.277 C 17.119 20.277 18.09 19.306 18.09 18.109 L 18.09 13.005 C 18.09 12.847 18.028 12.697 17.917 12.586 Z"
        fill="rgb(255, 255, 255)"
      ></path>
    </svg>
  );
}
