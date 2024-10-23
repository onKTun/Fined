import styles from "./inputmodal.module.css";

interface Props {
  onClick: () => void;
  typeInput: string;
}
export default function InputModal({ onClick, typeInput }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.topWrapper_left}>
            <div className={styles.svg}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1719 0C15.4481 0 14.7244 0.275625 14.1719 0.828125L13 2L17 6L18.1719 4.82812C19.2759 3.72413 19.2759 1.93313 18.1719 0.828125C17.6194 0.275625 16.8956 0 16.1719 0ZM11.5 3.5L0 15V19H4L15.5 7.5L11.5 3.5Z"
                  fill="white"
                />
              </svg>
            </div>
            Change {typeInput}
          </div>
          <div className={styles.topWrapper_right}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.98"
                height="19.98"
              >
                <path
                  d="M 9.99 0 C 15.508 0 19.98 4.473 19.98 9.99 C 19.98 15.508 15.508 19.98 9.99 19.98 C 4.473 19.98 0 15.508 0 9.99 C 0 4.473 4.473 0 9.99 0 Z M 9.99 8.12 L 7.862 5.987 C 7.576 5.696 7.398 5.467 7.049 5.824 L 5.911 6.984 C 5.541 7.351 5.561 7.566 5.911 7.909 L 8.057 10.054 L 5.987 12.119 C 5.696 12.405 5.467 12.582 5.824 12.932 L 6.984 14.07 C 7.351 14.439 7.566 14.42 7.907 14.07 L 9.99 11.987 L 12.076 14.078 C 12.418 14.431 12.633 14.45 13 14.078 L 14.159 12.94 C 14.514 12.587 14.285 12.41 13.997 12.127 L 11.924 10.054 L 14.078 7.906 C 14.431 7.563 14.45 7.348 14.078 6.98 L 12.94 5.821 C 12.587 5.467 12.41 5.696 12.127 5.984 Z"
                  fill="rgb(51, 133, 255)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.inputContainer}>
          Enter new {typeInput}
          <input
            type="email"
            placeholder="Enter your username here"
            className={styles.submitWraper}
          ></input>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.submitButton} ${styles.inputButton}`}
            onClick={() => {}}
          >
            Save Changes
          </button>
          <button
            type="button"
            className={`${styles.inputButton} ${styles.cancelButton}`}
            onClick={onClick}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
