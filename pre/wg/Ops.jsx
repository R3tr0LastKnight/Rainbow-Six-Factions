import React from "react";
import "./ops.css";
import faction from "../media/info";
import Entry from "./Entry";

function createOp(piece) {
  return <Entry key={piece.id} name={piece.name} src={piece.src} />;
}

const Ops = () => {
  return (
    <div>
      <div className="opsContainer">
        <h1 className="opHead">OPERATORS</h1>
        <div className="ops">{faction.wgInfo.ops.map(createOp)}</div>
      </div>
    </div>
  );
};

export default Ops;
