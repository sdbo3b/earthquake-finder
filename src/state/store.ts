import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from ".";
import reducers from "./reducers";
import {
  initialShapeState,
  initialFeaturesState,
  initialTabState,
} from "./reducers/index";

const initialState: State = {
  shape: initialShapeState,
  features: initialFeaturesState,
  tab: initialTabState,
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, composedEnhancer);
