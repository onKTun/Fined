"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./video.module.css";
import { useVideoContext } from "../../hooks/VideoContext";
import AudioModal from "./components/audiomodal/AudioModal";
import VideoActivity from "./components/videoactivity/VideoActivity";
import SeekBar from "./components/seekbar/SeekBar";
import { updateProgress } from "../../actions";

/*
video logic
on render
  fetch activity data
  store all the activities data in an array
onActivityStart 
  stop video
  find current activity
  clear current activity data
  pass data to videoactivity component
  start/render the activity
  when activity finished call activity end
onActivityend
  write current activitty data to supabase
  handle error
  resume video 
onVideoEnd
  mark as complete
*/

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {
    isPlaying,
    setIsPlaying,
    currentTime,
    setCurrentTime,
    volume,
    isActivityActive: isActivityActive,
    setIsActivityActive: setIsActivityActive,
    isDragging,
  } = useVideoContext();
  const [isCCEnabled, setCCEnable] = useState(false);
  const [isAudioModalOpen, setAudioModal] = useState(false);
  const videoDuration = videoRef.current?.duration || 0;

  // Formats the time for the bar at the bottom
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!isActivityActive && videoRef.current) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const closeVideoActivity = () => {
    console.log("close video activity");
    setIsActivityActive(false);
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const toggleCC = () => setCCEnable(!isCCEnabled);

  const toggleFullscreen = () => videoRef.current?.requestFullscreen();

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => setIsPlaying(false);
    const handleActivityPause = () => {
      if (isActivityActive && videoElement) {
        videoElement.pause();
        setIsPlaying(false);
      }
    };

    const onTimeUpdate = async () => {
      const current = Math.floor(videoElement?.currentTime || 0);
      setCurrentTime(current);

      if (current === videoDuration) {
        console.log("video finished");
        await updateProgress(100, "completed");
      }
    };

    const preventUnpause = (event: Event) => {
      if (isActivityActive) {
        event.preventDefault();
        videoElement?.pause();
        setIsPlaying(false);
      }
    };
    const checkForDrag = () => {
      if (isDragging) {
        videoRef.current?.pause();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
      videoElement.addEventListener("timeupdate", handleActivityPause);
      videoElement.addEventListener("timeupdate", onTimeUpdate);
      videoElement.addEventListener("play", preventUnpause);
      videoElement.addEventListener("drag", checkForDrag);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
        videoElement.removeEventListener("timeupdate", handleActivityPause);
        videoElement.removeEventListener("timeupdate", onTimeUpdate);
        videoElement.removeEventListener("play", preventUnpause);
        videoElement.removeEventListener("drag", checkForDrag);
      }
    };
  }, [isActivityActive, isDragging, setCurrentTime]);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const interval = setInterval(() => {
        setCurrentTime(Math.floor(videoRef.current?.currentTime || 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, setCurrentTime]);

  const handleVolumeChange = (audio: number) => {
    if (videoRef.current) {
      videoRef.current.volume = audio;
    }
  };
  const handleTimeChange = (time) => {
    if (videoRef.current && !videoRef.current.seeking) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseWhileDragging = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.wrapper} style={{ display: "flex" }}>
      <div className={styles.videoWrapper}>
        <video
          src="https://kkwupcruwqnlbuzkkiom.supabase.co/storage/v1/object/public/videos/lesson_1_720p.mp4?t=2024-10-23T17%3A49%3A25.308Z"
          ref={videoRef}
          width="100%"
          height="100%"
        >
          Your browser does not support the video tag.
        </video>
        {/*toggles video activity visibility*/}
        <div
          className={`${styles.activityWrapper} ${
            isActivityActive ? styles.open : styles.closed
          }`}
        >
          <VideoActivity onClick={closeVideoActivity} />
        </div>
      </div>

      <ul className={styles.videoHotbar}>
        <div className={styles.audioModalWrapper}>
          <AudioModal isOpen={isAudioModalOpen} onChange={handleVolumeChange} />
        </div>
        {/* Options button */}
        <button
          className={`${styles.videoHotbar_button} ${styles.rightAlignedButton}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
            <path
              d="M 16.315 2.966 C 16.416 3.163 16.442 3.416 16.492 3.922 C 16.588 4.879 16.635 5.357 16.836 5.621 C 17.091 5.954 17.504 6.125 17.92 6.069 C 18.247 6.026 18.62 5.721 19.364 5.112 C 19.757 4.789 19.955 4.628 20.166 4.56 C 20.435 4.475 20.726 4.489 20.985 4.601 C 21.189 4.69 21.37 4.87 21.728 5.229 L 22.771 6.272 C 23.13 6.631 23.31 6.811 23.399 7.015 C 23.511 7.274 23.525 7.565 23.439 7.834 C 23.372 8.045 23.211 8.242 22.889 8.636 C 22.279 9.381 21.974 9.753 21.93 10.081 C 21.874 10.497 22.046 10.91 22.379 11.164 C 22.641 11.364 23.121 11.412 24.079 11.508 C 24.584 11.558 24.837 11.584 25.035 11.685 C 25.286 11.815 25.48 12.031 25.584 12.293 C 25.667 12.5 25.667 12.754 25.667 13.263 L 25.667 14.737 C 25.667 15.246 25.667 15.5 25.585 15.706 C 25.481 15.969 25.286 16.185 25.034 16.315 C 24.837 16.416 24.584 16.442 24.078 16.492 C 23.121 16.588 22.643 16.635 22.379 16.836 C 22.046 17.091 21.875 17.504 21.931 17.92 C 21.975 18.247 22.28 18.62 22.889 19.364 C 23.211 19.757 23.372 19.953 23.439 20.166 C 23.525 20.435 23.511 20.726 23.399 20.985 C 23.31 21.189 23.13 21.369 22.771 21.728 L 21.728 22.77 C 21.369 23.13 21.189 23.31 20.985 23.397 C 20.726 23.51 20.435 23.524 20.166 23.438 C 19.955 23.371 19.757 23.21 19.364 22.888 C 18.619 22.279 18.247 21.974 17.92 21.931 C 17.504 21.875 17.091 22.046 16.836 22.379 C 16.635 22.641 16.588 23.12 16.492 24.078 C 16.442 24.584 16.416 24.837 16.315 25.034 C 16.185 25.285 15.969 25.481 15.707 25.585 C 15.5 25.667 15.246 25.667 14.737 25.667 L 13.263 25.667 C 12.754 25.667 12.5 25.667 12.294 25.585 C 12.031 25.481 11.815 25.286 11.685 25.034 C 11.584 24.837 11.558 24.584 11.508 24.078 C 11.412 23.121 11.364 22.643 11.164 22.379 C 10.91 22.046 10.496 21.875 10.081 21.931 C 9.753 21.974 9.381 22.279 8.636 22.888 C 8.242 23.211 8.045 23.372 7.834 23.439 C 7.565 23.525 7.274 23.511 7.015 23.399 C 6.811 23.31 6.63 23.13 6.272 22.771 L 5.229 21.728 C 4.87 21.369 4.69 21.189 4.601 20.985 C 4.489 20.726 4.475 20.435 4.56 20.166 C 4.628 19.955 4.789 19.757 5.111 19.364 C 5.721 18.619 6.026 18.247 6.069 17.919 C 6.125 17.504 5.954 17.09 5.621 16.836 C 5.358 16.635 4.879 16.588 3.921 16.492 C 3.416 16.442 3.163 16.416 2.964 16.315 C 2.714 16.185 2.52 15.969 2.416 15.707 C 2.333 15.5 2.333 15.246 2.333 14.737 L 2.333 13.263 C 2.333 12.754 2.333 12.5 2.415 12.294 C 2.519 12.031 2.714 11.815 2.966 11.685 C 3.163 11.584 3.416 11.558 3.922 11.508 C 4.879 11.412 5.358 11.364 5.621 11.164 C 5.954 10.91 6.126 10.497 6.07 10.081 C 6.026 9.753 5.72 9.381 5.111 8.634 C 4.789 8.241 4.628 8.045 4.56 7.833 C 4.475 7.564 4.489 7.273 4.601 7.014 C 4.69 6.811 4.87 6.63 5.229 6.271 L 6.272 5.229 C 6.631 4.87 6.811 4.689 7.015 4.601 C 7.274 4.489 7.565 4.475 7.834 4.56 C 8.045 4.628 8.242 4.789 8.636 5.111 C 9.381 5.72 9.753 6.025 10.08 6.069 C 10.496 6.125 10.911 5.954 11.165 5.62 C 11.363 5.357 11.412 4.879 11.508 3.921 C 11.558 3.416 11.584 3.163 11.685 2.964 C 11.815 2.714 12.031 2.519 12.293 2.415 C 12.5 2.333 12.754 2.333 13.263 2.333 L 14.737 2.333 C 15.246 2.333 15.5 2.333 15.706 2.415 C 15.969 2.519 16.185 2.714 16.315 2.966 Z M 14 18.667 C 16.577 18.667 18.667 16.577 18.667 14 C 18.667 11.423 16.577 9.333 14 9.333 C 11.423 9.333 9.333 11.423 9.333 14 C 9.333 16.577 11.423 18.667 14 18.667 Z"
              fill="var(--black5)"
              className={styles.svgFill}
            ></path>
          </svg>
        </button>
        {/* Audio button */}
        <button
          onClick={() => setAudioModal((prev) => !prev)}
          className={`${styles.videoHotbar_button} ${styles.rightAlignedButton}`}
        >
          {volume != 0 && (
            <svg
              fill="var(--black5)"
              width="34px"
              height="34px"
              viewBox="-1.5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgFill}
            >
              <path d="M7.098 4.769v9.63c0 .61-.353.756-.784.325L3.42 11.828H1.442A1.112 1.112 0 0 1 .333 10.72V8.448A1.112 1.112 0 0 1 1.442 7.34h1.977l2.895-2.896c.431-.43.784-.285.784.325zm2.076 7.474a.553.553 0 0 0 .392-.163 3.53 3.53 0 0 0 0-4.992.554.554 0 1 0-.784.784 2.422 2.422 0 0 1 0 3.425.554.554 0 0 0 .392.946zm2.184 1.629a6.059 6.059 0 0 0 0-8.575.554.554 0 0 0-.784.783 4.955 4.955 0 0 1 0 7.008.554.554 0 0 0 .784.784zm1.79 1.79a8.59 8.59 0 0 0 0-12.157.554.554 0 0 0-.783.784 7.481 7.481 0 0 1 0 10.59.554.554 0 1 0 .784.784z" />
            </svg>
          )}
          {volume == 0 && (
            <svg
              fill="var(--black5)"
              width="34px"
              height="34px"
              viewBox="-1.5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.676 4.938v9.63c0 .61-.353.756-.784.325l-2.896-2.896H2.02A1.111 1.111 0 0 1 .911 10.89V8.618a1.112 1.112 0 0 1 1.108-1.109h1.977l2.896-2.896c.43-.43.784-.284.784.325zm7.251 6.888a.554.554 0 1 1-.784.784l-2.072-2.073-2.073 2.073a.554.554 0 1 1-.784-.784l2.073-2.073L9.214 7.68a.554.554 0 0 1 .784-.783L12.07 8.97l2.072-2.073a.554.554 0 0 1 .784.783l-2.072 2.073z" />
            </svg>
          )}
        </button>
        {/* CC button */}
        <button
          onClick={toggleCC}
          className={`${styles.videoHotbar_button} ${
            styles.rightAlignedButton
          } ${isCCEnabled ? styles.ccEnabled : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <path d="M0 0h48v48H0z" fill="none" />
            <path
              fill="var(--black5)"
              className={styles.svgFill}
              d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2c0 1.1-.89 2-2 2h-6c-1.11 0-2-.9-2-2v-8c0-1.1.89-2 2-2h6c1.11 0 2 .9 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2c0 1.1-.89 2-2 2h-6c-1.11 0-2-.9-2-2v-8c0-1.1.89-2 2-2h6c1.11 0 2 .9 2 2v2z"
            />
          </svg>
        </button>
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className={`${styles.videoHotbar_button} ${styles.rightAlignedButton}`}
        >
          {isPlaying ? (
            <svg
              fill="var(--black5)"
              height="22px"
              width="22px"
              version="1.1"
              className={styles.svgFill}
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.607 47.607"
            >
              <title>Pause Video</title>
              <g>
                <path
                  d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                />
                <path
                  d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="22px"
              height="22px"
              viewBox="-3 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  className={styles.svgFill}
                  id="Icon-Set-Filled"
                  transform="translate(-419.000000, -571.000000)"
                  fill="var(--black5)"
                >
                  <path
                    d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                    id="play"
                  ></path>
                </g>
              </g>
            </svg>
          )}
        </button>
        {/* Progress Bar */}
        <div className={styles.progress_Wrapper}>
          <div className={styles.playVideo_wrapper}>
            <div className={styles.timeContainer}>
              {formatTime(currentTime)}
            </div>
            <div className={styles.progressBarContainer}>
              <SeekBar
                onChange={handleTimeChange}
                whileDragging={pauseWhileDragging}
                duration={videoDuration}
              />
            </div>
            <div className={styles.timeContainer}>
              -{formatTime(videoDuration - currentTime)}
            </div>
          </div>
        </div>
        {/* Fullscreen button */}
        <button
          className={`${styles.videoHotbar_button} ${styles.leftAlignedButton}`}
          onClick={toggleFullscreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            viewBox="0 0 22 22"
          >
            <g
              className={styles.svgFill}
              transform="matrix(.58303 0 0 .58303 2.73 2.728)"
              fill="var(--black5)"
            >
              <path d="m28.36 19.595c0-.868-.665-1.57-1.491-1.57-.819.002-1.492.702-1.492 1.57v3.25l-6.02-6.02c-.582-.583-1.524-.583-2.106 0-.582.582-.582 1.527 0 2.109l5.989 5.987h-3.235c-.881.002-1.591.669-1.591 1.491 0 .824.71 1.49 1.591 1.49h6.761c.881 0 1.59-.665 1.593-1.49-.003-.022-.006-.039-.009-.061.003-.028.009-.058.009-.087v-6.668h-.0001" />
              <path d="m9 16.824l-6.01 6.02v-3.25c0-.868-.672-1.568-1.493-1.57-.824 0-1.49.702-1.49 1.57l-.002 6.669c0 .029.008.059.001.087-.002.021-.006.038-.008.061.002.825.712 1.49 1.592 1.49h6.762c.879 0 1.59-.666 1.59-1.49 0-.822-.711-1.489-1.59-1.491h-3.235l5.989-5.987c.58-.582.58-1.527 0-2.109-.583-.584-1.526-.584-2.11-.0001" />
              <path d="m19.359 11.535l6.02-6.02v3.25c0 .865.673 1.565 1.492 1.568.826 0 1.491-.703 1.491-1.568v-6.671c0-.029-.006-.059-.009-.085.003-.021.006-.041.009-.062-.003-.826-.712-1.491-1.592-1.491h-6.761c-.881 0-1.591.665-1.591 1.491 0 .821.71 1.49 1.591 1.492h3.235l-5.989 5.987c-.582.581-.582 1.524 0 2.105.582.586 1.524.586 2.106.0001" />
              <path d="m5.121 3.442h3.234c.879-.002 1.59-.671 1.59-1.492 0-.826-.711-1.491-1.59-1.491h-6.761c-.88 0-1.59.665-1.592 1.491.002.021.006.041.008.062-.002.026-.001.055-.001.085l.002 6.672c0 .865.666 1.568 1.49 1.568.821-.003 1.493-.703 1.493-1.568v-3.25l6.01 6.02c.584.585 1.527.585 2.11 0 .58-.581.58-1.524 0-2.105l-5.989-5.988" />
            </g>
          </svg>
        </button>
      </ul>
    </div>
  );
}
