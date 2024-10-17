"use client";
import Search from "src/components/search/Search";
import styles from "../units.module.css";
import Button from "src/components/button/Button";
import Activity from "../components/activity/Activity";
import activityData from "src/data/video.json";
import RoutingButton from "src/components/routingbutton/RoutingButton";

export default function Unit1() {
  const completed = activityData.filter(
    (activity) => activity.progress == 100
  ).length;

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
        <div className={styles.searchWrapper}>
          <Search rad={30} wid="45em" color="white" />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.video_Container}>
          {" "}
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
              Lesson Video
            </div>
            <button className={styles.infoButton} type="button">
              30%
            </button>
          </div>
          <ul className={styles.video_tags}>
            <li className={styles.video_tag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.068"
                height="21"
              >
                <path
                  d="M 19.312 4.244 L 19.312 14.648 C 19.312 15.496 18.619 16.275 17.767 16.38 L 17.495 16.415 C 16.055 16.608 14.028 17.203 12.395 17.885 C 11.824 18.121 11.192 17.693 11.192 17.071 L 11.192 4.9 C 11.192 4.576 11.377 4.279 11.666 4.121 C 13.273 3.255 15.704 2.485 17.355 2.345 L 17.407 2.345 C 18.461 2.345 19.312 3.194 19.312 4.244 Z M 9.4 4.121 C 7.793 3.255 5.362 2.485 3.711 2.345 L 3.65 2.345 C 2.597 2.345 1.745 3.194 1.745 4.244 L 1.745 14.648 C 1.745 15.496 2.439 16.275 3.29 16.38 L 3.562 16.415 C 5.002 16.608 7.03 17.203 8.662 17.885 C 9.233 18.121 9.865 17.693 9.865 17.071 L 9.865 4.9 C 9.867 4.574 9.688 4.274 9.4 4.121 Z M 4.387 6.773 L 6.362 6.773 C 6.726 6.773 7.021 7.066 7.021 7.429 C 7.021 7.791 6.726 8.085 6.362 8.085 L 4.387 8.085 C 4.024 8.085 3.729 7.791 3.729 7.429 C 3.729 7.066 4.024 6.773 4.387 6.773 Z M 7.021 10.71 L 4.387 10.71 C 4.024 10.71 3.729 10.416 3.729 10.054 C 3.729 9.691 4.024 9.398 4.387 9.398 L 7.021 9.398 C 7.384 9.398 7.679 9.691 7.679 10.054 C 7.679 10.416 7.384 10.71 7.021 10.71 Z"
                  fill="rgb(51, 133, 255)"
                ></path>
              </svg>
              Unit 1
            </li>
            <li className={styles.video_tag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.068"
                height="21"
              >
                <path
                  d="M 5.505 1.848 C 4.794 1.941 4.418 2.111 4.149 2.373 C 3.882 2.636 3.707 3.003 3.611 3.697 C 3.513 4.412 3.511 5.359 3.511 6.716 L 3.511 14.214 C 3.859 13.977 4.244 13.802 4.652 13.696 C 5.115 13.574 5.656 13.574 6.449 13.575 L 17.556 13.575 L 17.556 6.717 C 17.556 5.359 17.555 4.412 17.456 3.697 C 17.361 3.003 17.186 2.636 16.918 2.373 C 16.65 2.111 16.274 1.941 15.563 1.848 C 14.831 1.752 13.862 1.75 12.471 1.75 L 8.597 1.75 C 7.206 1.75 6.237 1.752 5.505 1.848 Z M 5.933 5.771 C 5.933 5.379 6.258 5.061 6.659 5.061 L 14.409 5.061 C 14.805 5.058 15.13 5.375 15.135 5.77 C 15.13 6.165 14.805 6.483 14.409 6.479 L 6.659 6.479 C 6.263 6.483 5.938 6.166 5.933 5.771 Z M 11.503 8.372 C 11.9 8.369 12.224 8.686 12.229 9.081 C 12.229 9.473 11.904 9.79 11.503 9.79 L 9.082 9.79 L 6.66 9.79 C 6.263 9.794 5.938 9.477 5.933 9.082 C 5.938 8.686 6.263 8.368 6.66 8.372 L 9.082 8.372 Z"
                  fill="rgb(51, 133, 255)"
                ></path>
                <path
                  d="M 7.628 14.993 L 6.56 14.993 C 5.613 14.993 5.282 14.999 5.027 15.066 C 4.339 15.243 3.782 15.746 3.538 16.412 C 3.552 16.746 3.575 17.041 3.611 17.303 C 3.707 17.997 3.882 18.365 4.149 18.627 C 4.418 18.889 4.794 19.059 5.505 19.152 C 6.237 19.248 7.206 19.25 8.597 19.25 L 12.471 19.25 C 13.862 19.25 14.831 19.248 15.563 19.153 C 16.274 19.059 16.65 18.889 16.918 18.627 C 17.186 18.365 17.361 17.997 17.456 17.303 C 17.537 16.72 17.553 15.982 17.556 14.993 L 11.502 14.993 L 11.502 17.624 C 11.502 17.885 11.502 18.015 11.411 18.068 C 11.319 18.12 11.193 18.062 10.942 17.945 L 9.739 17.387 C 9.653 17.348 9.611 17.329 9.566 17.329 C 9.519 17.329 9.477 17.348 9.392 17.387 L 8.189 17.945 C 7.937 18.062 7.812 18.12 7.72 18.068 C 7.628 18.015 7.628 17.884 7.628 17.624 Z"
                  fill="rgb(51, 133, 255)"
                ></path>
              </svg>
              Lesson 2
            </li>
          </ul>
          <div className={styles.imagePreview}></div>
          <div className={styles.completionTime}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19">
              <path
                d="M 2.653 4.925 C 0.555 8.065 0.863 12.23 3.399 15.028 C 5.935 17.825 10.049 18.539 13.379 16.759 C 16.71 14.979 18.402 11.162 17.485 7.499 C 16.568 3.836 13.276 1.266 9.5 1.266 L 9.5 4.01 M 9.5 9.5 L 5.84 5.84"
                fill="transparent"
                strokeWidth="1.46"
                stroke="rgb(179, 179, 179)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            10 Minutes
          </div>
          <div className={styles.video_titleDesc}>
            <h1 className={styles.title}>What does money mean?</h1>
            <h2 className={styles.subtitle}>
              In this video, we will learn what money actually is and some basic
              finance terms.
            </h2>
          </div>
          <div className={styles.button_Container}>
            <RoutingButton
              style={"blue"}
              text={"Watch"}
              ftSize={1.1}
              additonalStyles={{ width: "8em", height: "2.7em" }}
              url={"/education/units/1/preview"}
            />
            <RoutingButton
              style={"gray"}
              text={"Restart"}
              ftSize={1.1}
              additonalStyles={{ width: "6em", height: "2.7em" }}
              url={"/education/units/1/preview"}
            />
          </div>
        </div>
        <div className={styles.activity_Container}>
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
              <button className={styles.infoButton} type="button">
                {completed}/{activityData.length}
              </button>
            </div>
          </div>
          {activityData.map((activity, index) => (
            <Activity
              title={activity.type}
              desc={activity.desc}
              svgPath={activity.svgPath}
              estTime={activity.estTime}
              key={index}
              progress={activity.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
