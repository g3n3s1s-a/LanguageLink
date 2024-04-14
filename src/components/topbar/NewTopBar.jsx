import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import logoImage from "./home_logo2.png";
import { NavLink } from 'react-router-dom';

export default function NewTopbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <NavLink exact="true" activeclassname="active" to='/home'>
        <img src={logoImage} alt="Logo" />
      </NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend or group"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <NavLink exact="true" activeclassname="active" to='/profile'>
            <Person className="personIcon" />
            <span className="topbarIconBadge">1</span>
          </NavLink>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <NavLink exact="true" activeclassname="active" to='/profile'>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </NavLink>
      </div>
    </div>
  );
}
