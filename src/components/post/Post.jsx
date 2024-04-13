import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <img className="postImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
          <span className="postText" dangerouslySetInnerHTML={{ __html: post?.desc }}></span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
