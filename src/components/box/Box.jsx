import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdSell } from "react-icons/md";
import { BoxData1, BoxData2, BoxData3 } from "../../data/BoxData";
// import Button from "../button/Button";
import "./box.css";

export default function Box() {
  return (
    <div className="boxContainer">
      <div className="box">
        {BoxData1.map((item, index) => (
          <div key={index}>
            <img className="boxImage" src={item.image} alt="" />
            <div className="boxIcon">
              <FaHome className="FaIcon" />
            </div>
            <div className="boxContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="box">
        {BoxData2.map((item, index) => (
          <div key={index}>
            <img className="boxImage" src={item.image} alt="" />
            <div className="boxIcon">
              <IoMdContacts className="FaIcon" />
            </div>
            <div className="boxContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="box">
        {BoxData3.map((item, index) => (
          <div key={index}>
            <img className="boxImage" src={item.image} alt="" />
            <div className="boxIcon">
              <MdSell className="FaIcon" />
            </div>
            <div className="boxContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
