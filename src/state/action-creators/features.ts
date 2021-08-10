import { Dispatch } from "redux";
import { Feature } from "../../models/index";
import { FeaturesActionType } from "../action-types/action_types";
import {
  FeaturesError,
  FeaturesIdle,
  FeaturesLoaded,
  FeaturesLoading,

} from "../actions/index";
import { FeaturesStatus, FormName } from "../util";

export const setFeaturesIdle = (): any => {
  return (dispatch: Dispatch<FeaturesIdle>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_IDLE,
      status: FeaturesStatus.IDLE,
    });
  };
};

export const setFeaturesLoading = (): any => {
  return (dispatch: Dispatch<FeaturesLoading>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_LOADING,
      status: FeaturesStatus.LOADING,
    });
  };
};

export const setFeaturesLoaded = (payload: Feature[]): any => {
  return (dispatch: Dispatch<FeaturesLoaded>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_LOADED,
      status: FeaturesStatus.LOADED,
      payload: [...payload],
    });
  };
};

export const setFeaturesError = (payload: {
  form: FormName;
  msg: string;
}): any => {
  return (dispatch: Dispatch<FeaturesError>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_ERROR,
      status: FeaturesStatus.ERROR,
      payload,
    });
  };
};

