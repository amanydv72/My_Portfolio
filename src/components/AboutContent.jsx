import React from "react";
import { Link } from "react-router-dom";

import "./AboutContectStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Hi, I am Aman Yadav, l am an enthusiast in the field of software
          engineering and a deep interest in software development{" "}
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="mg-stack top">
            <img src={React2} alt="react1" className="img" />
          </div>
          <div className="mg-stack bottom">
            <img src={React1} alt="react1" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
