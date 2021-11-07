import React, { useState } from "react";
import { Link } from "react-router-dom";
import { communititesDropdown } from "../../data/MenuData";
import "./communititesDropDown.css";

export default function CommunititesDropDown() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul
        className={
          dropDown ? "communititesSubmenu clicked" : "communititesSubmenu"
        }
        onClick={() => setDropDown(!dropDown)}
      >
        {communititesDropdown.map((item) => {
          return (
            <li
              onClick={() => setDropDown(false)}
              className="communititesSubmenuItem"
              key={item.id}
            >
              <Link className="link" to={item.link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
