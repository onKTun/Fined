import styles from "./BlueButton.module.css";
function BlueButton() {
  return (
    <button type="button" className={styles.goToLesson}>
      Go To Lesson
      <svg
        width="12"
        height="auto"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2836_2944)">
          <path
            d="M6.83466 3.74277L2.74375 0.106506C2.58401 -0.0355061 2.32497 -0.0355061 2.16521 0.10653C2.00547 0.248542 2.00547 0.478773 2.16524 0.620785L5.96686 3.99994L2.16521 7.37926C2.00547 7.52127 2.00547 7.7515 2.16524 7.89351C2.24509 7.96452 2.34979 8.00001 2.45449 8.00001C2.55919 8.00001 2.66389 7.96452 2.74377 7.89349L6.83466 4.25703C6.9114 4.18883 6.95449 4.09635 6.95449 3.99991C6.95449 3.90348 6.9114 3.81097 6.83466 3.74277Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2836_2944">
            <rect width="9" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
export default BlueButton;
