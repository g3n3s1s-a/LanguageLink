import "../user.css";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Feed1 from "../../../components/feed/Feed1";
import Rightbar from "../../../components/rightbar/Rightbar";
import { Users } from "../../../dummyData";
import { Posts } from "../../../dummyData";
{/* <img className="sidebarFriendImg" src={Users[3].profilePicture} alt="" />
<span className="sidebarFriendName">{user.username}</span> */}
export default function Profile() {
    const userid = 1;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={Users[userid].profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{Users[userid].username}</h4>
              <span
                className="postText customPostText centered-text"
                dangerouslySetInnerHTML={{ __html: Posts[userid]?.desc }}
            ></span>
            </div>
          </div>
          <div className="profileRightBottom">
            
          </div>
        </div>
      </div>
    </>
  );
}
