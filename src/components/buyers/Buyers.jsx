import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Image1 from "../../images/buyer-1.jpg";
import Image2 from "../../images/buyer-2.jpg";
// import Image3 from "../../images/seller-3.jpg";
// import boxImage1 from "../../images/sellerBox-1.jpg";
// import boxImage2 from "../../images/sellerBox-2.jpg";
// import boxImage3 from "../../images/sellerBox-3.jpg";
import Button from "../button/Button";
import "./buyers.css";

export default function Buyers() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="buyersSection">
      <div className="buyersContainer">
        <div data-aos="fade-right" className="buyersLeft">
          <img className="buyersImage" src={Image1} alt="home" />
        </div>
        <div data-aos="fade-left" className="buyersRight">
          <div className="buyersInfoRight">
            <div className="buyersHeading">
              <p>BUY WITH US</p>
            </div>
            <div className="buyersDesc">
              <p>
                Purchasing a home is one of the most important decisions you’ll
                make, and the right advice and guidance is paramount. Experience
                and expertise matter, and they can make a significant difference
                in making sure that you not only find the right house, but that
                you also pay the best price. we also have access to many
                properties that are off-market and an awareness of properties
                that are about to be listed. Most importantly, we are keenly
                aware of the nuances that determine value and we are discerning
                as to construction quality, materials, and craftsmanship. Once
                you choose a property we will represent your interest
                vociferously throughout the purchase process, negotiating the
                best possible purchase price.
              </p>
            </div>
            <Link className="link" to="">
              <Button>
                LET GET STARTED
                <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="buyersContainer">
        <div data-aos="fade-right" className="buyersLeft">
          <div className="buyersInfoLeft">
            <div className="buyersHeading">
              <p>BUY WITH US</p>
            </div>
            <div className="buyersDesc">
              <p>
                Purchasing a home is one of the most important decisions you’ll
                make, and the right advice and guidance is paramount. Experience
                and expertise matter, and they can make a significant difference
                in making sure that you not only find the right house, but that
                you also pay the best price. we also have access to many
                properties that are off-market and an awareness of properties
                that are about to be listed. Most importantly, we are keenly
                aware of the nuances that determine value and we are discerning
                as to construction quality, materials, and craftsmanship. Once
                you choose a property we will represent your interest
                vociferously throughout the purchase process, negotiating the
                best possible purchase price.
              </p>
            </div>
            <Link className="link" to="">
              <Button>
                LET GET STARTED
                <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
              </Button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="buyersRight">
          <img className="buyersImage" src={Image2} alt="home" />
        </div>
      </div>
    </div>
  );
}
