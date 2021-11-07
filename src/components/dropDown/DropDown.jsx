import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import "./dropDown.css";
export default function DropDown({ isOpen, toggle }) {
  const styleObj = {
    opacity: `${({ isOpen }) => (isOpen ? "1" : "0")}`,
    top: `${({ isOpen }) => (isOpen ? "0" : "-100%")}`,
  };
  return (
    <div
      isOpen={isOpen}
      onClick={toggle}
      className="dropDownContainer"
      style={styleObj}
    >
      <div onClick={toggle} className="icon">
        <FaTimes className="closeIcon" />
      </div>
      <div className="dropDownWrapper">
        <div className="dropDownMenu">
          {menuData.map((item, index) => (
            <Link className="link" to={item.link} key={index}>
              <li className="dropDownLink">{item.title}</li>
            </Link>
          ))}
        </div>
        <div className="btnWrap">
          <button className="dropDownButton">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
