import Search from "src/components/search/Search";
import styles from "./profile.module.css";
import Link from "next/link";
import data from "src/data/profile.json";
import ProgressBar from "src/components/progress/ProgressBar";

export default function Profile() {
  return (
    <>
      <div className={styles.bodyDash}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerTop}>
            <div className={styles.pageIndicator}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                <path
                  d="M 15.125 6.474 C 15.125 9.403 13.356 11.917 11 11.917 C 8.642 11.917 6.875 9.403 6.875 6.474 C 6.875 3.546 8.397 1.833 11 1.833 C 13.603 1.833 15.125 3.545 15.125 6.474 Z M 3.76 18.464 C 4.113 18.883 5.633 20.167 11 20.167 C 16.367 20.167 17.886 18.883 18.24 18.464 C 18.306 18.383 18.336 18.278 18.322 18.174 C 18.242 17.365 17.514 13.75 11 13.75 C 4.486 13.75 3.758 17.365 3.677 18.174 C 3.663 18.278 3.694 18.383 3.76 18.464 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </svg>
              Account
            </div>
            <p className={styles.bannerTitle}>
              FIN'ED© Introduction to Finance
            </p>
            <p className={styles.bannerText}>
              Feel free to edit and personalize your own account! If you'd like
              to edit your settings,{" "}
              <Link
                href="/education/settings"
                className={styles.underlinedText}
              >
                click here.
              </Link>
            </p>
          </div>
          <div className={styles.searchWrapper}>
            <Search rad={30} wid="45em" color="white" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.profileContainer}>
            <div className={styles.headerWrapper}>
              <div className={styles.headerLeft}>
                <div className={styles.svgWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M 12.653 11.415 C 12.653 12.881 11.466 14.068 10 14.068 C 8.534 14.068 7.347 12.881 7.347 11.415 C 7.347 9.949 8.534 8.762 10 8.762 C 11.466 8.762 12.653 9.949 12.653 11.415 Z M 18.082 4.766 C 19.142 4.766 20 5.624 20 6.684 L 20 15.973 C 20 17.103 19.084 18.018 17.955 18.018 L 2.045 18.018 C 0.916 18.018 0 17.103 0 15.973 L 0 6.684 C 0 5.624 0.858 4.766 1.918 4.766 L 5.754 4.766 L 5.934 4.002 C 6.209 2.819 7.265 1.982 8.48 1.982 L 11.524 1.982 C 12.739 1.982 13.795 2.819 14.07 4.002 L 14.246 4.766 Z M 4 7.534 C 4 7.004 3.569 6.573 3.039 6.573 C 2.505 6.573 2.074 7.004 2.074 7.534 C 2.074 8.064 2.505 8.495 3.035 8.495 C 3.569 8.499 4 8.068 4 7.534 Z M 14.731 11.415 C 14.731 8.803 12.612 6.684 10 6.684 C 7.388 6.684 5.269 8.803 5.269 11.415 C 5.269 14.027 7.388 16.146 10 16.146 C 12.612 16.146 14.731 14.027 14.731 11.415 Z"
                      fill="rgb(255, 255, 255)"
                    ></path>
                  </svg>
                </div>
                Customize
              </div>
              <button className={styles.infoButton} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    d="M 20.49 3.52 C 15.807 -1.169 8.209 -1.174 3.52 3.509 C -1.169 8.193 -1.174 15.791 3.51 20.48 C 8.193 25.169 15.791 25.174 20.48 20.491 C 25.169 15.807 25.174 8.209 20.49 3.52 Z M 13.676 19.615 C 13.676 19.703 13.64 19.789 13.577 19.852 C 13.515 19.914 13.429 19.95 13.34 19.95 L 10.66 19.95 C 10.571 19.95 10.486 19.914 10.423 19.852 C 10.36 19.789 10.325 19.703 10.325 19.615 L 10.325 9.663 C 10.325 9.574 10.36 9.489 10.423 9.426 C 10.486 9.363 10.571 9.328 10.66 9.328 L 13.34 9.328 C 13.429 9.328 13.515 9.363 13.577 9.426 C 13.64 9.489 13.676 9.574 13.676 9.663 Z M 12 7.937 C 10.928 7.937 10.057 7.065 10.057 5.994 C 10.057 4.922 10.928 4.05 12 4.05 C 13.072 4.05 13.943 4.922 13.943 5.994 C 13.943 7.065 13.072 7.937 12 7.937 Z"
                    fill="rgb(51, 133, 255)"
                  ></path>
                </svg>
              </button>
            </div>
            <div className={styles.profilePicture_container}>
              <img
                className={styles.profilePicture}
                src={data.profilePicRel}
              ></img>
              <div className={styles.profileSelector}>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
                <div className={styles.pfp}></div>
              </div>
            </div>
            <div className={styles.level_Container}>
              <div className={styles.level_top_Container}>
                <span className={styles.level_actLevel}>
                  Level {Math.floor(data.xp / 100)}
                </span>
                <span className={styles.level_xpTillNext}>
                  {100 - (data.xp % 100)}XP Until Next Level
                </span>
              </div>
              <div className={styles.level_bottom_Container}>
                <ProgressBar progress={data.xp % 100} />
              </div>
            </div>
            <div className={styles.bio_Container}>
              <div className={styles.bio_top_Container}>
                <div className={styles.bio_top_header}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                  >
                    <path
                      d="M 5.687 10.363 L 5.687 17.327 L 8.568 17.327 L 8.568 1.635 L 11.45 1.635 L 11.45 17.327 L 14.331 17.327 L 14.331 1.635 L 17.213 1.635 L 17.213 -0.327 L 5.783 -0.327 C 2.71 -0.327 0.212 1.929 0.212 4.969 C 0.212 8.01 2.806 10.363 5.687 10.363 Z"
                      fill="rgb(186, 186, 186)"
                    ></path>
                  </svg>
                  Biography
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                  <path
                    d="M 19.361 2.481 C 18.287 1.408 16.546 1.408 15.472 2.481 L 13.932 4.021 L 6.685 11.269 C 6.568 11.386 6.485 11.533 6.444 11.694 L 5.528 15.361 C 5.449 15.673 5.541 16.004 5.769 16.231 C 5.996 16.459 6.327 16.551 6.639 16.473 L 10.306 15.556 C 10.467 15.515 10.614 15.432 10.731 15.315 L 17.926 8.121 L 19.519 6.528 C 20.592 5.454 20.592 3.713 19.519 2.639 Z M 16.769 3.778 C 17.127 3.42 17.707 3.42 18.065 3.778 L 18.222 3.935 C 18.58 4.293 18.58 4.873 18.222 5.231 L 17.29 6.164 L 15.865 4.681 Z M 14.569 5.978 L 15.994 7.46 L 9.614 13.839 L 7.676 14.324 L 8.161 12.385 Z M 3.667 7.333 C 3.667 6.827 4.077 6.417 4.583 6.417 L 9.167 6.417 C 9.673 6.417 10.083 6.006 10.083 5.5 C 10.083 4.994 9.673 4.583 9.167 4.583 L 4.583 4.583 C 3.065 4.583 1.833 5.815 1.833 7.333 L 1.833 17.417 C 1.833 18.935 3.065 20.167 4.583 20.167 L 14.667 20.167 C 16.185 20.167 17.417 18.935 17.417 17.417 L 17.417 12.833 C 17.417 12.327 17.006 11.917 16.5 11.917 C 15.994 11.917 15.583 12.327 15.583 12.833 L 15.583 17.417 C 15.583 17.923 15.173 18.333 14.667 18.333 L 4.583 18.333 C 4.077 18.333 3.667 17.923 3.667 17.417 Z"
                    fill="rgb(166, 166, 166)"
                  ></path>
                </svg>
              </div>
              <div className={styles.bio_text_Container}>{data.bio}</div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.headerWrapper}>
              <div className={styles.headerLeft}>
                <div className={styles.svgWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M 15.125 6.474 C 15.125 9.403 13.356 11.917 11 11.917 C 8.642 11.917 6.875 9.403 6.875 6.474 C 6.875 3.546 8.397 1.833 11 1.833 C 13.603 1.833 15.125 3.545 15.125 6.474 Z M 3.76 18.464 C 4.113 18.883 5.633 20.167 11 20.167 C 16.367 20.167 17.886 18.883 18.24 18.464 C 18.306 18.383 18.336 18.278 18.322 18.174 C 18.242 17.365 17.514 13.75 11 13.75 C 4.486 13.75 3.758 17.365 3.677 18.174 C 3.663 18.278 3.694 18.383 3.76 18.464 Z"
                      fill="rgb(255, 255, 255)"
                    ></path>
                  </svg>
                </div>
                Profile Information
              </div>
              <button className={styles.infoButton} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    d="M 20.49 3.52 C 15.807 -1.169 8.209 -1.174 3.52 3.509 C -1.169 8.193 -1.174 15.791 3.51 20.48 C 8.193 25.169 15.791 25.174 20.48 20.491 C 25.169 15.807 25.174 8.209 20.49 3.52 Z M 13.676 19.615 C 13.676 19.703 13.64 19.789 13.577 19.852 C 13.515 19.914 13.429 19.95 13.34 19.95 L 10.66 19.95 C 10.571 19.95 10.486 19.914 10.423 19.852 C 10.36 19.789 10.325 19.703 10.325 19.615 L 10.325 9.663 C 10.325 9.574 10.36 9.489 10.423 9.426 C 10.486 9.363 10.571 9.328 10.66 9.328 L 13.34 9.328 C 13.429 9.328 13.515 9.363 13.577 9.426 C 13.64 9.489 13.676 9.574 13.676 9.663 Z M 12 7.937 C 10.928 7.937 10.057 7.065 10.057 5.994 C 10.057 4.922 10.928 4.05 12 4.05 C 13.072 4.05 13.943 4.922 13.943 5.994 C 13.943 7.065 13.072 7.937 12 7.937 Z"
                    fill="rgb(51, 133, 255)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
