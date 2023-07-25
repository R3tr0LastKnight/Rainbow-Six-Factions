import React from "react";
import "./disc.css";
import faction from "../media/info";

const Disc = () => {
  return (
    <div className="squadInfo">
      <div className="leader">
        <p>{faction.wgInfo.disc}</p>
        <p class="leaderName">-{faction.wgInfo.leader}</p>
      </div>
      <div className="squadImg">
        <img className="centerImg" src={faction.wgInfo.sqImg} alt="" />
      </div>
    </div>
  );
};

export default Disc;
