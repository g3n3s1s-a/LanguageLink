import Post from "../post/Post2";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const filteredPosts = Posts.filter((post) => [5, 7, 8, 10].includes(post.id));

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {filteredPosts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
