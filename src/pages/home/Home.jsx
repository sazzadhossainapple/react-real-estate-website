import Box from "../../components/box/Box";
import Commnuities from "../../components/communities/Commnuities";
// import Contact from "../../components/contact/Contact";
import HeroImageSlider from "../../components/heroImageSlider/HeroImageSlider";
import NewHome from "../../components/homes/NewHome";
import InformationSection from "../../components/informationSection/InformationSection";
import Posts from "../../components/posts/Posts";
import Properties from "../../components/properties/Properties";
import { SliderData } from "../../data/SliderData";
import "./home.css";
export default function Home() {
  return (
    <>
      <HeroImageSlider slides={SliderData} />
      <Box />
      <InformationSection />
      <Properties heading="Properties" subHeading="FEATURED" />
      <Commnuities heading="Communities" subHeading="FEATURED" />
      <NewHome />
      <Posts heading="LATEST BLOG POST" />
      {/* <Contact /> */}
    </>
  );
}
