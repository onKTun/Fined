"use client";
import styles from "src/components/units/units.module.css";
import buttonStyle from "src/app/education/units/components/ActivitySelectorButton/activityselbutton.module.css";
import ActivitySelectorButton from "src/app/education/units/components/ActivitySelectorButton/ActivitySelectorButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import UnitVideoContainer from "src/components/units/unit-video-container/UnitVideoContainer";
import Activity from "src/app/education/units/components/activity/Activity";

interface ClientsideUnitProps {
  lessonPageData: LessonPage[];
}

export default function ClientsideUnit({
  lessonPageData,
}: ClientsideUnitProps) {
  const [currentLesson, setCurrentLesson] = useState<LessonPage>(
    lessonPageData[0]
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loading state when lesson changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    console.log(currentLesson);

    return () => clearTimeout(timer);
  }, [currentLesson]);

  const getLessonById = (id: number) => {
    const lesson = lessonPageData.find((lesson) => lesson.lessonId === id);
    return lesson || lessonPageData[0];
  };

  return (
    <div className={styles.bodyDash}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTop}>
          <div className={styles.pageIndicator}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
              <path
                d="M 20.167 4.446 L 20.167 15.345 C 20.167 16.234 19.442 17.05 18.553 17.16 L 18.269 17.197 C 16.766 17.398 14.648 18.022 12.943 18.737 C 12.347 18.984 11.687 18.535 11.687 17.884 L 11.687 5.133 C 11.687 4.794 11.88 4.482 12.182 4.317 C 13.86 3.41 16.399 2.603 18.122 2.457 L 18.177 2.457 C 19.277 2.457 20.167 3.346 20.167 4.446 Z M 9.816 4.317 C 8.138 3.41 5.599 2.603 3.876 2.457 L 3.811 2.457 C 2.711 2.457 1.822 3.346 1.822 4.446 L 1.822 15.345 C 1.822 16.234 2.546 17.05 3.436 17.16 L 3.72 17.197 C 5.223 17.398 7.341 18.022 9.046 18.737 C 9.642 18.984 10.302 18.535 10.302 17.884 L 10.302 5.133 C 10.304 4.792 10.117 4.478 9.816 4.317 Z M 4.582 7.095 L 6.644 7.095 C 7.024 7.095 7.332 7.403 7.332 7.782 C 7.332 8.162 7.024 8.47 6.644 8.47 L 4.582 8.47 C 4.202 8.47 3.894 8.162 3.894 7.782 C 3.894 7.403 4.202 7.095 4.582 7.095 Z M 7.332 11.22 L 4.582 11.22 C 4.202 11.22 3.894 10.912 3.894 10.532 C 3.894 10.153 4.202 9.845 4.582 9.845 L 7.332 9.845 C 7.711 9.845 8.019 10.153 8.019 10.532 C 8.019 10.912 7.711 11.22 7.332 11.22 Z"
                fill="rgb(255, 255, 255)"
              ></path>
            </svg>
            Unit 1
          </div>
          <p className={styles.bannerTitle}>FIN'ED© Introduction to Finance</p>
          <p className={styles.bannerText}>
            Welcome to Unit One! As you begin your FIN'ED journey, click on the
            information symbols to learn more or get help
          </p>
        </div>
      </div>
      <div className={styles.lessonSelectorContainer}>
        <div className={styles.buttonRow}>
          <ActivitySelectorButton
            isSelected={currentLesson.lessonId === 1}
            onClick={() => setCurrentLesson(getLessonById(1))}
            lessonNum={1}
          />
          <ActivitySelectorButton
            isSelected={currentLesson.lessonId === 2}
            onClick={() => setCurrentLesson(getLessonById(2))}
            lessonNum={2}
          />
          <ActivitySelectorButton
            isSelected={currentLesson.lessonId === 3}
            onClick={() => setCurrentLesson(getLessonById(3))}
            lessonNum={3}
          />
          <ActivitySelectorButton
            isSelected={currentLesson.lessonId === 4}
            onClick={() => setCurrentLesson(getLessonById(4))}
            lessonNum={4}
          />
          <Link
            href={
              "https://drive.google.com/file/d/1Cgt8PkAoqkeufESsD56jX5Mpa4ss6kJL/view?usp=drive_link"
            }
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle.wrapper}
          >
            Activities
          </Link>
          <Link
            className={styles.changeUnitButton}
            href="/education/unitselector"
          >
            <div className={styles.svgBoxCHB}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14">
                <path
                  d="M 3.589 12.833 L 1.133 10.333 M 1.133 10.333 L 3.589 7.833 M 1.133 10.333 L 7.681 10.333 C 9.038 10.333 10.137 9.214 10.137 7.833 L 10.137 7 M 6.863 7 L 6.863 6.167 C 6.863 4.786 7.962 3.667 9.319 3.667 L 15.867 3.667 M 15.867 3.667 L 13.411 6.167 M 15.867 3.667 L 13.411 1.167"
                  fill="transparent"
                  stroke-width="1.7"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            Change Unit
          </Link>
        </div>
      </div>
      {!isLoading && (
        <div className={styles.bottomContainer}>
          <UnitVideoContainer
            progress={currentLesson?.videoMaxTimestamp}
            lessonId={currentLesson?.lessonId || 0}
            imgURL={currentLesson?.videoThumbnailURL + ""}
            videoLength={currentLesson?.videoLength ?? 0}
            shortDesc={currentLesson?.videoShortDescription + ""}
            subtitle={currentLesson?.videoName + ""}
            unitId={1}
          />

          {currentLesson.activities && currentLesson.activities.length > 0 && <div className={styles.activity_Container}>
            <div className={styles.header_Container}>
              <div className={styles.headerWrapper}>
                <div className={styles.headerLeft}>
                  <div className={styles.svgWrapper}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M 12.502 0.833 L 7.497 0.833 L 7.497 4.83 L 12.502 4.83 Z M 13.877 0.833 L 13.877 4.83 L 19.047 4.83 C 18.58 2.309 16.719 0.843 13.877 0.833 Z M 0.833 6.205 L 0.833 13.841 C 0.833 17.177 2.823 19.167 6.159 19.167 L 13.841 19.167 C 17.178 19.167 19.167 17.177 19.167 13.841 L 19.167 6.205 Z M 12.237 13.832 L 10.33 14.932 C 9.927 15.161 9.532 15.28 9.166 15.28 C 8.891 15.28 8.643 15.216 8.414 15.087 C 7.882 14.785 7.589 14.162 7.589 13.355 L 7.589 11.155 C 7.589 10.348 7.882 9.725 8.414 9.422 C 8.946 9.111 9.624 9.166 10.33 9.578 L 12.237 10.678 C 12.942 11.082 13.327 11.65 13.327 12.264 C 13.327 12.878 12.933 13.419 12.237 13.832 Z M 6.122 0.833 C 3.28 0.843 1.419 2.309 0.952 4.83 L 6.122 4.83 Z"
                        fill="rgb(255, 255, 255)"
                      ></path>
                    </svg>
                  </div>
                  Activities
                </div>

                {/*<button className={styles.infoButton} type="button">
                  {0}/{10}
                </button>*/}
              </div>
            </div>
            {currentLesson.activities.map((activity, index) => (
              <Activity
                title={activity.activityName}
                desc={activity.description}
                svgPath={"/assets/activity/card.svg"}
                estTime={5}
                key={index}
                href={activity.href}
              />
            ))}

          </div>}


        </div>
      )}
      {isLoading && (
        <section className={styles.loadingScreen}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width={"5em"}
          >
            <circle
              fill="#D5D5D5"
              stroke="#D5D5D5"
              stroke-width="15"
              r="15"
              cx="40"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              />
            </circle>
            <circle
              fill="#D5D5D5"
              stroke="#D5D5D5"
              stroke-width="15"
              r="15"
              cx="100"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              />
            </circle>
            <circle
              fill="#D5D5D5"
              stroke="#D5D5D5"
              stroke-width="15"
              r="15"
              cx="160"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              />
            </circle>
          </svg>
        </section>
      )}
    </div>
  );
}
