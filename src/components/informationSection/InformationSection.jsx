import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { InfoDataOne } from "../../data/InfoData";
import Button from "../button/Button";
import "./informationSection.css";

export default function InformationSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="infoSection">
      {InfoDataOne.map((item, index) => (
        <div key={index} className="infoContainer">
          <div data-aos="fade-right" className="infoLeft">
            <img className="infoImage" src={item.image} alt="home" />
          </div>
          <div className="infoRight">
            <div className="infoHeading">
              <span>{item.heading}</span>
              <p>{item.subHeading}</p>
            </div>
            <div className="infoDesc">
              <p>{item.paragraphOne}</p>
              <p>{item.paragrapTwo}</p>
            </div>
            <Link className="link" to={item.pathName}>
              <Button>
                {item.buttonlabel}
                <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
