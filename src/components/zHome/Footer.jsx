import React from "react";
import "./footer.css";
import "./footerRes.css";
// import faction from "../media/info";
import git from "./media/git.svg";
import linkedIn from "./media/linkedIn.svg";
import rSix from "./media/r6.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const Name = useSelector((state) => state.rainbow.name);
  const fDisc = useSelector((state) => state.rainbow.fDisc);
  const bgCoolor = useSelector((state) => state.rainbow.opsBg);
  return (
    <div>
      <div className="blur">
        <div className={bgCoolor} id="rh">
          {Name.toUpperCase()}
        </div>
        <p>{fDisc}</p>
        <div className="line"></div>
        <div className="footerLinks">
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
