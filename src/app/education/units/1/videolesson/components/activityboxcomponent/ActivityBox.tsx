"use client";
import React, { useEffect } from "react";
import Button from "src/components/ui/button/Button";
import ProgressBar from "src/components/ui/progress/ProgressBar";
import VideoActivityItem from "../videoactivityitem/VideoActivityItem";
import activityData from "src/data/videoactivity.json";
import styles from "./activitybox.module.css";
import { useVideoContext } from "src/app/education/units/1/videolesson/hooks/VideoContext";

export default function ActivityBox() {
  return (
    <a href="https://docs.google.com/document/d/1EefHZ2QHoJy9tEejwWN--5sQeLjoszFHSG1VuWP18rk/edit?usp=sharing">
      {" "}
      <div className={styles.activity_Container}>
        <Button
          style={"blue"}
          text={"Video Activities"}
          ftSize={1.1}
          heightWidth={{ height: "2.5em" }}
          onClick={() => {}}
        />
      </div>
    </a>
  );

  const { currentTime, setCurrentActivity } = useVideoContext();

  const findInProgressActivity = (activities, currentTime) => {
    let inProgressIndex = -1;

    for (let i = 0; i < activities.length; i++) {
      const activityTime = new Date(activities[i].timestamp).getTime();

      if (activityTime > currentTime) {
        inProgressIndex = i;
        break;
      }
    }
    return inProgressIndex;
  };

  const getCompletedActivitiesCount = (activities, currentTime) => {
    let completed = 0;

    for (let i = 0; i < activities.length; i++) {
      const activityTime = new Date(activities[i].timestamp).getTime();

      if (activityTime < currentTime + 1) {
        completed++;
      }
    }

    return completed;
  };

  const inProgressIndex = findInProgressActivity(activityData, currentTime);

  useEffect(() => {
    setCurrentActivity(inProgressIndex);
  }, [inProgressIndex, setCurrentActivity]);

  return (
    <div className={styles.activity_Container}>
      <div className={styles.activity_Progress}>
        <ProgressBar
          progress={
            (getCompletedActivitiesCount(activityData, currentTime) /
              activityData.length) *
            100
          }
        />
      </div>
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
            Taskbar
            <div className={styles.header_subtext}>Finish all to continue</div>
          </div>
        </div>
        <button className={styles.infoButton} type="button">
          {getCompletedActivitiesCount(activityData, currentTime) +
            "/" +
            activityData.length}
        </button>
      </div>
      <ul className={styles.activitys_Wrapper}>
        {activityData.map((activity, index) => (
          <VideoActivityItem
            key={index}
            timeStamp={activity.timestamp}
            text={activity.name}
            inprogress={index === inProgressIndex}
          />
        ))}
        <div className={styles.activity_Path}></div>
      </ul>
      <Button
        style={"blue"}
        text={"Instructions"}
        ftSize={1.1}
        heightWidth={{ height: "2.5em" }}
        onClick={() => {}}
      />
    </div>
  );
}
