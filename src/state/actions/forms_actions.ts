import { FormsActionType } from "../action-types/action_types";

export interface IncrementFormsIndex {
  type: FormsActionType.INCREMENT_FORM_INDEX;
}

export interface DecrementFormsIndex {
  type: FormsActionType.DECREMENT_FORM_INDEX;
}

export interface SetCircularFormLatitude {
  type: FormsActionType.SET_CIRCULAR_FORM_LATITUDE;
  payload: string;
}

export interface SetCircularFormLongitude {
  type: FormsActionType.SET_CIRCULAR_FORM_LONGITUDE;
  payload: string;
}

export interface SetCircularFormRadius {
  type: FormsActionType.SET_CIRCULAR_FORM_RADIUS;
  payload: string;
}

export interface SetRectangularFormMinLatitude {
  type: FormsActionType.SET_RECTANGULAR_FORM_MIN_LATITUDE;
  payload: string;
}

export interface SetRectangularFormMaxLatitude {
  type: FormsActionType.SET_RECTANGULAR_FORM_MAX_LATITUDE;
  payload: string;
}

export interface SetRectangularFormMinLongitude {
  type: FormsActionType.SET_RECTANGULAR_FORM_MIN_LONGITUDE;
  payload: string;
}

export interface SetRectangularFormMaxLongitude {
  type: FormsActionType.SET_RECTANGULAR_FORM_MAX_LONGITUDE;
  payload: string;
}
