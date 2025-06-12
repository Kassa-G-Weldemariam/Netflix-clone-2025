import React from 'react'
import './header.css'
import netflix_logo from '../../assets/images/Netflix_logo_RGB.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflix_logo} alt="netflix logo" width="100" />
            </li>
            <li className="header_item">Home</li>
            <li className="header_item">TV Shows</li>
            <li className="header_item">Movies</li>
            <li className="header_item">Latest</li>
            <li className="header_item">My List</li>
            <li className="header_item">Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header