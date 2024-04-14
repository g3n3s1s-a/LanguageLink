import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [friendRequestSent, setFriendRequestSent] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const sendFriendRequest = () => {
    // Logic to send friend request
    const user = Users.find((user) => user.id === post.userId);
  alert(`Friend request sent to ${user.username}`);
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
            className="postText customPostText centered-text"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          ></span>
        </div>
        
      </div>
    </div>
  );
}
