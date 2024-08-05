import styles from "./letterbox.module.css";
interface Props {
  letter: string;
  terms: string[];
}

export default function Letterbox({ letter, terms }: Props) {
  return (
    <div className={styles.letterboxWrapper}>
      <div className={styles.letterContainer}>
        <div className={styles.letter}>{letter}</div>
      </div>
      <div className={styles.wordWrapper}>
        <ul className={styles.list}>
          {terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
