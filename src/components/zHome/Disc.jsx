import React from "react";
import "./disc.css";
import "./discRes.css";
// import faction from "../media/info";
import { useSelector } from "react-redux";

const Disc = () => {
  const para = useSelector((state) => state.rainbow.speech);
  const king = useSelector((state) => state.rainbow.leader);
  const squad = useSelector((state) => state.rainbow.squad);
  return (
    <div className="squadInfo">
      <div className="leader">
        <p className="leaderPara">{para}</p>
        <p className="leaderName">-{king}</p>
      </div>
      <div className="squadImg">
        <img className="centerImg" src={squad} alt="" />
      </div>
    </div>
  );
};

export default Disc;
