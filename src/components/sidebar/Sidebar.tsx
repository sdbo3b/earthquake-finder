import React from "react";
import Title from "./Title";
import Menu from "./Menu";
import Footer from "./Footer";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-leading">
        <Title />
      </div>
      <div className="sidebar-center">
        <Menu />
      </div>
      <div className="sidebar-trailing">
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
