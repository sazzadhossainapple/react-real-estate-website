import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../../components/header/Header";
import { CommunitiesData3 } from "../../../data/CommunitiesData";
import "./temecula.css";
export default function Temecula() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header title="Temecula" />
      <div className="communititesSection">
        {CommunitiesData3.map((item, index) => (
          <div key={index} className="communititesContainer">
            <div data-aos="fade-right" className="communititesLeft">
              <img className="communititesImage" src={item.image} alt="home" />
            </div>
            <div className="communititesRight">
              <div className="communititesHeading">
                <p>{item.name}</p>
              </div>
              <div className="communititesDesc">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
