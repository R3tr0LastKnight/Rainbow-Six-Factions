import React from "react";
import "./footer.css";
import faction from "../media/info";
import git from "./media/git.svg";
import linkedIn from "./media/linkedIn.svg";
import rSix from "./media/r6.png";

const Footer = () => {
  return (
    <div>
      <div class="blur">
        <div class="rh">{faction.wgInfo.name.toUpperCase()}</div>
        <p>{faction.wgInfo.footerDisc}</p>
        <div class="line"></div>
        <div class="footerLinks">
          <a href="https://www.linkedin.com/in/shubh-shahu/" target="blank">
            <img src={linkedIn} alt="" />
          </a>
          <a href="https://github.com/R3tr0LastKnight" target="blank">
            <img src={git} alt="" />
          </a>
          <a
            href="https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
            target="blank"
          >
            <img src={rSix} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
