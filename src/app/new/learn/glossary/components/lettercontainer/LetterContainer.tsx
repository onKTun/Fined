import WordContainer from "../wordcontainer/WordContainer";
import styles from "./lettercontainer.module.css";

interface Term {
  term: string;
  definition: string;
}
interface LetterContainerProps {
  letter: string;
  terms: Term[];
}

export default function LetterContainer({
  letter,
  terms,
}: LetterContainerProps) {
  return (
    <section className={styles.container}>
      <div className={styles.letterContainer}>{letter}</div>
      <hr className={styles.line} />
      <div className={styles.wordCardContainer}>
        {terms.map((term, index) => (
          <WordContainer
            key={index}
            term={term.term}
            definition={term.definition}
          />
        ))}
      </div>
    </section>
  );
}
