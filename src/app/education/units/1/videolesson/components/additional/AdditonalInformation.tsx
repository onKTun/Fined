import styles from "./additionalinformation.module.css";

export default function AdditionalInformation() {
  //const [selectedSection, setSelectedSeciton] = useState(-1); commented out for es-lint

  return (
    <section className={styles.wrapper}>
      <div className={styles.topHeader}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLeft}>
            <div className={styles.svgWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M 12.502 0.833 L 7.497 0.833 L 7.497 4.83 L 12.502 4.83 Z M 13.877 0.833 L 13.877 4.83 L 19.047 4.83 C 18.58 2.309 16.719 0.843 13.877 0.833 Z M 0.833 6.205 L 0.833 13.841 C 0.833 17.177 2.823 19.167 6.159 19.167 L 13.841 19.167 C 17.178 19.167 19.167 17.177 19.167 13.841 L 19.167 6.205 Z M 12.237 13.832 L 10.33 14.932 C 9.927 15.161 9.532 15.28 9.166 15.28 C 8.891 15.28 8.643 15.216 8.414 15.087 C 7.882 14.785 7.589 14.162 7.589 13.355 L 7.589 11.155 C 7.589 10.348 7.882 9.725 8.414 9.422 C 8.946 9.111 9.624 9.166 10.33 9.578 L 12.237 10.678 C 12.942 11.082 13.327 11.65 13.327 12.264 C 13.327 12.878 12.933 13.419 12.237 13.832 Z M 6.122 0.833 C 3.28 0.843 1.419 2.309 0.952 4.83 L 6.122 4.83 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </svg>
            </div>
            <div className="header_text">
              Overview
              <div className={styles.header_subtext}>
                Finish watching the video
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.vocabContainer}>
          <div className={styles.vocabContainer_top}>
            <div className={styles.vocabContainer_topSVGWrapper}>
              <img src="/assets/header/terms.svg" />
            </div>
            Terms in Video
          </div>
          <ul className={styles.termList}>
            <h6 className={styles.term}>Finance</h6>
            <h6 className={styles.term}>Taxes</h6>
            <h6 className={styles.term}>Props</h6>
            <h6 className={styles.term}>Money</h6>
            <h6 className={styles.term}>Bills</h6>
          </ul>
        </div>
        <div className={styles.vocabContainer}>
          <div className={styles.vocabContainer_top}>
            <div className={styles.vocabContainer_topSVGWrapper}>
              <img src="/assets/header/terms.svg" />
            </div>
            Summary
          </div>
          <div className={styles.summaryWrapper}>
            <p className={styles.p}>
              In this lesson, you'll discover the importance of money and its
              many uses. We'll explore how money represents effort, unlocks
              opportunities, and helps you achieve goals. You'll also learn
              smart ways to manage, store, and save it for the future—preparing
              you for real-world financial adventures!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
