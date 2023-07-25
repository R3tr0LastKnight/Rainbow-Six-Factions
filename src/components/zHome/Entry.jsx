import React from "react";
import "./entry.css";

// import { useSelector } from "react-redux";

const Entry = (props) => {
  return (
    <div>
      <div className="op">
        <a
          href={`https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/operators/${props.name}`}
          target="blank"
        >
          <div className="opImgBox">
            <img className="opImg" src={props.src} alt="" />
          </div>
          <h2 className="opName">{props.name.toUpperCase()}</h2>
        </a>
      </div>
    </div>
  );
};

export default Entry;
