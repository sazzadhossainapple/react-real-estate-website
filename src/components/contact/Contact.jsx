import BgImage from "../../images/contactBgImage.jpg";
import Button from "../button/Button";
import "./contact.css";
var sectionStyle = {
  background: `url(${BgImage}) fixed`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

export default function Contact() {
  return (
    <div className="contact" style={sectionStyle}>
      <div className="contactContainer">
        <span className="contactTitle">Contact Me</span>
        <form className="contactForm">
          <label>Name</label>
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <label>Email</label>
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your email..."
            required
          />
          <label>Number</label>
          <input
            type="number"
            className="contactInput"
            placeholder="Enter your number..."
            required
          />

          <label>Massage</label>
          <textarea
            className="contactInput"
            type="textarea"
            placeholder="Enter your some text..."
            required
          />
          <div className="submitButton">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
