import { TabActionType } from "../action-types/action_types";
import { TabName } from "../util";

export interface SetTab {
  type: TabActionType.SET_TAB;
  payload: TabName.MAP | TabName.COORDINATES;
}
