import Header from "../../components/header/Header";
import SingleBlogPost from "../../components/singleBlogPost/SingleBlogPost";
import "./singleBlog.css";

export default function SingleBlog() {
  return (
    <div>
      <Header title="Blog" />
      <SingleBlogPost />
    </div>
  );
}
