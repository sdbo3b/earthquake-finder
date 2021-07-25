import { Dispatch } from "redux";
import { Feature } from "../../models/index";
import { FeaturesActionType } from "../action-types/action_types";
import {
  FeaturesError,
  FeaturesIdle,
  FeaturesLoaded,
  FeaturesLoading,
  SetPaginationIndex,
  SetPaginationPage,
} from "../actions/index";
import { FeaturesStatus } from "../util";

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

export const setFeaturesError = (): any => {
  return (dispatch: Dispatch<FeaturesError>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_ERROR,
      status: FeaturesStatus.ERROR,
    });
  };
};

export const setPaginationIndex = (payload: number): any => {
  return (dispatch: Dispatch<SetPaginationIndex>) => {
    dispatch({
      type: FeaturesActionType.SET_PAGINATION_INDEX,
      payload,
    });
  };
};

export const setPaginationPage = (payload: number): any => {
  return (dispatch: Dispatch<SetPaginationPage>) => {
    dispatch({
      type: FeaturesActionType.SET_PAGINATION_PAGE,
      payload,
    });
  };
};
