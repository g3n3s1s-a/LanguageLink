import Topbar from "../../components/topbar/Topbar";
import NewTopbar from "../../components/topbar/NewTopBar";
import NewSidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useNavigate } from "react-router-dom";
import GroupFeed from "./GroupFeed";


export default function Groups() {
    
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <GroupFeed />
        <Rightbar />
      </div>
    </>
  );
}