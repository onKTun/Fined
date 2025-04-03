import ContainerHeader from "src/app/new/components/containerheader/ContainerHeader";
import styles from "./activitycontainer.module.css";
import ActivityPreviewItem from "./components/activitypreviewitem/ActivityPreviewItem";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";

export default function ActivityContainer() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ContainerHeader
          text={"Activites"}
          svg={<BookSVG color={"white"} width={15} height={16} />}
        />
      </div>
      <ActivityPreviewItem
        svg={<BookSVG color={"white"} width={16} height={16} />}
        text={"Crossword Puzzle"}
        complete={true}
        activityUrl={""}
        duration={5}
      />
      <ActivityPreviewItem
        svg={<BookSVG color={"white"} width={16} height={16} />}
        text={"Crossword Puzzle"}
        complete={false}
        activityUrl={""}
        duration={3}
      />
    </section>
  );
}
