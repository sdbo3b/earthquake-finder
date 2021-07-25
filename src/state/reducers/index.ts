import { combineReducers } from "redux";
import featureReducer from "./featureReducer";
import formsReducer from "./FormsReducer";

export * from "./featureReducer";
export * from "./FormsReducer";

const reducers = combineReducers({
  formsState: formsReducer,
  features: featureReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
