import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../images/agent-photo.jpg";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <>
      <div className="sidebarsItem">
        <img src={image} alt="" />
        <p>CHRIS MORGAN</p>
        <span className="sidebarsNumber">(704) 340-5435</span>
      </div>
      <div className="sidebarsItem">
        <span className="sidebarsTitle">FOLLOW US</span>
        <div className="sidebarsSocial">
          <FaYoutube className="sidebarsIcon" />
          <FaInstagram className="sidebarsIcon" />
          <FaFacebookF className="sidebarsIcon" />
          <FaTwitter className="sidebarsIcon" />
          <FaLinkedinIn className="sidebarsIcon" />
        </div>
      </div>
      <div className="sidebarsItem">
        <div>
          <Link className="link" to="/rentals">
            <div className="sideBarButton">
              <span>find my Home</span>
            </div>
          </Link>
          <Link className="link" to="/about">
            <div className="sideBarButton">
              <span>about me</span>
            </div>
          </Link>
          <Link className="link" to="/contact">
            <div className="sideBarButton">
              <span>contact me</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
