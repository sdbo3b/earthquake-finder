import { Feature } from "../../models";
import { FeaturesStatus, FormName } from "../util";
import {
  FeaturesIdle,
  FeaturesLoading,
  FeaturesLoaded,
  FeaturesError,

} from "../actions/index";
import { FeaturesActionType } from "../action-types/action_types";

export interface FeaturesState {
  status: FeaturesStatus;
  error: {
    form: FormName;
    msg: string;
  };
  features: Feature[];

}

export const initialFeaturesState: FeaturesState = {
  status: FeaturesStatus.IDLE,
  error: {
    form: FormName.CIRCULAR,
    msg: "",
  },
  features: [],

};

const featureReducer = (
  state: FeaturesState = initialFeaturesState,
  action:
    | FeaturesIdle
    | FeaturesLoading
    | FeaturesLoaded
    | FeaturesError
): FeaturesState => {
  switch (action.type) {
    case FeaturesActionType.FEATURES_IDLE:
      return { ...state, status: FeaturesStatus.IDLE };
    case FeaturesActionType.FEATURES_LOADING:
      return { ...state, status: FeaturesStatus.LOADING };
    case FeaturesActionType.FEATURES_LOADED:
      return {
        ...state,
        status: FeaturesStatus.LOADED,
        features: action.payload,
      };
    case FeaturesActionType.FEATURES_ERROR:
      return {
        ...state,
        status: FeaturesStatus.ERROR,
        error: {
          ...state.error,
          form: action.payload.form,
          msg: action.payload.msg,
        },
      };

    default:
      return state;
  }
};

export default featureReducer;
