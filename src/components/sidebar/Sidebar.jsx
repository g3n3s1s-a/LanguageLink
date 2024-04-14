import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="sidebarLink" to="/home">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Connect</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
          <Link className="sidebarLink2" to="/aboutus">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">About Us</span>
          </Link>
          </li>
        </ul>
        <NavLink exact="true" activeclassname="active" to="/">
          <button className="sidebarButton">Logout</button>
        </NavLink>
        <hr className="sidebarHr" />
        <h className="friendstext">Friends</h>
        <p></p>
        <ul className="sidebarFriendList">
          
          {Users.map((u) => (
            <li key={u.id} className="sidebarListItem">
            <Link className="sidebarLink3" to={`/user${u.id}`}>
              <CloseFriend user={u} />
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
