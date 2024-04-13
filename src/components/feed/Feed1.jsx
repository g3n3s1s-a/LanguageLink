import Post1 from "../post/Post1";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const filteredPosts = Posts.filter((post) =>
    [2, 3, 4, 5, 6, 7, 8, 9, 10].includes(post.id)
  );

  return (
    <div className="feed">
      <div className="feedWrapper">
        {filteredPosts.map((p) => (
          <Post1 key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
