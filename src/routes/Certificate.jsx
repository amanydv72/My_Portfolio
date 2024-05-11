import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import CertificateCard from "../components/CertificateCard";

const Certificate = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CERTIFICATES." text="some of my certificates"/>
      <CertificateCard heading="Certificates"/>
      <Footer />
    </div>
  );
};

export default Certificate;
