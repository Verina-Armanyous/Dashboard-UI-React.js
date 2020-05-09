import React from "react";
import Items from "./Items";
import SideBarItems from "./SideBarItems";
import { SmallSideBar } from "./SideBarItems";

function createItem(item) {
  return <SideBarItems description={item.description} icon={item.icon} />;
}
function createItemSmall(item) {
  return <SmallSideBar description={item.description} icon={item.icon} />;
}
function SideBar() {
  return (
    <div>
      <div className="sidebar large-menu ">
        <ul className="nav">{Items.map(createItem)}</ul>
      </div>
      <div className="sidebar small-menu ">
        <ul className="nav">{Items.map(createItemSmall)}</ul>
      </div>
    </div>
  );
}

export default SideBar;
