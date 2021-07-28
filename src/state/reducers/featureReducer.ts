import { Feature } from "../../models";
import { FeaturesStatus, FormName } from "../util";
import {
  FeaturesIdle,
  FeaturesLoading,
  FeaturesLoaded,
  FeaturesError,
  SetPaginationIndex,
  SetPaginationPage,
} from "../actions/index";
import { FeaturesActionType } from "../action-types/action_types";

export interface FeaturesState {
  status: FeaturesStatus;
  error: {
    form: FormName;
    msg: string;
  };
  features: Feature[];
  pagination: {
    pageIndex: number;
    currentPage: number;
  };
}

export const initialFeaturesState: FeaturesState = {
  status: FeaturesStatus.IDLE,
  error: {
    form: FormName.CIRCULAR,
    msg: "",
  },
  features: [],
  pagination: {
    pageIndex: 0,
    currentPage: 1,
  },
};

const featureReducer = (
  state: FeaturesState = initialFeaturesState,
  action:
    | FeaturesIdle
    | FeaturesLoading
    | FeaturesLoaded
    | FeaturesError
    | SetPaginationIndex
    | SetPaginationPage
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
    case FeaturesActionType.SET_PAGINATION_INDEX:
      return {
        ...state,
        pagination: { ...state.pagination, pageIndex: action.payload },
      };
    case FeaturesActionType.SET_PAGINATION_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload },
      };
    default:
      return state;
  }
};

export default featureReducer;
