import LetterContainer from "./components/lettercontainer/LetterContainer";
import styles from "./glossary.module.css";
import termsData from "src/data/terms.json";

export default function Glossary() {
  return (
    <section className={styles.container}>
      {Object.keys(termsData).map((letter) => (
        <LetterContainer
          key={letter}
          letter={letter}
          terms={termsData[letter]}
        />
      ))}
    </section>
  );
}
