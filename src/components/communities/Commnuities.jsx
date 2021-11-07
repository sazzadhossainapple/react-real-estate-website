import { ImLocation } from "react-icons/im";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  CommunitiesData1,
  CommunitiesData2,
  CommunitiesData3,
  CommunitiesData4,
} from "../../data/CommunitiesData";
import Button from "../button/Button";
import "./communities.css";

export default function Commnuities({ heading, subHeading }) {
  return (
    <div className="communitiesContainer">
      <div className="communitiesHeading">
        {heading}
        <p>{subHeading}</p>
      </div>
      <div className="communitiesWrapper">
        <>
          {CommunitiesData1.map((item, index) => (
            <div className="communitiesCard" key={index}>
              <img src={item.image} alt={item.alt} />
              <div className="communitiesInfo">
                <div className="textWarp">
                  <ImLocation />
                  <div className="textTitle">
                    <span>{item.name}</span>
                  </div>
                </div>
                <div className="communitiesButton">
                  <Link to="/carlsbad" className="link">
                    <Button>
                      {item.buttons}
                      <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>

        <>
          {CommunitiesData2.map((item, index) => (
            <div className="communitiesCard" key={index}>
              <img src={item.image} alt={item.alt} />
              <div className="communitiesInfo">
                <div className="textWarp">
                  <ImLocation />
                  <div className="textTitle">
                    <span>{item.name}</span>
                  </div>
                </div>
                <div className="communitiesButton">
                  <Link to="/escondio" className="link">
                    <Button>
                      {item.buttons}
                      <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
        <>
          {CommunitiesData3.map((item, index) => (
            <div className="communitiesCard" key={index}>
              <img src={item.image} alt={item.alt} />
              <div className="communitiesInfo">
                <div className="textWarp">
                  <ImLocation />
                  <div className="textTitle">
                    <span>{item.name}</span>
                  </div>
                </div>
                <div className="communitiesButton">
                  <Link to="/temecula" className="link">
                    <Button>
                      {item.buttons}
                      <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
        <>
          {CommunitiesData4.map((item, index) => (
            <div className="communitiesCard" key={index}>
              <img src={item.image} alt={item.alt} />
              <div className="communitiesInfo">
                <div className="textWarp">
                  <ImLocation />
                  <div className="textTitle">
                    <span>{item.name}</span>
                  </div>
                </div>
                <div className="communitiesButton">
                  <Link to="/hawaii" className="link">
                    <Button>
                      {item.buttons}
                      <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
