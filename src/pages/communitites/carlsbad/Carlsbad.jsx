import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../../components/header/Header";
import { CommunitiesData1 } from "../../../data/CommunitiesData";
import "./carlsbad.css";
export default function Carlsbad() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header title="Carlsbad" />
      <div className="communititesSection">
        {CommunitiesData1.map((item, index) => (
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
