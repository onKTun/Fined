"use client";
import styles from "src/app/landingpage.module.css";
import DefaultHeader from "src/components/header/DefaultHeader";
import RoutingButton from "src/components/ui/routingbutton/RoutingButton";
import { useEffect, useState } from "react";
import Image from "next/image";
interface ClientSideLandingPageProps {
  loggedIn: boolean;
}

export default function ClientSideLandingPage({
  loggedIn,
}: ClientSideLandingPageProps) {
  const [videoError, setVideoError] = useState(false);

  const onVideoError = () => {
    setVideoError(true);
  };

  const videoUrl =
    "https://kkwupcruwqnlbuzkkiom.supabase.co/storage/v1/object/public/videos/landing_page_video_720p.mp4?t=2024-10-23T05%3A26%3A12.795Z";
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          setVideoError(false);
        }
      } catch (err) {
        setVideoError(true);
      }
    };
    fetchVideo();
  }); // Add supabase

  return (
    <>
      <div className={styles.fullPage}>
        <div className={styles.viewport}>
          <DefaultHeader loggedIn={loggedIn} />
          <div className={styles.heroContainer}>
            <div className={styles.left}>
              <Image
                src="/assets/finedSolid.png"
                width={70}
                height={70}
                alt=""
              />
              <div className={styles.title}>
                <h6 className={styles.onTitle}>Finance</h6>
                Learn Finance
                <br /> With <span className={styles.logoSpan}>FIN'ED</span>
              </div>
              <section className={styles.sub_and_button}>
                <div className={styles.subtitle_Container}>
                  <h6 className={styles.subtitle}>Mission Statement</h6>
                  <p className={styles.subtitle_Paragraph}>
                    At FINED, we create accessible financial education tailored
                    for students with special needs, empowering them with the
                    skills for financial independence.
                  </p>
                </div>
                <div className={styles.buttonContainer}>
                  <RoutingButton
                    style={"gray"}
                    text={"Learn More"}
                    ftSize={1}
                    additonalStyles={{}}
                    url={"/account/login"}
                  />
                  <RoutingButton
                    style={"blue"}
                    text={"Try Now"}
                    ftSize={1}
                    additonalStyles={{ width: "7em" }}
                    url={loggedIn ? "/education/dashboard" : "/account/login"}
                  />
                </div>
              </section>
              <div className={styles.heroNote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    d="M 2.636 2.636 C 1.008 4.265 0 6.515 0 9 C 0 11.485 1.008 13.735 2.636 15.364 C 4.265 16.992 6.515 18 9 18 C 11.485 18 13.735 16.992 15.364 15.364 C 16.992 13.735 18 11.485 18 9 C 18 6.515 16.992 4.265 15.364 2.636 C 13.735 1.008 11.485 0 9 0 C 6.515 0 4.265 1.008 2.636 2.636 Z M 8.459 10.905 L 8.371 9.793 C 8.221 7.93 8.087 6.486 8.087 4.543 C 8.087 4.499 8.105 4.458 8.134 4.429 C 8.163 4.4 8.204 4.382 8.248 4.382 L 9.752 4.382 C 9.796 4.382 9.836 4.4 9.866 4.429 C 9.896 4.459 9.913 4.5 9.913 4.543 C 9.913 6.477 9.787 7.944 9.648 9.811 L 9.567 10.912 C 9.564 10.952 9.546 10.989 9.517 11.017 C 9.488 11.044 9.449 11.06 9.407 11.06 L 8.62 11.06 C 8.578 11.06 8.537 11.044 8.507 11.014 C 8.479 10.986 8.461 10.947 8.459 10.905 Z M 8.248 13.457 L 8.248 12.395 C 8.248 12.351 8.266 12.311 8.295 12.282 C 8.325 12.251 8.366 12.234 8.409 12.234 L 9.591 12.234 C 9.635 12.234 9.675 12.252 9.705 12.281 L 9.707 12.285 C 9.735 12.314 9.752 12.353 9.752 12.395 L 9.752 13.457 C 9.752 13.502 9.734 13.542 9.705 13.571 C 9.675 13.6 9.635 13.618 9.591 13.618 L 8.409 13.618 C 8.365 13.618 8.324 13.6 8.295 13.571 C 8.265 13.541 8.248 13.5 8.248 13.457 Z"
                    fill="rgb(0,0,0,0.2)"
                  ></path>
                </svg>
                Please note this website is still in development
              </div>
            </div>
            <div className={styles.right}>
              {!videoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  className={styles.videoContainer}
                  onError={onVideoError}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  alt="fallback image"
                  src="/assets/backgrounds/MAINBACKGROUND.png"
                  layout="fill" // Make the image responsive to the div's size
                  objectFit="cover" // Ensure the image fills the div without stretching
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
