import React from "react";
import { useSelector } from "react-redux";
import { TabName } from "../../state/util";
import { State } from "../../state";
import CoordinatesTab from "./coordinates-tab/CoordinatesTab";
import MapTab from "./map-tab/MapTab";

const RightContent: React.FC = () => {
  const tabState = useSelector((state: State) => state.tab.currentTab);

  const getCurrentTab = () => {
    switch (tabState) {
      case TabName.COORDINATES:
        return <CoordinatesTab />;
      case TabName.MAP:
        return <MapTab />;
      default:
        return <CoordinatesTab />;
    }
  };

  return <div className="right-content-container">{getCurrentTab()}</div>;
};

export default RightContent;
