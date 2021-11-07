import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Image1 from "../../images/seller-1.jpg";
import Image2 from "../../images/seller-2.jpg";
import Image3 from "../../images/seller-3.jpg";
import boxImage1 from "../../images/sellerBox-1.jpg";
import boxImage2 from "../../images/sellerBox-2.jpg";
import boxImage3 from "../../images/sellerBox-3.jpg";
import Button from "../button/Button";
import "./sellers.css";

export default function Sellers() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="sellersSection">
      <div className="sellersContainer">
        <div data-aos="fade-right" className="sellersLeft">
          <img className="sellersImage" src={Image1} alt="home" />
        </div>
        <div data-aos="fade-left" className="sellersRight">
          <div className="sellerInfoRight">
            <div className="sellersHeading">
              <p>WHY SELL?</p>
            </div>
            <div className="sellersDesc">
              <p>
                Why do you want to sell your property? Do you intend to simply
                find a larger property, or do you plan on moving to another
                neighborhood, school district, city or state? You might think
                your reasons are obvious, but it would do well to consider the
                implications of each option for your lifestyle, opportunities,
                and finances. Being clear about your intentions for selling will
                make it easier for us to determine the most appropriate option
                for your specified financial, lifestyle, and real estate goals.
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

      <div className="sellersContainerCenter">
        <div data-aos="fade-up" className="centerSellerCenter">
          <img className="sellersImage" src={Image2} alt="home" />
          <div className="sellersCenterHeading">
            <p>WHEN SHOULD I SELL?</p>
          </div>
          <div className="sellersDesc">
            <p>
              You should immediately establish your time frame for selling. If
              you need to sell quickly, we can speed up the process by giving
              you a complete market analysis and action plan to obtain all of
              your goals. If there is no pressing need to sell immediately, you
              can sit down with one of our expert real estate agents to
              thoroughly review the current market conditions and find the most
              favorable time to sell.
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

      <div className="sellersContainer">
        <div data-aos="fade-right" className="sellersLeft">
          <div className="sellerInfoLeft">
            <div className="sellersHeading">
              <p>WHAT IS THE MARKET LIKE?</p>
            </div>
            <div className="sellersDesc">
              <p>
                When you work with us, you can be sure that you will have our
                knowledge, expertise and negotiating skills at work for you to
                arrive at the best market prices and terms. We will keep you
                up-to-date on what is happening in the marketplace and the
                price, financing, terms and conditions of competing properties.
                With us, you will know exactly how to price and when to sell
                your property.
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
        <div data-aos="fade-left" className="sellersRight">
          <img className="sellersImage" src={Image3} alt="home" />
        </div>
      </div>
      <div className="sellerBoxContanier">
        <div className="sellerBoxs">
          <div className="sellerBox">
            <img className="sellerBoxImage" src={boxImage1} alt="" />
            <div className="sellerBoxContent">
              <h3>SAN FRANCISCO</h3>
            </div>
          </div>
          <div className="sellerBoxButton">
            <Button>SEARCH NOW</Button>
          </div>
        </div>
        <div className="sellerBoxs">
          <div className="sellerBox">
            <img className="sellerBoxImage" src={boxImage2} alt="" />
            <div className="sellerBoxContent">
              <h3>SILICON VALLEY</h3>
            </div>
          </div>
          <div className="sellerBoxButton">
            <Button>SEARCH NOW</Button>
          </div>
        </div>
        <div className="sellerBoxs">
          <div className="sellerBox">
            <img className="sellerBoxImage" src={boxImage3} alt="" />
            <div className="sellerBoxContent">
              <h3>HAWAII</h3>
            </div>
          </div>
          <div className="sellerBoxButton">
            <Button>SEARCH NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
