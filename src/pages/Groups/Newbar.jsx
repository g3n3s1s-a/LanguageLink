import "../../components/rightbar/rightbar.css"
import { Users } from "../../dummyData";
import Online from "../../components/online/Online";

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Language:</span>
          <span className="rightbarInfoValue">Spanish</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Carla Smith</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/2.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/3.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Vivian Nguyen</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/4.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Niele Ivey</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/5.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Dora Hawks</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/6.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Joseph Ahmad</span>
        </div>
      </div>
    </>
  );
};

export default ProfileRightbar;
