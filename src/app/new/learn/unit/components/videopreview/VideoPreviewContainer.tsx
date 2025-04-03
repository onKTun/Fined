import styles from "./videopreview.module.css";
import Button from "src/app/new/components/buttonNew/Button";
import PlaySVG from "src/app/new/svg/video/PlaySVG";
import NewSVG from "src/app/new/svg/corecomponents/NewSVG";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";
import PDFSVG from "src/app/new/svg/corecomponents/PDFSVG";
import ContainerHeader from "src/app/new/components/containerheader/ContainerHeader";

export default function VideoPreviewContainer() {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.topContainer}>
        <ContainerHeader
          text={"Video Lesson"}
          svg={<BookSVG color={"white"} width={15} height={15} />}
        />
        <div className={styles.videoPreview} />
        <div className={styles.videoContainer_detailWrapper}>
          <label className={styles.videoContainer_date}>
            <NewSVG />
            December 17, 2024
          </label>
          <label className={styles.videoContiner_title}>
            The Importance of Saving
          </label>
        </div>

        <label className={styles.videoContiner_subtitle}>
          <div className={styles.svgBlock}>
            <BookSVG color={"rgba(255,255,255)"} width={10} height={10} />
          </div>
          Description
        </label>
        <div className={styles.descriptionContainer}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vel
          inventore hic quae esse est itaque recusandae iste similique rem?
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button text={"Watch"} styleType={"blue"} svg={<PlaySVG />} />
        <Button text={"Read"} styleType={"regular"} svg={<PDFSVG />} />
      </div>
    </div>
  );
}
