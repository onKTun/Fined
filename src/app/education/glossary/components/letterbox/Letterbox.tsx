import React, { useState } from "react";
import styles from "./letterbox.module.css";
//import Button from "src/components/button/Button";
import Modal from "../modal/Modal";

interface Term {
  term: string;
  definition: string;
}

interface Props {
  letter: string;
  terms: Term[];
}

export default function Letterbox({ letter, terms }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  const openModal = (term: Term) => {
    setSelectedTerm(term);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTerm(null);
  };

  return (
    <>
      <div className={styles.letterboxWrapper}>
        <div className={styles.letterContainer}>
          <div className={styles.letter}>{letter}</div>
        </div>
        <div className={styles.wordWrapper}>
          <ul className={styles.list}>
            {terms.map((term, index) => (
              <li
                key={index}
                onClick={() => openModal(term)}
                className={styles.termItem}
              >
                {term.term}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={isModalOpen ? styles.open : styles.closed}>
        <Modal isOpen={isModalOpen} term={selectedTerm} onClose={closeModal} />
      </div>
    </>
  );
}
