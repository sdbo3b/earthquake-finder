import { Dispatch } from "redux";
import { ActionType } from "../action-types/action_types";
import { SetShapeCircular, SetShapeRectangular } from "../actions/index";

export const setShapeCircular = (payload: "shape_circular") => {
  return (dispatch: Dispatch<SetShapeCircular>) => {
    dispatch({
      type: ActionType.SET_SHAPE_CIRCULAR,
      payload,
    });
  };
};

export const setShapeRectangular = (payload: "shape_rectangular") => {
  return (dispatch: Dispatch<SetShapeRectangular>) => {
    dispatch({
      type: ActionType.SET_SHAPE_RECTANGULAR,
      payload,
    });
  };
};
