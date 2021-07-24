import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import CircularForm from "./CircluarForm";
import Header from "./Header";
import RectangularForm from "./RectangularForm";

const CoordinatesTab: React.FC = () => {
  const state = useSelector((state: State) => state.shape);

  return (
    <React.Fragment>
      <div className="right-content-header">
        <Header />
      </div>
      <div className="right-content-body">
        {state.areaShape === "shape_circular" ? (
          <CircularForm />
        ) : (
          <RectangularForm />
        )}
      </div>
      <div className="right-content-footer"></div>
    </React.Fragment>
  );
};

export default CoordinatesTab;
