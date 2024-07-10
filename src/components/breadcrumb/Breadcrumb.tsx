import styles from "./Breadcrumb.module.css";

function Breadcrumb() {
  return (
    <section className={styles.Breadcrumb}>
      <a href="">
        <svg
          width="20"
          height="auto"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="10.5"
            height="8.5"
            rx="2.25"
            stroke="#606060"
            stroke-width="1.5"
          />
          <path d="M8 5L4.25 6.73205V3.26795L8 5Z" fill="#606060" />
        </svg>
        <h1>Lessons</h1>
      </a>
      <svg
        width="12"
        height="12"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2892_89)">
          <path
            d="M6.83466 3.74277L2.74375 0.106506C2.58401 -0.0355061 2.32497 -0.0355061 2.16521 0.10653C2.00547 0.248542 2.00547 0.478773 2.16524 0.620785L5.96686 3.99994L2.16521 7.37926C2.00547 7.52127 2.00547 7.7515 2.16524 7.89351C2.24509 7.96452 2.34979 8.00001 2.45449 8.00001C2.55919 8.00001 2.66389 7.96452 2.74377 7.89349L6.83466 4.25703C6.9114 4.18883 6.95449 4.09635 6.95449 3.99991C6.95449 3.90348 6.9114 3.81097 6.83466 3.74277Z"
            fill="#BCBCBC"
          />
        </g>
        <defs>
          <clipPath id="clip0_2892_89">
            <rect width="9" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <a href="">
        <h1>Unit One</h1>
      </a>
      <svg
        width="12"
        height="12"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2892_89)">
          <path
            d="M6.83466 3.74277L2.74375 0.106506C2.58401 -0.0355061 2.32497 -0.0355061 2.16521 0.10653C2.00547 0.248542 2.00547 0.478773 2.16524 0.620785L5.96686 3.99994L2.16521 7.37926C2.00547 7.52127 2.00547 7.7515 2.16524 7.89351C2.24509 7.96452 2.34979 8.00001 2.45449 8.00001C2.55919 8.00001 2.66389 7.96452 2.74377 7.89349L6.83466 4.25703C6.9114 4.18883 6.95449 4.09635 6.95449 3.99991C6.95449 3.90348 6.9114 3.81097 6.83466 3.74277Z"
            fill="#BCBCBC"
          />
        </g>
        <defs>
          <clipPath id="clip0_2892_89">
            <rect width="9" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <a href="">
        <h1>Value of Money</h1>
      </a>
    </section>
  );
}
export default Breadcrumb;
