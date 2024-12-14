import styles from "./progressbar.module.css";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const progressWid = {
    width: progress + "%",
  };

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar} style={progressWid}></div>
    </div>
  );
}
