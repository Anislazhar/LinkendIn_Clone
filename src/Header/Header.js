import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HederOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Header() {
  return (
    <div className="header">

      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HederOption Icon={HomeIcon} title="Home" />
        <HederOption Icon={SupervisedUserCircleIcon} title="My Network" />
      </div>
    </div>
  );
}

export default Header;
