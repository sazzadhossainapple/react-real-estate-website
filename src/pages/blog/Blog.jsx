import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/SideBar";
import "./blog.css";

export default function Blog() {
  return (
    <div className="blog">
      <Header title="Blog" />
      <div className="blogposts">
        <div className="blogpostsContainer">
          <div className="blogpostsLeft">
            <Link className="link" to="/singleblog">
              <Post />
            </Link>
            <Link className="link" to="/singleblog">
              <Post />
            </Link>
          </div>
          <div className="blogpostsRight">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
