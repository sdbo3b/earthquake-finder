import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from ".";
import reducers from "./reducers";
import { initialFeaturesState, initialFormsState } from "./reducers/index";

const initialState: State = {
  formsState: initialFormsState,
  featureState: initialFeaturesState,
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, composedEnhancer);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
