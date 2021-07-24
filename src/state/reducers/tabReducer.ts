import { TabActionType } from "../action-types/action_types";
import { SetTab } from "../actions";
import { TabName } from "../util";

interface TabState {
  currentTab: TabName;
}

export const initialTabState: TabState = {
  currentTab: TabName.COORDINATES,
};

const tabReducer = (state: TabState = initialTabState, action: SetTab) => {
  switch (action.type) {
    case TabActionType.SET_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
