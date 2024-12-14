import Link from "next/link";
import styles from "./settings.module.css";
import Search from "src/components/ui/search/Search";
import SettingItem from "./components/settingitem/SettingItem";
import Image from "next/image";
import ContrastSVG from "public/svg/options/ContrastSVG";
import AnimationSVG from "public/svg/options/AnimationSVG";
import MuteSVG from "public/svg/options/MuteSVG";
import CCSVG from "public/svg/options/CCSVG";

export default function Settings() {
  return (
    <div className={styles.bodyDash}>
      <div className={styles.bannerContainer}>
        <Image
          src="/assets/backgrounds/MAINBACKGROUND.png" // replace with your image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.bannerTop}>
          <div className={styles.pageIndicator}>
            <Image
              width={25}
              height={25}
              alt=""
              src="/assets/sidebar/settings.svg"
            />
            Settings
          </div>
          <p className={styles.bannerTitle}>FIN'ED© Introduction to Finance</p>
          <p className={styles.bannerText}>
            Something doesn't feel right? Edit it! If you'd like to edit your
            information,{" "}
            <Link href="/education/profile" className={styles.underlinedText}>
              click here.
            </Link>
          </p>
        </div>
        <div className={styles.searchWrapper}>
          <Search rad={30} wid="45em" color="white" />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.settingContainer}>
          {" "}
          <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
              <div className={styles.svgWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
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
          <SettingItem
            svgObject={<ContrastSVG />}
            title={"High Contrast Mode"}
            desc={
              "With this enabled, links will be highlighted and components with a low contrast ratio will be have their contrast ratio increased"
            }
          />{" "}
          <SettingItem
            svgObject={<AnimationSVG />}
            title={"Stop Playing Animations"}
            desc={
              "Great for those who have motion sickness; Makes all the animations static"
            }
          />{" "}
          <SettingItem
            svgObject={<MuteSVG />}
            title={"Mute Video in Videos"}
            desc={
              "With this enabled, links will be highlighted and components with a low contrast ratio will be have their contrast ratio increased"
            }
          />
          <SettingItem
            svgObject={<CCSVG />}
            title={"Show Caption in Videos"}
            desc={
              "With this enabled, links will be highlighted and components with a low contrast ratio will be have their contrast ratio increased"
            }
          />
        </div>
      </div>
    </div>
  );
}
