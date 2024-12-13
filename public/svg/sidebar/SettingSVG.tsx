import styles from "./svg.module.css";
interface Props {
  topValue: number;
  leftValue: number;
  positionAbs: boolean;
}

export default function SettingSVG({
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
      width="24"
      height="24"
    >
      <path
        d="M 13.984 2.542 C 14.071 2.711 14.093 2.928 14.136 3.362 C 14.218 4.182 14.259 4.592 14.431 4.818 C 14.649 5.104 15.004 5.25 15.36 5.202 C 15.64 5.165 15.96 4.904 16.598 4.382 C 16.935 4.105 17.104 3.967 17.285 3.909 C 17.516 3.835 17.765 3.848 17.987 3.944 C 18.162 4.02 18.317 4.174 18.624 4.482 L 19.518 5.376 C 19.826 5.684 19.98 5.838 20.056 6.013 C 20.152 6.235 20.165 6.484 20.091 6.715 C 20.033 6.896 19.895 7.065 19.619 7.402 C 19.096 8.041 18.835 8.36 18.797 8.641 C 18.749 8.997 18.896 9.351 19.182 9.569 C 19.407 9.741 19.818 9.782 20.639 9.864 C 21.072 9.907 21.289 9.929 21.459 10.016 C 21.673 10.127 21.84 10.312 21.929 10.537 C 22 10.714 22 10.932 22 11.368 L 22 12.632 C 22 13.068 22 13.286 21.93 13.462 C 21.841 13.687 21.673 13.873 21.458 13.984 C 21.289 14.071 21.072 14.093 20.638 14.136 C 19.818 14.218 19.408 14.259 19.182 14.431 C 18.896 14.649 18.75 15.004 18.798 15.36 C 18.836 15.64 19.097 15.96 19.619 16.598 C 19.895 16.935 20.033 17.103 20.091 17.285 C 20.165 17.516 20.152 17.765 20.056 17.987 C 19.98 18.162 19.826 18.316 19.518 18.624 L 18.624 19.517 C 18.316 19.826 18.162 19.98 17.987 20.055 C 17.765 20.151 17.516 20.164 17.285 20.09 C 17.104 20.032 16.935 19.894 16.598 19.618 C 15.959 19.096 15.64 18.835 15.36 18.798 C 15.004 18.75 14.649 18.896 14.431 19.182 C 14.259 19.407 14.218 19.817 14.136 20.638 C 14.093 21.072 14.071 21.289 13.984 21.458 C 13.873 21.673 13.688 21.841 13.463 21.93 C 13.286 22 13.068 22 12.632 22 L 11.368 22 C 10.932 22 10.714 22 10.538 21.93 C 10.313 21.841 10.127 21.673 10.016 21.458 C 9.929 21.289 9.907 21.072 9.864 20.638 C 9.782 19.818 9.741 19.408 9.569 19.182 C 9.351 18.897 8.997 18.75 8.641 18.798 C 8.36 18.835 8.041 19.096 7.402 19.618 C 7.065 19.895 6.896 20.033 6.715 20.091 C 6.484 20.165 6.235 20.152 6.013 20.056 C 5.838 19.98 5.683 19.826 5.376 19.518 L 4.482 18.624 C 4.174 18.316 4.02 18.162 3.944 17.987 C 3.848 17.765 3.835 17.516 3.909 17.285 C 3.967 17.104 4.105 16.935 4.381 16.598 C 4.904 15.959 5.165 15.64 5.202 15.359 C 5.25 15.003 5.103 14.649 4.818 14.431 C 4.593 14.259 4.182 14.218 3.361 14.136 C 2.928 14.093 2.711 14.071 2.541 13.984 C 2.327 13.873 2.16 13.688 2.071 13.463 C 2 13.286 2 13.068 2 12.632 L 2 11.368 C 2 10.932 2 10.714 2.07 10.538 C 2.159 10.313 2.327 10.127 2.542 10.016 C 2.711 9.929 2.928 9.907 3.362 9.864 C 4.182 9.782 4.593 9.741 4.818 9.569 C 5.104 9.351 5.251 8.997 5.203 8.641 C 5.165 8.36 4.903 8.041 4.381 7.401 C 4.105 7.064 3.967 6.896 3.909 6.714 C 3.835 6.483 3.848 6.234 3.944 6.012 C 4.02 5.838 4.174 5.683 4.482 5.375 L 5.376 4.482 C 5.684 4.174 5.838 4.019 6.013 3.944 C 6.235 3.848 6.484 3.835 6.715 3.909 C 6.896 3.967 7.065 4.105 7.402 4.381 C 8.041 4.903 8.36 5.164 8.64 5.202 C 8.997 5.25 9.352 5.103 9.57 4.817 C 9.74 4.592 9.782 4.182 9.864 3.361 C 9.907 2.928 9.929 2.711 10.016 2.541 C 10.127 2.326 10.312 2.159 10.537 2.07 C 10.714 2 10.932 2 11.368 2 L 12.632 2 C 13.068 2 13.286 2 13.462 2.07 C 13.687 2.159 13.873 2.327 13.984 2.542 Z M 12 16 C 14.209 16 16 14.209 16 12 C 16 9.791 14.209 8 12 8 C 9.791 8 8 9.791 8 12 C 8 14.209 9.791 16 12 16 Z"
        fill="rgb(255, 255, 255)"
      ></path>
    </svg>
  );
}