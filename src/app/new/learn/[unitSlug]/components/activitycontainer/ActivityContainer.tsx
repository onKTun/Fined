import ContainerHeader from "src/app/new/components/containerheader/ContainerHeader";
import styles from "./activitycontainer.module.css";
import ActivityPreviewItem from "./components/activitypreviewitem/ActivityPreviewItem";
import BookSVG from "src/app/new/svg/corecomponents/BookSVG";

interface ActivityItem {
  activityName: string;
  description: string;
  href: string;
}
interface ActivityProps {
  data: ActivityItem[];
}

export default function ActivityContainer({ data }: ActivityProps) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ContainerHeader
          text={"Activites"}
          svg={<BookSVG color={"white"} width={15} height={16} />}
        />
      </div>
      {data.map((activity, index) => (
        <ActivityPreviewItem
          svg={<BookSVG color={"white"} width={16} height={16} />}
          text={activity.activityName}
          complete={true}
          activityUrl={activity.href}
          duration={5}
        />
      ))}
    </section>
  );
}
