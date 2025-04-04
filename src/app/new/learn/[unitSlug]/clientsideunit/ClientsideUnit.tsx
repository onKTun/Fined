"use client";
import { useEffect, useState } from "react";
import styles from "./clientside.module.css";
import LessonToggleContainer from "../components/lessontogglecontainer/LessonToggleContainer";
import VideoPreviewContainer from "../components/videopreview/VideoPreviewContainer";
import ActivityContainer from "../components/activitycontainer/ActivityContainer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ClientsideUnitProps {
  lessonPageData: LessonPage[];
}

export default function Unit({ lessonPageData }: ClientsideUnitProps) {
  const [currentLesson, setCurrentLesson] = useState<LessonPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLessons, setLoadedLessons] = useState<Set<number>>(new Set()); // Track loaded lessons

  useEffect(() => {
    // Load the first lesson initially
    const timer = setTimeout(() => {
      setCurrentLesson(lessonPageData[0]);
      setLoadedLessons(new Set([lessonPageData[0].lessonId])); // Mark as loaded
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [lessonPageData]);

  const getLessonById = (id: number) => {
    if (currentLesson?.lessonId !== id) {
      // Update the lesson immediately so the toggle reflects the change
      setCurrentLesson((prev) => {
        const newLesson = lessonPageData.find(
          (lesson) => lesson.lessonId === id
        );
        return newLesson || prev;
      });

      // Only trigger loading if the lesson hasn't been loaded before
      if (!loadedLessons.has(id)) {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentLesson(
            lessonPageData.find((lesson) => lesson.lessonId === id) ||
              lessonPageData[0]
          );
          setLoadedLessons((prev) => new Set(prev).add(id)); // Mark as loaded
          setIsLoading(false);
        }, 500);
      }
    }
  };

  return (
    <SkeletonTheme baseColor="#DBDBDB" highlightColor="#E8E8E8">
      <div className={styles.content}>
        <LessonToggleContainer
          onLessonChange={getLessonById}
          selectedLesson={currentLesson?.lessonId || 1} // Updates immediately
        />
        <div className={styles.middleContent}>
          {isLoading ? (
            <>
              <Skeleton height={470} width={368} />
              <Skeleton
                height={64}
                width={480}
                count={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "5px",
                }}
              />
            </>
          ) : (
            <>
              <VideoPreviewContainer
                date={currentLesson?.releaseDate || ""}
                title={currentLesson?.videoName || ""}
                description={currentLesson?.videoDescription || ""}
                duration={currentLesson?.videoLength || 0}
                backgroundURL={currentLesson?.videoThumbnailURL || ""}
                videoID={currentLesson?.lessonId || 1}
                unit={currentLesson?.unitId || 1}
              />
              <ActivityContainer />
            </>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
}
