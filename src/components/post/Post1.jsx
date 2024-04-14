import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
import { Groups } from "../../dummyData";

export default function Group({ data }) {
  const [joinRequestSent, setJoinRequestSent] = useState(false);

  const handleJoinRequest = () => {
    if (!joinRequestSent) {
      alert(`Join request sent to ${data.groupName}`);
      setJoinRequestSent(true);
    }
  };

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <img src={data.profilePicture} alt="" className="postImg" />
          <p
            style={{
              fontStyle: joinRequestSent ? 'italic' : 'normal',
              color: joinRequestSent ? 'green' : 'inherit',
            }}
          >
            {data.groupName}
          </p>
          <button
            className={`joinGroupButton ${joinRequestSent ? 'sent' : ''}`}
            onClick={handleJoinRequest}
            disabled={joinRequestSent}
          >
            {joinRequestSent ? 'Request Sent' : 'Join Group'}
          </button>
        </div>
      </div>
    </>
  );
}