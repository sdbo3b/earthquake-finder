import React from "react";
import Title from "./Title";
import Info from "./Info";
import { useSelector } from "react-redux";
import { State } from "../../state";

const CenterContent: React.FC = () => {
  const state = useSelector((state: State) => state.features);

  return (
    <div className="center-content-container">
      {/* <div className="center-content-title"><Title /></div> */}
      <div className="center-content-body">
        <Info />
      </div>
    </div>
  );
};

export default CenterContent;
