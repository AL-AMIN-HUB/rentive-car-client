import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import Misson from "../Mission/Misson";
import ReviewHeader from "../ReviewHeader/ReviewHeader";
import Services from "../Services/Services";
import UiReview from "../UiReview/UiReview";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <Misson />
      <Services />
      <Works />
      <Contact />
      <ChooseUs />
      <ReviewHeader />
      <UiReview />
    </div>
  );
};

export default Home;
