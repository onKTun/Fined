import React from "react";

interface ProgressionCircleProps {
  totalActivities: number;
  completedActivities: number;
}

const ProgressionCircle = ({
  totalActivities,
  completedActivities,
}: ProgressionCircleProps) => {
  const strokeWidth = 15; // Adjusted stroke width for smaller size
  const radius = 50; // Radius to fit the size
  const circumference = 2 * Math.PI * radius;

  const totalSegments = totalActivities;
  const completedSegments = completedActivities;
  const inProgressSegments =
    completedActivities !== 0 && completedActivities !== totalSegments ? 1 : 0;
  const notStartedSegments =
    totalSegments - completedSegments - inProgressSegments;

  const segmentAngle = 360 / totalSegments;

  return (
    <svg width="15" height="15" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="#e6e6e6" // Background color
        strokeWidth={strokeWidth}
      />

      {/* Completed segment */}
      {Array.from({ length: completedSegments }).map((_, index) => (
        <circle
          key={index}
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#0ecf00" // Green for completed
          strokeWidth={strokeWidth}
          strokeDasharray={`${segmentAngle} ${360 - segmentAngle}`}
          strokeDashoffset={index * segmentAngle - 90} // Offset to start at 270°
          transform="rotate(0 60 60)" // Rotate to start drawing from 270°
        />
      ))}

      {/* In-progress segment */}
      {Array.from({ length: inProgressSegments }).map((_, index) => (
        <circle
          key={completedSegments + index}
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ff9800" // Orange for in-progress
          strokeWidth={strokeWidth}
          strokeDasharray={`${segmentAngle} ${360 - segmentAngle}`}
          strokeDashoffset={(completedSegments + index) * segmentAngle - 90}
          transform="rotate(0 60 60)"
        />
      ))}

      {/* Not Started segment */}
      {Array.from({ length: notStartedSegments }).map((_, index) => (
        <circle
          key={completedSegments + inProgressSegments + index}
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#D8D8D8" // Red for not started
          strokeWidth={strokeWidth}
          strokeDasharray={`${segmentAngle} ${360 - segmentAngle}`}
          strokeDashoffset={
            (completedSegments + inProgressSegments + index) * segmentAngle - 90
          }
          transform="rotate(0 60 60)"
        />
      ))}
    </svg>
  );
};

export default ProgressionCircle;
