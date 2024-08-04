import styles from "./letterbox.module.css";
interface Props {
  letter: string;
}

export default function Letterbox({ letter }: Props) {
  return (
    <div className={styles.letterboxWrapper}>
      <div className={styles.letterContainer}>
        <div className={styles.letter}>{letter}</div>
      </div>
      <div className={styles.wordWrapper}>
        <p>ssjsj</p>
        <p>ssjsj</p>
      </div>
    </div>
  );
}
