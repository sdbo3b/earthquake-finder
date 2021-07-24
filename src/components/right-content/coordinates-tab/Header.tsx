import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const Header = () => {
  const dispatch = useDispatch();
  const { setShapeCircular, setShapeRectangular } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.shape);
  const shape = state.areaShape;

  return (
    <React.Fragment>
      <button
        onClick={() => setShapeCircular("shape_circular")}
        className={
          shape === "shape_circular"
            ? "right-content-header-button-left-selected"
            : "right-content-header-button-left"
        }
      >
        Circular
      </button>
      <button
        onClick={() => setShapeRectangular("shape_rectangular")}
        className={
          shape === "shape_rectangular"
            ? "right-content-header-button-right-selected"
            : "right-content-header-button-right"
        }
      >
        Rectangular
      </button>
    </React.Fragment>
  );
};

export default Header;
