import styles from "./frq.module.css";
import otherStyles from "../../videoactivity.module.css";
import { useEffect, useRef, useState } from "react";
import { updateVideoActivity } from "src/app/education/units/[unitSlug]/[lessonPreviewSlug]/[videoLessonSlug]/actions";
interface Props {
  data: any /* eslint-disable-line @typescript-eslint/no-explicit-any */;
  onClick: () => void;
}

export default function FRQObject({ data, onClick }: Props) {
  const [text, setText] = useState(""); // State to hold the current input value
  const textValue = useRef<HTMLTextAreaElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false); // State for handling animation
  const [displayOther, setDisplayOther] = useState(false);
  const textLimit = 200;

  const handleTextChange = (e) => {
    setText(e.target.value); // Update the state with the current textarea value
  };

  const onSubmitFRQ = async () => {
    setIsAnimating(true); // Trigger animation
    await updateVideoActivity(data.id, "completed", text);
  };

  const closeFRQ = () => {
    setDisplayOther(false); // reset frq object to first slide
    setText("");
    if (textValue.current) {
      textValue.current.value = "";
    }

    onClick();
    setIsAnimating(false);
  };

  useEffect(() => {
    if (isAnimating) {
      setDisplayOther(true);
    }
  }, [isAnimating, onClick]);
  return (
    <div className={otherStyles.container}>
      <div
        className={`${otherStyles.wrapper} ${
          displayOther ? styles.offScreen : styles.onScreen
        }`}
      >
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
          <textarea
            className={styles.input}
            placeholder="Enter your response here."
            maxLength={textLimit}
            rows={2}
            ref={textValue}
            onChange={handleTextChange}
          />
          <h6 className={styles.inputSub}>
            Remaining Characters: {text.length}/{textLimit}
          </h6>
        </div>
        <button
          className={`${styles.continueButton} ${
            displayOther ? styles.submitted : ""
          }`}
          onClick={onSubmitFRQ}
        >
          Submit
        </button>
      </div>
      <div
        className={`${otherStyles.wrapper} ${
          displayOther ? styles.onScreenOther : styles.offScreenOther
        }`}
        style={{ position: "absolute" }}
      >
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
            Other People's Responses
          </h6>
          <h5 className={otherStyles.subtitle}>
            Now compare what you wrote to other people who also answered this
            question.
          </h5>
        </div>
        <div className={otherStyles.inputWrapper}>
          {data.type.otherResponses?.map((data, index) => (
            <div key={index} className={styles.otherInput}>
              {data}
            </div>
          ))}
        </div>
        <button
          className={`${styles.continueButton} ${
            displayOther ? styles.submitted : ""
          }`}
          onClick={closeFRQ}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
