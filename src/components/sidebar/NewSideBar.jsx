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
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NewSidebar() {
  const navigate = useNavigate();
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
          <NavLink exact={true} activeClassName="active" to='/groups'>
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </NavLink>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <NavLink exact={true} activeClassName="active" to='/'>
          <button className="sidebarButton">Logout</button>
        </NavLink>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
