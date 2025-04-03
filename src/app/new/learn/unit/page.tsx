import ActivityContainer from "./components/activitycontainer/ActivityContainer";
import VideoPreviewContainer from "./components/videopreview/VideoPreviewContainer";
import styles from "./unit.module.css";

export default function Unit() {
  return (
    <div className={styles.content}>
      <VideoPreviewContainer />
      <ActivityContainer />
    </div>
  );
}
