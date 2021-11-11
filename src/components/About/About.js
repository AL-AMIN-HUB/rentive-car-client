import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import ChooseUs from "../ChooseUs/ChooseUs";
import News from "../News/News";

const About = () => {
  return (
    <div>
      <Menubar />
      <News />
      <ChooseUs />
    </div>
  );
};

export default About;
