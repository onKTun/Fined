"use client";
import styles from "./lessonpreview.module.css";
import Breadcrumb from "src/components/ui/breadcrumb/Breadcrumb";
import Button from "src/components/ui/button/Button";
import RoutingButton from "src/components/ui/routingbutton/RoutingButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import lessons from "../lessons.json";

export default function LessonPreview({ params }) {
  console.log({ params });
  const router = useRouter();
  const part = parseInt(params.preview, 10);

  const selectedLesson = lessons.find((lesson) => lesson.id === part);

  return (
    <div className={styles.bodyDash}>
      <div className={styles.container}>
        <section className={styles.lesson}>
          <div className={styles.left_Container}>
            <div className={styles.absoluteTop_Container}>
              <Breadcrumb unit="Unit One" lesson={"Lesson " + part} />
              <div className={styles.absoluteTop_progress}>
                <Button
                  text="Back"
                  onClick={() => router.back()}
                  style="gray"
                  ftSize={1}
                  heightWidth={{}}
                  arrow={false}
                />
              </div>
            </div>
            <div className={styles.leftContainer_Top}>
              <div className={styles.unitIndicator}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                  <path
                    d="M 20.167 4.446 L 20.167 15.345 C 20.167 16.234 19.442 17.05 18.553 17.16 L 18.269 17.197 C 16.766 17.398 14.648 18.022 12.943 18.737 C 12.347 18.984 11.687 18.535 11.687 17.884 L 11.687 5.133 C 11.687 4.794 11.88 4.482 12.182 4.317 C 13.86 3.41 16.399 2.603 18.122 2.457 L 18.177 2.457 C 19.277 2.457 20.167 3.346 20.167 4.446 Z M 9.816 4.317 C 8.138 3.41 5.599 2.603 3.876 2.457 L 3.811 2.457 C 2.711 2.457 1.822 3.346 1.822 4.446 L 1.822 15.345 C 1.822 16.234 2.546 17.05 3.436 17.16 L 3.72 17.197 C 5.223 17.398 7.341 18.022 9.046 18.737 C 9.642 18.984 10.302 18.535 10.302 17.884 L 10.302 5.133 C 10.304 4.792 10.117 4.478 9.816 4.317 Z M 4.582 7.095 L 6.644 7.095 C 7.024 7.095 7.332 7.403 7.332 7.782 C 7.332 8.162 7.024 8.47 6.644 8.47 L 4.582 8.47 C 4.202 8.47 3.894 8.162 3.894 7.782 C 3.894 7.403 4.202 7.095 4.582 7.095 Z M 7.332 11.22 L 4.582 11.22 C 4.202 11.22 3.894 10.912 3.894 10.532 C 3.894 10.153 4.202 9.845 4.582 9.845 L 7.332 9.845 C 7.711 9.845 8.019 10.153 8.019 10.532 C 8.019 10.912 7.711 11.22 7.332 11.22 Z"
                    fill="rgb(255, 255, 255)"
                  ></path>
                </svg>
                Unit {selectedLesson?.unit}
              </div>
              <div className={styles.title}>{selectedLesson?.previewTitle}</div>
              <div className={styles.estTime}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19">
                  <g>
                    <path
                      d="M 0 0 L 19 0 L 19 19 L 0 19 Z"
                      fill="transparent"
                    ></path>
                    <path
                      d="M 2.653 4.925 C 0.555 8.065 0.863 12.23 3.399 15.028 C 5.935 17.825 10.049 18.539 13.379 16.759 C 16.71 14.979 18.402 11.162 17.485 7.499 C 16.568 3.836 13.276 1.266 9.5 1.266 L 9.5 4.01 M 9.5 9.5 L 5.84 5.84"
                      fill="transparent"
                      stroke-width="1.9"
                      stroke="rgb(36, 36, 36)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                Lesson is around {selectedLesson?.videoLength} minutes long
              </div>
            </div>
            <div className={styles.description_Container}>
              <div className={styles.description_title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
                  <path
                    d="M 2.625 3.938 L 18.375 3.938 C 19.1 3.938 19.688 4.525 19.688 5.25 C 19.688 5.975 19.1 6.563 18.375 6.563 L 2.625 6.563 C 1.9 6.563 1.312 5.975 1.312 5.25 C 1.312 4.525 1.9 3.938 2.625 3.938 Z M 2.625 9.188 L 18.375 9.188 C 19.1 9.188 19.688 9.775 19.688 10.5 C 19.688 11.225 19.1 11.813 18.375 11.813 L 2.625 11.813 C 1.9 11.813 1.312 11.225 1.312 10.5 C 1.312 9.775 1.9 9.188 2.625 9.188 Z M 2.479 14.438 L 10.644 14.438 C 11.289 14.438 11.811 15.025 11.811 15.75 C 11.811 16.474 11.289 17.063 10.644 17.063 L 2.481 17.063 C 1.835 17.063 1.312 16.474 1.312 15.75 C 1.312 15.025 1.835 14.438 2.479 14.438 Z"
                    fill="rgb(186, 186, 186)"
                  ></path>
                </svg>
                Description
              </div>
              <div className={styles.description_textBox}>
                <div>{selectedLesson?.previewDesc}</div>
              </div>
              <div className={styles.description_question}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2889_76)">
                    <path
                      d="M4.92707 1.12273C5.2479 0.852318 5.76582 0.852318 6.07749 1.12273L6.80165 1.74148C6.93915 1.85607 7.2004 1.95232 7.38374 1.95232H8.1629C8.64874 1.95232 9.04749 2.35107 9.04749 2.8369V3.61607C9.04749 3.7994 9.14374 4.05607 9.25832 4.19357L9.87707 4.91771C10.1475 5.23854 10.1475 5.75646 9.87707 6.06813L9.25832 6.79229C9.14374 6.92979 9.04749 7.18646 9.04749 7.36979V8.14896C9.04749 8.63479 8.64874 9.03354 8.1629 9.03354H7.38374C7.2004 9.03354 6.94374 9.12979 6.80624 9.24438L6.08207 9.86313C5.76124 10.1335 5.24332 10.1335 4.93165 9.86313L4.20749 9.24438C4.06999 9.12979 3.80874 9.03354 3.62999 9.03354H2.8279C2.34207 9.03354 1.94332 8.63479 1.94332 8.14896V7.36521C1.94332 7.18646 1.85165 6.92521 1.73707 6.79229L1.11832 6.06354C0.852487 5.74729 0.852487 5.23396 1.11832 4.91771L1.73707 4.18898C1.85165 4.05148 1.94332 3.79482 1.94332 3.61607V2.84148C1.94332 2.35565 2.34207 1.9569 2.8279 1.9569H3.62082C3.80415 1.9569 4.06082 1.86065 4.19832 1.74607L4.92707 1.12273Z"
                      stroke="#146BEC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 3.72607V5.93982"
                      stroke="#146BEC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.49756 7.3335H5.50306"
                      stroke="#146BEC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2889_76">
                      <rect width="11" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Was this lesson helpful?
              </div>
            </div>
            <div className={styles.button_Container}>
              <RoutingButton
                style="blue"
                additonalStyles={{ flexGrow: "1" }}
                ftSize={1}
                text={"Start Lesson"}
                url={"/education/units/1/videolesson"}
              />
            </div>
          </div>
          <div className={styles.picture_Container}>
            {" "}
            <Image
              alt={""}
              src={selectedLesson?.imageUrl + ""}
              fill
              priority
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
