import { ActionType } from "../action-types/action_types";
import { SetShapeCircular, SetShapeRectangular } from "../actions/index";

type AreaShape = "shape_circular" | "shape_rectangular";

export interface ShapeState {
  areaShape: AreaShape;
}

export const initialShapeState: ShapeState = {
  areaShape: "shape_circular",
};

const shapeReducer = (
  state: ShapeState = initialShapeState,
  action: SetShapeCircular | SetShapeRectangular
) => {
  switch (action.type) {
    case ActionType.SET_SHAPE_CIRCULAR:
      return { ...state, areaShape: action.payload };
    case ActionType.SET_SHAPE_RECTANGULAR:
      return { ...state, areaShape: action.payload };
    default:
      return state;
  }
};

export default shapeReducer;
