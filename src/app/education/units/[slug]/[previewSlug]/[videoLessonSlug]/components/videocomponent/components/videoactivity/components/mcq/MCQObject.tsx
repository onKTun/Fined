import styles from "./mcq.module.css";
import otherStyles from "../../videoactivity.module.css";
import { useEffect, useState } from "react";
import { updateVideoActivity } from "src/app/education/units/[slug]/[previewSlug]/[videoLessonSlug]/actions";

interface Props {
  data: any /* eslint-disable-line @typescript-eslint/no-explicit-any */;
  onClick: () => void;
}

export default function MCQObject({ data, onClick }: Props) {
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [flashRed, setFlash] = useState(false);
  const [cooldown, setCooldown] = useState(false); // State for handling cooldown
  const [startTime, setStartTime] = useState<number | null>(null); // Timer start time
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Elapsed time

  const FLASH_DURATION = 300; // Flash duration in ms
  const COOLDOWN_DURATION = 3000; // Cooldown duration in ms
  const TIMER_UPDATE_INTERVAL = 100; // Timer update interval in ms
  const CORRECT_ANSWER_INDEX = data.type.answer;

  const handleSubmit = async (index) => {
    if (cooldown) return; // Prevent action if in cooldown

    const isAnswerCorrect = data.type.answer === index;

    if (isAnswerCorrect) {
      await updateVideoActivity(data.id, "completed", undefined, index);
    }

    setIsCorrect(isAnswerCorrect);
    setFlash(true);
    setSelectedOption(-1);
    setCooldown(true); // Start cooldown
    setStartTime(Date.now()); // Start the timer

    // Set flash and cooldown duration
    const timerFlash = setTimeout(() => {
      setFlash(false);
    }, FLASH_DURATION);

    const timerCooldown = setTimeout(() => {
      setCooldown(false); // End cooldown
    }, COOLDOWN_DURATION);

    // Cleanup function to clear timeouts
    return () => {
      clearTimeout(timerFlash);
      clearTimeout(timerCooldown);
    };
  };

  const handleButtonClick = (index) => {
    if (cooldown) return; // Prevent selection if in cooldown

    index === selectedOption ? setSelectedOption(-1) : setSelectedOption(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, TIMER_UPDATE_INTERVAL);
    }

    // Cleanup function for effect cleanup
    return () => {
      if (interval) clearInterval(interval); // Clear interval on unmount
    };
  }, [startTime, isCorrect]);
  return (
    <div
      className={`${otherStyles.container}`}
      style={
        flashRed
          ? !isCorrect
            ? {
                backgroundColor: "rgba(100, 10, 10, 0.713)",
                boxShadow: "inset 0px 0px 50px rgba(120, 10, 10, 1) ",
              }
            : isCorrect
            ? {
                backgroundColor: "rgba(2, 64, 2, 0.700)",
                boxShadow: "inset 0px 0px 50px gba(22, 64, 2, 1) ",
              }
            : {}
          : {}
      }
    >
      <div className={otherStyles.wrapper}>
        <div className={otherStyles.titleWrapper}>
          <h6 className={otherStyles.title}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
              />
            </svg>
            {data.type.title}
          </h6>
          <h5 className={otherStyles.subtitle}>
            {data.type.subtitle + "  Enter your response below"}
          </h5>
        </div>
        <div className={otherStyles.inputWrapper}>
          {data.type.options?.map((data, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.mcqButton} ${styles[`class${index}`]} ${
                selectedOption === index ? styles.selectedButton : ""
              } ${flashRed && !isCorrect ? styles.shake : ""} ${
                isCorrect && CORRECT_ANSWER_INDEX === index
                  ? styles.correctButton
                  : isCorrect && CORRECT_ANSWER_INDEX !== index
                  ? styles.incorrectButton
                  : {}
              }`}
              onClick={() => {
                handleButtonClick(index);
              }}
              disabled={cooldown || isCorrect} // Disable button if in cooldown
            >
              {data}
            </button>
          ))}
        </div>
        {/*Selected Button */}
        <button
          className={`${otherStyles.continueButton} ${
            (selectedOption === -1 || cooldown) && !isCorrect
              ? styles.offContinueButton
              : ""
          } ${isCorrect ? styles.correctAfter : {}}`}
          onClick={() => {
            selectedOption != -1 && !cooldown && !isCorrect
              ? handleSubmit(selectedOption)
              : isCorrect
              ? onClick()
              : "";
          }}
        >
          {!isCorrect ? "Submit" : "Continue"}
        </button>
      </div>
      <div
        className={`${styles.incorrect} ${
          !isCorrect && cooldown ? styles.onScreen : ""
        }`}
      >
        <div className={styles.textTop}>
          <div className={styles.svgContainer}>
            <svg
              fill="white"
              height="14px"
              width="14px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 208.891 208.891"
            >
              <path
                d="M0,170l65.555-65.555L0,38.891L38.891,0l65.555,65.555L170,0l38.891,38.891l-65.555,65.555L208.891,170L170,208.891
                l-65.555-65.555l-65.555,65.555L0,170z"
              />
            </svg>
          </div>
          Incorrect
        </div>
        <div className={styles.progressBar}>
          <div
            style={{
              transition: "all 0.3s var(--transition)",
              width: `${(elapsedTime / COOLDOWN_DURATION) * 100}%`,
              height: "100%",
              backgroundColor: "var(--finedblue)",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
      <div
        className={`${styles.incorrect} ${
          isCorrect && cooldown ? styles.onScreen : ""
        }`}
        style={{ border: "2px solid var(--finedgreen)" }}
      >
        <div className={styles.textTop} style={{ color: "var(--finedgreen)" }}>
          <div
            className={styles.svgContainer}
            style={{ backgroundColor: "var(--finedgreen)" }}
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="10px"
              height="10px"
              viewBox="0 0 122.877 101.052"
              enableBackground="new 0 0 122.877 101.052"
            >
              <g>
                <path
                  fill="white"
                  d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"
                />
              </g>
            </svg>
          </div>
          Correct
        </div>
        <div className={styles.progressBar}>
          <div
            style={{
              transition: "all 0.3s var(--transition)",
              width: `${(elapsedTime / COOLDOWN_DURATION) * 100}%`,
              height: "100%",
              backgroundColor: "var(--finedblue)",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
