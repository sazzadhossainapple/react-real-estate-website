import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NewHomeData } from "../../data/NewHomeData";
import Button from "../button/Button";
import "./newHome.css";

export default function NewHome() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="newHome">
      {NewHomeData.map((item, index) => (
        <div key={index} className=" newHomeContainer">
          <div data-aos="fade-right" className="newHomeLeft">
            <h1>{item.heading}</h1>
            <p>{item.paragraphOne}</p>
            <p>{item.paragraphTwo}</p>
            <Link className="link" to="/rentals">
              <Button>{item.buttonLabel}</Button>
            </Link>
          </div>
          <div data-aos="fade-left" className="newHomeRight">
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
