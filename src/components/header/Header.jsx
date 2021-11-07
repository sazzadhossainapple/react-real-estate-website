import { HeaderData } from "../../data/HeaderData";
import "./header.css";

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="headerWrapper">
        {HeaderData.map((item, index) => (
          <div key={index} className="container">
            <div className="headerImage">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="headerTitle">
              <h1>{title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
