import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./aboutus.css";

export default function Aboutus() {
  return (
    <>
      <Topbar />
      <div className="aboutus">
        <Sidebar />
        <div className="aboutusRight">
          <div className="aboutusRightTop">
            <div className="aboutusCover">
              <img
                className="aboutusCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="aboutusUserImg"
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="aboutusInfo">
              <h4 className="aboutusInfoName">Carla Smith</h4>
              <span className="aboutusInfoDesc">
                Hello my friends I want to learn Danish!
              </span>
            </div>
          </div>
          <div className="aboutusRightBottom">
            <Rightbar aboutus />
          </div>
        </div>
      </div>
    </>
  );
}
