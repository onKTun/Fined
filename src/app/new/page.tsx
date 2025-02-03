"use client";
import styles from "./landingpage.module.css";
import LandingPageHeader from "./components/landingpageheader/LandingPageHeader";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./components/buttonNew/Button";
import MissionSVG from "./svg/corecomponents/MissionSVG";

export default function LandingPage() {
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
      <LandingPageHeader />
      <section className={styles.container}>
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            className={styles.video}
            onError={onVideoError}
          >
            <source src={"videos/landingpage.mp4"} type="video/mp4" />
          </video>
        ) : (
          <Image
            alt="fallback image"
            src="/assets/backgrounds/MAINBACKGROUND.png"
            layout="fill" // Make the image responsive to the div's size
            objectFit="cover" // Ensure the image fills the div without stretching
          />
        )}
        <div className={styles.textStack}>
          <h1 className={styles.title}>Build your Financial Future</h1>
          <div className={styles.subtitleHeader}>
            <MissionSVG />
            Our Mission
          </div>
          <hr className={styles.line} />
          <h2 className={styles.subtitle}>
            At FINED, we create accessible financial education tailored for
            students with special needs, empowering them with the skills for
            financial independence.
          </h2>
          <div className={styles.buttonContainer}>
            <Button text={"Start Now"} styleType={"blue"} />
            <Button text={"Learn More"} styleType={"regular"} />{" "}
          </div>
        </div>
        <div className={styles.tutorialVideo}></div>
      </section>
      <section className={styles.serviceSection}></section>
    </>
  );
}
