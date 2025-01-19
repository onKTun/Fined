"use client";
import { useState, useEffect } from "react";
import AudioSVG from "src/app/new/svg/glossary/AudioSVG";
import styles from "./wordcontainer.module.css";
import ExternalLinkSVG from "src/app/new/svg/glossary/ExternalLinkSVG";
import CubeSVG from "src/app/new/svg/glossary/CubeSVG";

interface Props {
  term: string;
  definition: string;
}

export default function WordContainer({ term, definition }: Props) {
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<
    number | null
  >(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false); // Track if speech is ongoing

  // Load voices when available
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Find and set "Gordon" voice, or fallback to the first available voice
      const gordonVoice = availableVoices.find(
        (voice) => voice.name.toLowerCase() === "samantha"
      );
      setSelectedVoice(gordonVoice || availableVoices[0]);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Stop speech when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakText = (text: string) => {
    if (isSpeaking) {
      // Stop ongoing speech if the button is clicked again
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setHighlightedWordIndex(null);
      return;
    }

    // Reset highlighted word before speaking
    setHighlightedWordIndex(null);

    const utterance = new SpeechSynthesisUtterance(text);

    // Use the selected voice
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Split the text into words
    const words = text.split(" ");

    // Highlight words as they are spoken
    utterance.onboundary = (event) => {
      const currentWordIndex = event.charIndex;
      let wordIndex = -1;

      // Find the word being spoken
      let currentPosition = 0;
      for (let i = 0; i < words.length; i++) {
        currentPosition += words[i].length + 1; // +1 for space between words
        if (currentPosition > currentWordIndex) {
          wordIndex = i;
          break;
        }
      }

      if (wordIndex !== -1) {
        setHighlightedWordIndex(wordIndex); // Update the highlighted word index
      }
    };

    // Reset the highlighted word after speaking finishes
    utterance.onend = () => {
      setIsSpeaking(false);
      setHighlightedWordIndex(null); // No word should be highlighted after speech ends
    };

    setIsSpeaking(true); // Speech is ongoing
    window.speechSynthesis.speak(utterance);
  };

  // Function to highlight words in the definition
  const getHighlightedDefinition = () => {
    const words = definition.split(" ");
    return words.map((word, index) => {
      const isHighlighted = index === highlightedWordIndex;
      return (
        <span
          key={index}
          className={
            isHighlighted ? styles.highlighted : styles.nonHighlighted // Class for all non-highlighted words
          }
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.firstLine}>
        <div className={styles.term}>
          <button
            type="button"
            className={styles.audioButton}
            onClick={() => speakText(term)}
          >
            <AudioSVG />
          </button>
          {term}
        </div>
        <div className={styles.externalButtons}>
          <button className={styles.audioButton} type="button">
            <ExternalLinkSVG />
          </button>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.secondLine}>
        <div className={styles.term}>
          <button
            type="button"
            className={styles.audioButton}
            onClick={() => speakText(definition)}
          >
            <AudioSVG />
          </button>
          <div>Definition</div>
        </div>
        <div className={styles.definitionWrapper}>
          {getHighlightedDefinition()}
        </div>
      </div>
      <button className={styles.bottomButton} type="button">
        <CubeSVG /> View In 3D
      </button>
    </section>
  );
}
