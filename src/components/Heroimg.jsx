import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg2.jpg";

import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p>Hey, I'M AMAN YADAV.</p>
        <h1>
          <Typed
            strings={["Web Developer", "Programmer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          <Link to="https://drive.google.com/file/d/1ngF9FCK7beFv4ZWkM2lD3h-CNlDclxMe/view?usp=sharing" className="btn2">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
