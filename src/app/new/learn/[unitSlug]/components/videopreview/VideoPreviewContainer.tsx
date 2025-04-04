import styles from "./videopreview.module.css";
import Button from "src/app/new/components/buttonNew/Button";
import PlaySVG from "src/app/new/svg/video/PlaySVG";
import NewSVG from "src/app/new/svg/corecomponents/NewSVG";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";
import PDFSVG from "src/app/new/svg/corecomponents/PDFSVG";
import ContainerHeader from "src/app/new/components/containerheader/ContainerHeader";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RedirectButton from "src/app/new/components/buttonNew/RedirectButton";

interface ContentProps {
  date: string;
  title: string;
  description: string;
  duration: number;
  backgroundURL: string;
  videoID: number;
  unit: number;
}

export default function VideoPreviewContainer({
  date,
  title,
  description,
  duration,
  backgroundURL,
  videoID,
  unit,
}: ContentProps) {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.topContainer}>
        <ContainerHeader
          text={"Video Lesson"}
          svg={<BookSVG color={"white"} width={15} height={15} />}
        />
        <Image
          className={styles.videoPreview}
          src={backgroundURL}
          alt={"video picture"}
          width={500}
          height={500}
        />
        <div className={styles.videoContainer_detailWrapper}>
          <label className={styles.videoContainer_date}>
            <NewSVG />
            {date || <Skeleton />}
          </label>
          <label className={styles.videoContiner_title}>{title}</label>
        </div>

        <label className={styles.videoContiner_subtitle}>
          <div className={styles.svgBlock}>
            <BookSVG color={"rgba(255,255,255)"} width={10} height={10} />
          </div>
          Description
        </label>
        <div className={styles.descriptionContainer}>{description}</div>
      </div>
      <div className={styles.buttonContainer}>
        <RedirectButton
          text={"Watch"}
          styleType={"blue"}
          svg={<PlaySVG />}
          redirectURL={"/new/learn/" + unit + "/" + videoID}
        />
        <RedirectButton
          text={"Read"}
          styleType={"regular"}
          svg={<PDFSVG />}
          redirectURL={""}
        />
      </div>
    </div>
  );
}
