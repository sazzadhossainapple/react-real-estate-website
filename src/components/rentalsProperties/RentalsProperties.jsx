import { IoMdArrowRoundForward } from "react-icons/io";
import {
  PropertiesData1,
  PropertiesData10,
  PropertiesData11,
  PropertiesData12,
  PropertiesData2,
  PropertiesData3,
  PropertiesData4,
  PropertiesData5,
  PropertiesData6,
  PropertiesData7,
  PropertiesData8,
  PropertiesData9,
} from "../../data/PropertiesData";
import Button from "../button/Button";
import PropertiesButtonSection from "../propertiesButtonSection/PropertiesButtonSection";
import "./rentalsProperties.css";

export default function RentalsProperties() {
  return (
    <>
      <div className="rentalsrPertiesContainer">
        {/* <div className="propertiesHeading">
        {heading}
        <p>{subHeading}</p>
      </div> */}
        <div className="rentalsrPertiesWrapper">
          <>
            {PropertiesData1.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData5.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData6.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData7.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData8.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData9.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData10.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData11.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
            {PropertiesData12.map((item, index) => (
              <div key={index} className="rentalsrPertiesCard">
                <img src={item.image} alt={item.alt} />
                <div className="rentalsrPertiesInfo">
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
      <PropertiesButtonSection />
    </>
  );
}
