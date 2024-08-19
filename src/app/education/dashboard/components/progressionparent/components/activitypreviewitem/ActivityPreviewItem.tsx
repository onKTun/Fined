import RoutingButton from "src/components/routingbutton/RoutingButton";
import styles from "./activitypreviewitem.module.css";
interface Props {
  unit: number;
  title: string;
  dateCompleted: string;
  svgPath: string;
  attempts: number;
  score: number;
  linkTo: string;
}

export default function ActivityPreviewItem({
  unit,
  title,
  dateCompleted,
  svgPath,
  attempts,
  score,
  linkTo,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailWrapper}>
        <div className={styles.left}>
          <img src={svgPath} width={25} height={26} />
        </div>
        <ul className={styles.right}>
          <div className={styles.unit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M 17.417 3.84 L 17.417 13.253 C 17.417 14.02 16.791 14.725 16.023 14.82 L 15.778 14.852 C 14.48 15.026 12.651 15.564 11.178 16.182 C 10.664 16.395 10.094 16.008 10.094 15.445 L 10.094 4.433 C 10.094 4.14 10.26 3.871 10.521 3.729 C 11.97 2.945 14.163 2.248 15.651 2.122 L 15.699 2.122 C 16.649 2.122 17.417 2.89 17.417 3.84 Z M 8.477 3.729 C 7.028 2.945 4.835 2.248 3.347 2.122 L 3.292 2.122 C 2.342 2.122 1.574 2.89 1.574 3.84 L 1.574 13.253 C 1.574 14.02 2.199 14.725 2.967 14.82 L 3.213 14.852 C 4.511 15.026 6.34 15.564 7.812 16.182 C 8.327 16.395 8.897 16.008 8.897 15.445 L 8.897 4.433 C 8.899 4.139 8.737 3.867 8.477 3.729 Z M 3.957 6.127 L 5.738 6.127 C 6.066 6.127 6.332 6.393 6.332 6.721 C 6.332 7.049 6.066 7.315 5.738 7.315 L 3.957 7.315 C 3.629 7.315 3.363 7.049 3.363 6.721 C 3.363 6.393 3.629 6.127 3.957 6.127 Z M 6.332 9.69 L 3.957 9.69 C 3.629 9.69 3.363 9.424 3.363 9.096 C 3.363 8.768 3.629 8.503 3.957 8.503 L 6.332 8.503 C 6.66 8.503 6.926 8.768 6.926 9.096 C 6.926 9.424 6.66 9.69 6.332 9.69 Z"
                fill="rgb(51, 133, 255)"
              ></path>
            </svg>
            Unit {unit}
          </div>
          <h1 className={styles.title}>{title}</h1>
          {dateCompleted}
        </ul>
      </div>
      <div className={styles.attemptsWrapper}>
        <h6>Attempts:</h6>
        {attempts}
      </div>
      <div className={styles.scoreWrapper}>
        <h6>Score:</h6>
        <div className={styles.score}>
          <img src="/assets/status/complete.svg" height={18} width={18} />
          {score}%
        </div>
      </div>
      <RoutingButton
        style={"blue"}
        text={"View Analytics"}
        ftSize={1}
        additonalStyles={{ width: "fit-content", height: "fit-content" }}
        url={""}
      />
    </div>
  );
}
