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
