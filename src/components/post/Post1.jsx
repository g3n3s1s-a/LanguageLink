import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post1({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [friendRequestSent, setFriendRequestSent] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const sendFriendRequest = () => {
    // Logic to send friend request
    console.log("Friend request sent to user with id:", post.userId);
    setFriendRequestSent(!friendRequestSent); // Update state to indicate friend request is sent
    const button = document.querySelector(".sendFriendRequestButton");
    button.classList.toggle("sent", friendRequestSent);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <img
            className="postImg"
            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            alt=""
          />
          <span
            className="postText customPostText  centered-text"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          ></span>
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
            <span className="postLikeCounter">{like} likes</span>
          </div>
          <div className="postBottomRight">
            {/* <button
              id={`sendFriendRequestButton_${post.id}`}
              className={`sendFriendRequestButton ${
                friendRequestSent ? "sent" : ""
              }`}
              onClick={() => sendFriendRequest(post.id)}
            >
              {friendRequestSent ? "Request Sent" : "Send Friend Request"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
