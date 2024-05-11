import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Skills from "../components/Skills";

const About = () => {
  const LinkedIn = "https://www.linkedin.com/in/aman-yadav-34083b204/";
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT ME" text="I'm a friendly Front-End Developer." />
      <AboutContent />
      <Skills url={LinkedIn} />
      <Footer />
    </div>
  );
};

export default About;
