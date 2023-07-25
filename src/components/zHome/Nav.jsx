import React from "react";
import "./nav.css";
import "./navRes.css";
// import faction from "../media/info";
import { useSelector, useDispatch } from "react-redux";
import {
  ghostEyes,
  nightHaven,
  redHammer,
  viperStrike,
  wolfGuard,
} from "../../redux/counterSlice";
// import { hover } from "@testing-library/user-event/dist/hover";

const Nav = () => {
  const dispatch = useDispatch();
  const chitra = useSelector((state) => state.rainbow.logo);
  const bgCoolor = useSelector((state) => state.rainbow.opsBg);

  return (
    <div>
      <nav className="navbar">
        <h1 className="logoNav">
          <img className="navImg" id={bgCoolor} src={chitra} alt="" />
        </h1>
        <ul className="factionsNav">
          <li className={bgCoolor} onClick={() => dispatch(ghostEyes())}>
            GhostEyes
          </li>
          <li className={bgCoolor} onClick={() => dispatch(nightHaven())}>
            NightHaven
          </li>
          <li className={bgCoolor} onClick={() => dispatch(redHammer())}>
            RedHammer
          </li>
          <li className={bgCoolor} onClick={() => dispatch(viperStrike())}>
            ViperStrike
          </li>
          <li
            id="center-item"
            className={bgCoolor}
            onClick={() => dispatch(wolfGuard())}
          >
            WolfGuard
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
