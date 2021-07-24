import { Dispatch } from "redux";
import { TabActionType } from "../action-types/action_types";
import { SetTab } from "../actions";
import { TabName } from "../util";

export const setTab = (payload: TabName.MAP | TabName.COORDINATES) => {
  return (dispatch: Dispatch<SetTab>) => {
    dispatch({
      type: TabActionType.SET_TAB,
      payload,
    });
  };
};
