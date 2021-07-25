import { FormsActionType } from "../action-types/action_types";

export interface IncrementFormsIndex {
  type: FormsActionType.INCREMENT_FORM_INDEX;
}

export interface DecrementFormsIndex {
  type: FormsActionType.DECREMENT_FORM_INDEX;
}
