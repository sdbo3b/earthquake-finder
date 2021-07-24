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

export const setFeaturesIdle = () => {
  return (dispatch: Dispatch<FeaturesIdle>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_IDLE,
      status: FeaturesStatus.IDLE,
    });
  };
};

export const setFeaturesLoading = () => {
  return (dispatch: Dispatch<FeaturesLoading>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_LOADING,
      status: FeaturesStatus.LOADING,
    });
  };
};

export const setFeaturesLoaded = (payload: Feature[]) => {
  return (dispatch: Dispatch<FeaturesLoaded>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_LOADED,
      status: FeaturesStatus.LOADED,
      payload: [...payload],
    });
  };
};

export const setFeaturesError = () => {
  return (dispatch: Dispatch<FeaturesError>) => {
    dispatch({
      type: FeaturesActionType.FEATURES_ERROR,
      status: FeaturesStatus.ERROR,
    });
  };
};

export const setPaginationIndex = (payload: number) => {
  return (dispatch: Dispatch<SetPaginationIndex>) => {
    dispatch({
      type: FeaturesActionType.SET_PAGINATION_INDEX,
      payload,
    });
  };
};

export const setPaginationPage = (payload: number) => {
  return (dispatch: Dispatch<SetPaginationPage>) => {
    dispatch({
      type: FeaturesActionType.SET_PAGINATION_PAGE,
      payload,
    });
  };
};
