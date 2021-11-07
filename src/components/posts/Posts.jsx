import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../images/agent-photo.jpg";
import Post from "../post/Post";
import "./posts.css";
export default function Posts({ heading }) {
  return (
    <div className="posts">
      <div className="blogHeading">{heading}</div>
      <div className="postsContainer">
        <div className="postsLeft">
          <Link className="link" to="/singleblog">
            <Post />
          </Link>
        </div>
        <div className="postsRight">
          <div className="sidebarItem">
            <img src={image} alt="" />
            <p>CHRIS MORGAN</p>
            <span className="sidebarNumber">(704) 340-5435</span>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <FaYoutube className="sidebarIcon" />
              <FaInstagram className="sidebarIcon" />
              <FaFacebookF className="sidebarIcon" />
              <FaTwitter className="sidebarIcon" />
              <FaLinkedinIn className="sidebarIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
