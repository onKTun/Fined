import { useVideoContext } from "../../../../hooks/VideoContext";
import activityData from "src/data/videoactivity.json";
import FRQObject from "./components/frq/FRQObject";
import MCQObject from "./components/mcq/MCQObject";

interface Props {
  onClick: () => void;
}

export default function VideoActivity({ onClick }: Props) {
  const { currentActivity } = useVideoContext();

  if (activityData[currentActivity].type["activity"] === "mcq")
    return <MCQObject data={activityData[currentActivity]} onClick={onClick} />;

  if (activityData[currentActivity].type["activity"] === "frq")
    return <FRQObject data={activityData[currentActivity]} onClick={onClick} />;
}
