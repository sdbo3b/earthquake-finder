import { combineReducers } from "redux";
import shapeReducer from "./shapeReducer";
import featureReducer from "./featureReducer";
import tabReducer from "./tabReducer";

export * from "./featureReducer";
export * from "./tabReducer";
export * from "./shapeReducer";

const reducers = combineReducers({
  shape: shapeReducer,
  features: featureReducer,
  tab: tabReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
