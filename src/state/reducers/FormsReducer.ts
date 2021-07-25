import { FormsActionType } from "../action-types/action_types";
import {
  DecrementFormsIndex,
  IncrementFormsIndex,
} from "../actions/forms_actions";
import { FormName } from "../util";

export interface FormsState {
  formIndex: number;
  forms: FormName[];
  circularForm: {
    latitude: string;
    longitude: string;
    radius: string;
  };
  rectangularForm: {
    minLatitude: string;
    maxLatitude: string;
    minLongitude: string;
    maxLongitude: string;
  };
  MapForm: {
    radius: string;
  };
}

export const initialFormsState: FormsState = {
  formIndex: 0,
  forms: [FormName.CIRCULAR, FormName.RECTANGULAR, FormName.MAP],
  circularForm: {
    latitude: "",
    longitude: "",
    radius: "",
  },
  rectangularForm: {
    minLatitude: "",
    maxLatitude: "",
    minLongitude: "",
    maxLongitude: "",
  },
  MapForm: {
    radius: "",
  },
};

const formsReducer = (
  state: FormsState = initialFormsState,
  action: IncrementFormsIndex | DecrementFormsIndex
): FormsState => {
  switch (action.type) {
    case FormsActionType.INCREMENT_FORM_INDEX:
      if (state.formIndex + 1 > state.forms.length - 1) return state;
      return { ...state, formIndex: state.formIndex + 1 };
    case FormsActionType.DECREMENT_FORM_INDEX:
      if (state.formIndex - 1 < 0) return state;
      return { ...state, formIndex: state.formIndex - 1 };
    default:
      return state;
  }
};

export default formsReducer;
