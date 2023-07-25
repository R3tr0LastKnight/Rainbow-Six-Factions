import React from "react";
import "./ops.css";
import "./opsRes.css";
// import faction from "../media/info";
import Entry from "./Entry";
import { useSelector } from "react-redux";

function createOp(piece) {
  return <Entry key={piece.id} name={piece.name} src={piece.src} />;
}

const Ops = () => {
  const Soilders = useSelector((state) => state.rainbow.ops);
  const bgCoolor = useSelector((state) => state.rainbow.opsBgIcons);

  return (
    <div>
      <div
        className="opsContainer"
        style={{
          backgroundColor: bgCoolor,
          boxShadow: "20px 00px 10px" + bgCoolor,
        }}
      >
        <h1 className="opHead">OPERATORS</h1>
        <div className="ops">{Soilders.map(createOp)}</div>
      </div>
    </div>
  );
};

export default Ops;
