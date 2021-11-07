import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerUpContanier">
        <div className="footerLeft">
          <div className="footerTitle">
            <h2>
              Let's find <br /> your Dream Home
            </h2>
          </div>
        </div>
        <div className="footerCenter">
          <div className="footerContent">
            <span className="fooTitle">Contact Us</span>
            <span className="footerDesc">FAQ</span>
            <span className="footerDesc">Support</span>
            <span className="footerDesc">Question</span>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerContent">
            <span className="fooTitle">Office</span>
            <span className="footerDesc">United States</span>
            <span className="footerDesc">Eurape</span>
            <span className="footerDesc">Asia</span>
          </div>
        </div>
      </div>
      <div className="footerUpContanier">
        <div className="leftSocialIcon">
          <div className="footerSocialIcon">
            <FaYoutube className="foterSocialSingleIcon" />
            <FaInstagram className="foterSocialSingleIcon" />
            <FaFacebookF className="foterSocialSingleIcon" />
            <FaTwitter className="foterSocialSingleIcon" />
            <FaLinkedinIn className="foterSocialSingleIcon" />
          </div>
        </div>
        <div className="centerText"></div>

        <div className="rightText">
          <div className="footerChatButton">
            <button to="" className="footerButton">
              Let's Chat
              <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
