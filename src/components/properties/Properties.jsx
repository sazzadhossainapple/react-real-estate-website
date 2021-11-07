import { IoMdArrowRoundForward } from "react-icons/io";
import {
  PropertiesData1,
  PropertiesData2,
  PropertiesData3,
  PropertiesData4,
} from "../../data/PropertiesData";
import Button from "../button/Button";
import "./properties.css";

export default function Properties({ heading, subHeading }) {
  return (
    <div className="propertiesContainer">
      <div className="propertiesHeading">
        {heading}
        <p>{subHeading}</p>
      </div>
      <div className="propertiesWrapper">
        <>
          {PropertiesData1.map((item, index) => (
            <div key={index} className="propertiesCard">
              <img src={item.image} alt={item.alt} />
              <div className="propertiesInfo">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <div>
                  <Button>
                    {item.lable}
                    <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </>

        <>
          {PropertiesData2.map((item, index) => (
            <div key={index} className="propertiesCard">
              <img src={item.image} alt={item.alt} />
              <div className="propertiesInfo">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <div>
                  <Button>
                    {item.lable}
                    <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </>

        <>
          {PropertiesData3.map((item, index) => (
            <div key={index} className="propertiesCard">
              <img src={item.image} alt={item.alt} />
              <div className="propertiesInfo">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <div>
                  <Button>
                    {item.lable}
                    <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </>
        <>
          {PropertiesData4.map((item, index) => (
            <div key={index} className="propertiesCard">
              <img src={item.image} alt={item.alt} />
              <div className="propertiesInfo">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <div>
                  <Button>
                    {item.lable}
                    <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
