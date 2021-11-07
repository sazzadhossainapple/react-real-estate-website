//import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
//import DropDown from "./components/dropDown/DropDown";
//import HeroImageSlider from "./components/heroImageSlider/HeroImageSlider";
import Navbar from "./components/navbar/Navbar";
//import { SliderData } from "./data/SliderData";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Buyer from "./pages/buyer/Buyer";
import Carlsbad from "./pages/communitites/carlsbad/Carlsbad";
import Escondio from "./pages/communitites/Escondio/Escondio";
import Hawaii from "./pages/communitites/Hawaii/Hawaii";
import Temecula from "./pages/communitites/Temecula/Temecula";
import Contacts from "./pages/contact/Contacts";
import Home from "./pages/home/Home";
import Rentals from "./pages/rentals/Rentals";
import Seller from "./pages/seller/Seller";
import SingleBlog from "./pages/singleBlog/SingleBlog";
function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <Router>
      <Navbar />
      {/* <DropDown /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/singleblog" component={SingleBlog} />
        <Route path="/buyer" component={Buyer} />
        <Route path="/seller" component={Seller} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contacts} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/carlsbad" component={Carlsbad} />
        <Route path="/hawaii" component={Hawaii} />
        <Route path="/escondio" component={Escondio} />
        <Route path="/temecula" component={Temecula} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
