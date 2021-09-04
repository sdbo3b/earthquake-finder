import { FormsActionType } from "../action-types/action_types";
import {
  DecrementFormsIndex,
  IncrementFormsIndex,
  SetCircularFormError,
  SetCircularFormLatitude,
  SetCircularFormLongitude,
  SetCircularFormRadius,
  SetRectangularFormError,
  SetRectangularFormMaxLatitude,
  SetRectangularFormMaxLongitude,
  SetRectangularFormMinLatitude,
  SetRectangularFormMinLongitude,
} from "../actions/forms_actions";
import { FormName } from "../util";

export interface FormsState {
  formIndex: number;
  forms: FormName[];
  circularForm: {
    latitude: string;
    longitude: string;
    radius: string;
    error: string;
  };
  rectangularForm: {
    minLatitude: string;
    maxLatitude: string;
    minLongitude: string;
    maxLongitude: string;
    error: string;
  };
}

export const initialFormsState: FormsState = {
  formIndex: 0,
  forms: [FormName.CIRCULAR, FormName.RECTANGULAR],
  circularForm: {
    latitude: "",
    longitude: "",
    radius: "",
    error: "",
  },
  rectangularForm: {
    minLatitude: "",
    maxLatitude: "",
    minLongitude: "",
    maxLongitude: "",
    error: "",
  },
};

const formsReducer = (
  state: FormsState = initialFormsState,
  action:
    | IncrementFormsIndex
    | DecrementFormsIndex
    | SetCircularFormLatitude
    | SetCircularFormLongitude
    | SetCircularFormRadius
    | SetCircularFormError
    | SetRectangularFormMinLatitude
    | SetRectangularFormMaxLatitude
    | SetRectangularFormMinLongitude
    | SetRectangularFormMaxLongitude
    | SetRectangularFormError
): FormsState => {
  switch (action.type) {
    case FormsActionType.INCREMENT_FORM_INDEX:
      if (state.formIndex + 1 > state.forms.length - 1) return state;
      return { ...state, formIndex: state.formIndex + 1 };
    case FormsActionType.DECREMENT_FORM_INDEX:
      if (state.formIndex - 1 < 0) return state;
      return { ...state, formIndex: state.formIndex - 1 };
    case FormsActionType.SET_CIRCULAR_FORM_LATITUDE:
      return {
        ...state,
        circularForm: { ...state.circularForm, latitude: action.payload },
      };
    case FormsActionType.SET_CIRCULAR_FORM_LONGITUDE:
      return {
        ...state,
        circularForm: { ...state.circularForm, longitude: action.payload },
      };
    case FormsActionType.SET_CIRCULAR_FORM_RADIUS:
      return {
        ...state,
        circularForm: { ...state.circularForm, radius: action.payload },
      };
    case FormsActionType.SET_CIRCULAR_FORM_ERROR:
      return {
        ...state,
        circularForm: { ...state.circularForm, error: action.payload },
      };
    case FormsActionType.SET_RECTANGULAR_FORM_MIN_LATITUDE:
      return {
        ...state,
        rectangularForm: {
          ...state.rectangularForm,
          minLatitude: action.payload,
        },
      };
    case FormsActionType.SET_RECTANGULAR_FORM_MAX_LATITUDE:
      return {
        ...state,
        rectangularForm: {
          ...state.rectangularForm,
          maxLatitude: action.payload,
        },
      };
    case FormsActionType.SET_RECTANGULAR_FORM_MIN_LONGITUDE:
      return {
        ...state,
        rectangularForm: {
          ...state.rectangularForm,
          minLongitude: action.payload,
        },
      };
    case FormsActionType.SET_RECTANGULAR_FORM_MAX_LONGITUDE:
      return {
        ...state,
        rectangularForm: {
          ...state.rectangularForm,
          maxLongitude: action.payload,
        },
      };
    case FormsActionType.SET_RECTANGULAR_FORM_ERROR:
      return {
        ...state,
        rectangularForm: { ...state.rectangularForm, error: action.payload },
      };
    default:
      return state;
  }
};

export default formsReducer;
