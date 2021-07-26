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

export const setRectangularFormMinLatitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_RECTANGULAR_FORM_MIN_LATITUDE,
      payload,
    });
};

export const setRectangularFormMaxLatitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_RECTANGULAR_FORM_MAX_LATITUDE,
      payload,
    });
};

export const setRectangularFormMinLongitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_RECTANGULAR_FORM_MIN_LONGITUDE,
      payload,
    });
};

export const setRectangularFormMaxLongitude = (payload: string): any => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: FormsActionType.SET_RECTANGULAR_FORM_MAX_LONGITUDE,
      payload,
    });
};
