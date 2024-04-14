import Group from "../../components/post/Post1";
import Share1 from "../../components/share/Share1";
import "./groups.css";
import { Groups } from "../../dummyData";

export default function GroupFeed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share1 />
        {Groups.map((group) => (
          <Group key={group.id} data={group} />
        ))}
      </div>
    </div>
  );
}