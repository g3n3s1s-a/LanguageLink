import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed1 from "../../components/feed/Feed2";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile() {
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
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Carla Smith</h4>
              <span className="profileInfoDesc">
                Hello my friends I want to learn Danish!
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed1 />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
