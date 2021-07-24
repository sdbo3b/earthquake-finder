import React from "react";
import { Icon, Map, MapPin } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../state/action-creators/tab";
import { State } from "../../state";
import { TabName } from "../../state/util";

interface MenuItemProps {
  tabName: TabName;
  Icon: Icon;
}

const TabMenuItem: React.FC<MenuItemProps> = ({ tabName, Icon }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((state: State) => state.tab.currentTab);
  const selected: Boolean = currentTab === tabName;

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch(setTab(tabName));
  };

  return (
    <button
      onClick={handleClick}
      className={`menu-list-tile-container ${
        selected ? "selected-menu-list-tile" : ""
      }`}
    >
      <div className="menu-list-tile-leading">{<Icon size={18} />}</div>
      <div className="menu-list-tile-center">
        <p>{tabName}</p>
      </div>
      <div className="menu-list-tile-trailing"></div>
    </button>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <TabMenuItem tabName={TabName.COORDINATES} Icon={MapPin} />
      <TabMenuItem tabName={TabName.MAP} Icon={Map} />
    </div>
  );
};

export default Menu;
