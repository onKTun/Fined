import ProgressBar from "src/components/ui/progress/ProgressBar";
import styles from "./activity.module.css";
import RoutingButton from "src/components/ui/routingbutton/RoutingButton";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  svgPath: string;
  progress?: number;
  estTime: number;
  href: string;
}

export default function Activity({
  title,
  desc,
  svgPath,
  progress,
  estTime,
  href,
}: Props) {
  const statusStyle = (() => {
    if (!progress) {
      return styles.notstarted;
    }
    if (progress === 100) {
      return styles.completed;
    } else if (progress < 100 && progress !== 0) {
      return styles.inprogress;
    } else {
      return styles.notstarted;
    }
  })();

  const titleText = (() => {
    if (!progress) {
      return "Start";
    }
    if (progress === 100) {
      return "Restart";
    } else if (progress < 100 && progress !== 0) {
      return "Continue";
    } else {
      return "Start";
    }
  })();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.topDetails}>
          <div className={styles.estTime}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19">
              <path
                d="M 2.653 4.925 C 0.555 8.065 0.863 12.23 3.399 15.028 C 5.935 17.825 10.049 18.539 13.379 16.759 C 16.71 14.979 18.402 11.162 17.485 7.499 C 16.568 3.836 13.276 1.266 9.5 1.266 L 9.5 4.01 M 9.5 9.5 L 5.84 5.84"
                fill="transparent"
                strokeWidth="1.46"
                stroke="rgb(179, 179, 179)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {estTime} Minutes
          </div>
          {progress && <div className={`${styles.topIndicator} ${statusStyle}`}></div>}
        </div>
        <div className={styles.textualDetails}>
          <div className={styles.titleContainer}>
            <Image src={svgPath} height={24} width={24} alt={"Icon"} />
            {title}
          </div>
          {desc}
        </div>
        {progress ? <ProgressBar progress={progress} /> : <ProgressBar progress={0} />}

      </div>
      <div className={styles.buttonContainer}>
        <RoutingButton
          style="blue"
          additonalStyles={{ height: "45px", width: "9em" }}
          ftSize={1}
          text={titleText}
          url={href}
        />
        {/*<RoutingButton
          style="gray"
          additonalStyles={{ height: "45px", width: "9em" }}
          ftSize={1}
          text="Tutorial"
          url={href}
        />*/}
      </div>
    </div>
  );
}
