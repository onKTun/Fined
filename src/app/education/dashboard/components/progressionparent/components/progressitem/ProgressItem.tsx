import styles from "./progressitem.module.css";
import Image from "next/image";

interface Props {
  progress: number;
  unit: number;
}

export default function ProgressItem({ progress, unit }: Props) {
  /*
    #getStyleClass() getStyleClass determines the correct class to assign to style the component different when it is completed, inprogress, or not started
    #getURLPath() is needed to get the correct url to the svg depending on which one it needs to use
    */
  const getStyleClass = () => {
    if (progress === 0) return styles.notstarted;
    if (progress < 100) return styles.inprogress;
    return styles.completed;
  };

  const getURLPath = () => {
    const relPath = "/assets/status/";
    if (progress === 0) return `${relPath}notstarted.svg`;
    if (progress < 100) return `${relPath}inprogress.svg`;
    return `${relPath}complete.svg`;
  };

  const styleClass = getStyleClass();
  const imagePath = getURLPath(); // Call getURLPath to get the image URL

  return (
    <div className={`${styles.container} ${styleClass}`}>
      <div className={styles.top}>
        <Image src={imagePath} alt="Progress Status" width={18} height={18} />
        Unit {unit}
      </div>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
