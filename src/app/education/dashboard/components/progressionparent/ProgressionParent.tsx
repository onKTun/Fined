import { useState, useEffect } from "react";
import ProgressItem from "./components/progressitem/ProgressItem";
import styles from "./progressionparent.module.css";
import progressData from "src/data/info.json";

import RoutingButton from "src/components/routingbutton/RoutingButton";
//import ActivityPreviewItem from "./components/activitypreviewitem/ActivityPreviewItem";
//import activityData from "src/data/video.json";
// Function to calculate cumulative progress
/*
const calculateCumulativeProgress = (units) => {
  if (units.length === 0) return 0;

  const totalProgress = units.reduce((sum, unit) => {
    return sum + unit.progress;
  }, 0);

  const averageProgress = totalProgress / units.length;
  return averageProgress;
};*/

export default function ProgressionParent() {
  const [cumulativeProgress, setCumulativeProgress] = useState(0);

  useEffect(() => {
    // Calculate progress once when the component mounts
    //const progress = calculateCumulativeProgress(progressData);
    setCumulativeProgress(0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
              <path
                d="M 9.254 2.21 C 9.635 1.068 11.196 1.016 11.683 2.054 L 11.746 2.21 L 15.749 14.225 L 17.129 10.085 C 17.291 9.602 17.717 9.256 18.223 9.197 L 18.375 9.187 L 19.687 9.187 C 20.382 9.188 20.956 9.73 20.996 10.423 C 21.037 11.116 20.531 11.721 19.841 11.803 L 19.687 11.812 L 19.32 11.812 L 16.996 18.79 C 16.615 19.932 15.054 19.984 14.567 18.946 L 14.504 18.79 L 10.5 6.774 L 7.808 14.852 C 7.438 15.96 5.943 16.053 5.413 15.073 L 5.344 14.924 L 3.885 11.282 L 3.793 11.396 C 3.582 11.623 3.297 11.767 2.99 11.803 L 2.835 11.812 L 1.312 11.812 C 0.618 11.812 0.044 11.27 0.004 10.577 C -0.037 9.884 0.469 9.279 1.159 9.197 L 1.312 9.187 L 1.962 9.187 L 2.727 7.367 C 3.16 6.335 4.577 6.299 5.086 7.24 L 5.155 7.388 L 6.45 10.623 Z"
                fill="rgb(255, 255, 255)"
              ></path>
            </svg>
          </div>
          Course Progression
        </div>
        <div className={styles.progress}>{cumulativeProgress.toFixed(2)}%</div>
      </div>
      <div className={styles.progressContainer}>
        {progressData.map((data, index) => (
          <ProgressItem key={index} progress={0} unit={data.unit} />
        ))}
      </div>
      <div className={styles.recentActivityContainer}>
        <div className={styles.RA_Header}>Recent Activity</div>
        {/* I put the empty style on here. Kevin implement a function that checks if there arent anythign to display, and if so that gets put; 
        Hint: ${(function that returns boolean whether or not there is one) ? styles.empty : {} }*/}
        <div className={`${styles.recentActivityWrapper} ${styles.empty}`}>
          {/* {activityData.map((data, index) => (
            <ActivityPreviewItem
              key={index}
              unit={data.unit}
              title={data.type}
              dateCompleted={data.dateLastCompleted}
              svgPath={data.altSVGPath}
              attempts={data.attemps}
              score={data.score}
              linkTo={data.linkTo}
            />
          ))} */}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <RoutingButton
          style={"blue"}
          text={"Go to Progress"}
          ftSize={1.1}
          additonalStyles={{}}
          url={"education/units/1"}
        />
        <RoutingButton
          style={"gray"}
          text={"Go to Unit"}
          ftSize={1.1}
          additonalStyles={{}}
          url={"/education/units/1"}
        />
      </div>
    </div>
  );
}
