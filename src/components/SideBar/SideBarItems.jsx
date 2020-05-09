import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarItems(props) {
  return (
    <li>
      <a href={"#" + props.description}>
        <FontAwesomeIcon
          className="customIcon"
          style={{ color: "#FFF" }}
          icon={props.icon}
        />
        <p>{props.description}</p>
      </a>
    </li>
  );
}

function SmallSideBar(props) {
  return (
    <li>
      <a href={"#" + props.description}>
        <FontAwesomeIcon
          className="customIcon"
          style={{ color: "#FFF" }}
          icon={props.icon}
        />
      </a>
    </li>
  );
}

export default SideBarItems;
export { SmallSideBar };
