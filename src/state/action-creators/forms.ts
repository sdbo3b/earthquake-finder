import { FormsActionType } from "../action-types/action_types";
import { AppDispatch } from "../store";

export const incrementFormsIndex = (): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.INCREMENT_FORM_INDEX,
    });
};

export const decrementFormsIndex = (): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.DECREMENT_FORM_INDEX,
    });
};

export const setCircularFormLatitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_CIRCULAR_FORM_LATITUDE,
      payload,
    });
};

export const setCircularFormLongitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_CIRCULAR_FORM_LONGITUDE,
      payload,
    });
};

export const setCircularFormRadius = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_CIRCULAR_FORM_RADIUS,
      payload,
    });
};
