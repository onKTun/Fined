"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./video.module.css";
import { useVideoContext } from "../../hooks/VideoContext";
import SeekBar from "../seekbar/SeekBar";
import AudioModal from "../audiomodal/AudioModal";

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
interface VideoProps {
  videoUrl: string;
  start: number;
}

export default function Video({ videoUrl, start }: VideoProps) {
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

  const toggleCC = () => setCCEnable(!isCCEnabled);
  console.log(toggleCC);
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
        //await updateProgress(100, "completed");
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
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video src={videoUrl} ref={videoRef} width="100%" height="100%">
          Your browser does not support the video tag.
        </video>
        {/*toggles video activity visibility*/}
        <div
          className={`${styles.activityWrapper} ${
            isActivityActive ? styles.open : styles.closed
          }`}
        ></div>
      </div>

      <ul className={styles.videoHotbar}>
        <div className={styles.audioModalWrapper}>
          <AudioModal isOpen={isAudioModalOpen} onChange={handleVolumeChange} />
        </div>
        {/* Options button */}

        {/* Audio button */}
        <button
          onClick={() => setAudioModal((prev) => !prev)}
          className={`${styles.videoHotbar_button} ${styles.rightAlignedButton}`}
        >
          {volume != 0 && (
            <svg
              fill="var(--black4)"
              width="28px"
              height="28px"
              viewBox="-1.5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgFill}
            >
              <path d="M7.098 4.769v9.63c0 .61-.353.756-.784.325L3.42 11.828H1.442A1.112 1.112 0 0 1 .333 10.72V8.448A1.112 1.112 0 0 1 1.442 7.34h1.977l2.895-2.896c.431-.43.784-.285.784.325zm2.076 7.474a.553.553 0 0 0 .392-.163 3.53 3.53 0 0 0 0-4.992.554.554 0 1 0-.784.784 2.422 2.422 0 0 1 0 3.425.554.554 0 0 0 .392.946zm2.184 1.629a6.059 6.059 0 0 0 0-8.575.554.554 0 0 0-.784.783 4.955 4.955 0 0 1 0 7.008.554.554 0 0 0 .784.784zm1.79 1.79a8.59 8.59 0 0 0 0-12.157.554.554 0 0 0-.783.784 7.481 7.481 0 0 1 0 10.59.554.554 0 1 0 .784.784z" />
            </svg>
          )}
          {volume == 0 && (
            <svg
              fill="var(--black4)"
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

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className={`${styles.videoHotbar_button} ${styles.rightAlignedButton}`}
        >
          {isPlaying ? (
            <svg
              fill="var(--black4)"
              height="18px"
              width="18px"
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
              width="18px"
              height="18px"
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
                  fill="var(--black4)"
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
            width="24"
            viewBox="0 0 22 22"
          >
            <g
              className={styles.svgFill}
              transform="matrix(.58303 0 0 .58303 2.73 2.728)"
              fill="var(--black4)"
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
