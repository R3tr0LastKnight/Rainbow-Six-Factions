import React from "react";
import "./nav.css";
import faction from "../media/info";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logoNav">
          <img className="navImg" src={faction.wgInfo.logo} alt="" />
        </h1>
        <ul className="factionsNav">
          <li>RedHammer</li>
          <li>NightHaven</li>
          <li>GhostEyes</li>
          <li>ViperStrike</li>
          <li>WolfGuard</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
