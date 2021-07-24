import { Feature } from "../../models/index";
import { FeaturesActionType } from "../action-types/action_types";
import { FeaturesStatus } from "../util";

export interface FeaturesIdle {
  type: FeaturesActionType.FEATURES_IDLE;
  status: FeaturesStatus.IDLE;
}

export interface FeaturesLoading {
  type: FeaturesActionType.FEATURES_LOADING;
  status: FeaturesStatus.LOADING;
}

export interface FeaturesLoaded {
  type: FeaturesActionType.FEATURES_LOADED;
  payload: Feature[];
  status: FeaturesStatus.LOADED;
}

export interface FeaturesError {
  type: FeaturesActionType.FEATURES_ERROR;
  status: FeaturesStatus;
}

export interface SetPaginationIndex {
  type: FeaturesActionType.SET_PAGINATION_INDEX;
  payload: number;
}

export interface SetPaginationPage {
  type: FeaturesActionType.SET_PAGINATION_PAGE;
  payload: number;
}
