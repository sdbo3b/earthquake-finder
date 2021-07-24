import { ActionType } from "../action-types/action_types";

export interface SetShapeCircular {
  type: ActionType.SET_SHAPE_CIRCULAR;
  payload: "shape_circular";
}

export interface SetShapeRectangular {
  type: ActionType.SET_SHAPE_RECTANGULAR;
  payload: "shape_rectangular";
}
