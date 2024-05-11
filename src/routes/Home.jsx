import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Skills from "../components/Skills";
import CertificateCard from "../components/CertificateCard";
import AboutContent from "../components/AboutContent";

const Home = () => {
  const LinkedIn = "https://www.linkedin.com/in/aman-yadav-34083b204/";
  return (
    <>
      <Navbar />
      <Heroimg/>
      <Work heading="Projects" />
      <AboutContent/>
      <Skills url={LinkedIn}/>
      <CertificateCard heading="Certificates" />
      <Footer/>
    </>
  );
};

export default Home;
