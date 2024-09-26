//import Button from "src/components/button/Button";
import styles from "./upcomingassignmentparent.module.css";
import RoutingButton from "src/components/routingbutton/RoutingButton";
import assignmentData from "src/data/video.json";
import UAItem from "./components/uaitem/UAItem";

export default function UpcomingAssignmentParent() {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                d="M 3.25 9.75 L 22.75 9.75 M 13 13 L 13 16.25 M 13 19.5 L 13.011 19.5 M 7.583 3.25 L 7.583 5.417 M 18.417 3.25 L 18.417 5.417 M 6.717 22.75 L 19.283 22.75 C 20.497 22.75 21.103 22.75 21.567 22.514 C 21.975 22.306 22.306 21.975 22.514 21.567 C 22.75 21.103 22.75 20.497 22.75 19.283 L 22.75 8.883 C 22.75 7.67 22.75 7.063 22.514 6.6 C 22.306 6.192 21.975 5.861 21.567 5.653 C 21.103 5.417 20.497 5.417 19.283 5.417 L 6.717 5.417 C 5.503 5.417 4.897 5.417 4.433 5.653 C 4.025 5.861 3.694 6.192 3.486 6.6 C 3.25 7.063 3.25 7.67 3.25 8.883 L 3.25 19.283 C 3.25 20.497 3.25 21.103 3.486 21.567 C 3.694 21.975 4.025 22.306 4.433 22.514 C 4.897 22.75 5.503 22.75 6.717 22.75 Z"
                fill="transparent"
                strokeWidth="2.36"
                stroke="rgb(255, 255, 255)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          Upcoming Assignments
        </div>
      </div>
      <div className={styles.activityItemWrapper}>
        {assignmentData.map((data, index) => (
          <UAItem
            key={index}
            svgPath={data.altSVGPath}
            title={data.type}
            unit={data.unit}
          />
        ))}
      </div>
      <RoutingButton
        style={"gray"}
        text={"View All"}
        ftSize={1.1}
        additonalStyles={{}}
        url={"/education/units/1"}
      />
    </div>
  );
}
