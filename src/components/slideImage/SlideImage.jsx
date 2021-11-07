import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ImageOne from "../../images/house-1.jpg";
import ImageTwo from "../../images/house-2.jpg";
import ImageThree from "../../images/house-3.jpg";
import ImageFour from "../../images/house-4.jpg";
import "./slideImage.css";

export default function SlideImage() {
  return (
    <div className="heroWrapper">
      <div className="heroSlide">
        <div className="heroSlider">
          <div className="heroImage">
            <img src={ImageOne} alt="" />
          </div>
          <div className="heroContent">
            <h1>Luxury Villa in Bali, Indonesia</h1>
            <p>$4,280,000</p>
            <button className="sliderButton">
              View Home
              <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
            </button>
          </div>
        </div>
      </div>
      <div className="heroSlide">
        <div className="heroSlider">
          <div className="heroImage">
            <img src={ImageTwo} alt="" />
          </div>
          <div className="heroContent">
            <h1>House in San Jose, Costa Rica</h1>
            <p>$2,860,00</p>
            <button className="sliderButton">
              View Home
              <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
            </button>
          </div>
        </div>
      </div>
      <div className="heroSlide">
        <div className="heroSlider">
          <div className="heroImage">
            <img src={ImageThree} alt="" />
          </div>
          <div className="heroContent">
            <h1>House in Calabasas, California</h1>
            <p>$8,420,000</p>
            <button className="sliderButton">
              View Home
              <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
            </button>
          </div>
        </div>
      </div>
      <div className="heroSlide">
        <div className="heroSlider">
          <div className="heroImage">
            <img src={ImageFour} alt="" />
          </div>
          <div className="heroContent">
            <h1>House in Houston, Texas</h1>
            <p>$6,660,000</p>
            <button className="sliderButton">
              View Home
              <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
            </button>
          </div>
        </div>
      </div>
      <div className="sliderButtons">
        <IoArrowBack className="nextArrow" />
        <IoArrowForward className="prevArrow" />
      </div>
    </div>
  );
}
