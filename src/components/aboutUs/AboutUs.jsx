// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import Image from "../../images/agent-photo.jpg";
import "./aboutUs.css";

export default function AboutUs() {
  //   useEffect(() => {
  //     Aos.init({ duration: 1000 });
  //   }, []);
  return (
    <div className="aboutUsSection">
      <div className="aboutUsContainer">
        <div className="aboutUsLeft">
          <img className="aboutUsImage" src={Image} alt="home" />
        </div>
        <div className="aboutUsRight">
          <div className="aboutUsHeading">
            <span>CHRIS MORGAN</span>
          </div>
          <div className="aboutUsDesc">
            <p>
              Since Year, Chris Morgan has been representing buyers and sellers
              all throughout the Auburn area. We specialize particularly in type
              of real estate, type of real estate and type of real estate in
              AAuburn. Established by top-producing Agent, from the very
              beginning, we have been raising the bar for what it means to
              provide first-rate service to our clients.
            </p>
            <p>
              In today’s real estate market, selling and buying a home requires
              advanced knowledge of online as well as traditional marketing
              platforms. Just having a real estate license and listing a home on
              the MLS is not enough – you want an agent who has their ear to the
              ground when it comes to market trends, a deep understanding of the
              communities they serve, and the ability to think outside the box.
              As part of the Chris Morgan team, our agents’ skills go far beyond
              closing deals.
            </p>
            <p>
              In today’s real estate market, selling and buying a home requires
              advanced knowledge of online as well as traditional marketing
              platforms. Just having a real estate license and listing a home on
              the MLS is not enough – you want an agent who has their ear to the
              ground when it comes to market trends, a deep understanding of MLS
              is not enough – you want an agent who has their ear to the ground
              when it comes to market trends, a deep understanding
            </p>
          </div>
        </div>

        <div className="aboutUsDesc">
          <p>
            In today’s real estate market, selling and buying a home requires
            advanced knowledge of online as well as traditional marketing
            platforms. Just having a real estate license and listing a home on
            the MLS is not enough – you want an agent who has their ear to the
            ground when it comes to market trends, a deep understanding of the
            communities they serve, and the ability to think outside the box. As
            part of the Chris Morgan team, our agents’ skills go far beyond
            closing deals.
          </p>
          <p>
            Over the years, our team has earned a number of distinguished
            professional designations We showcase our sellers’ properties on our
            agent websites as well as top real estate sites such as Website,
            Website and Website in a way that gets attention. Our listings
            appear on leading local and national publications. Our goal is to
            make sure that their homes are viewed in the best light and are seen
            by the widest audience possible. Our campaigns work. From Year to
            Year, Chris Morgan closed $$$ in sales and our total sales over the
            years has reached $$$. Buying a home in Auburn? Whether you’re a
            first-time homebuyer or this is your fifth home, you will have a
            seasoned pro to guide you throughout every step of the process. Our
            clients get the best personalized service, qualified advice, and
            professional assistance in Auburn. Knowing that we are on their side
            gives Chris Morgan’s clients a stress-free real estate experience.
            In today’s real estate market, the experience can mean all the
            difference in a successful real estate transaction. From buying your
            first home to expanding your real estate investment portfolio, our
            team at Chris Morgan looks forward to helping you realize all your
            real estate goals, big and small.
          </p>
        </div>
      </div>
    </div>
  );
}
