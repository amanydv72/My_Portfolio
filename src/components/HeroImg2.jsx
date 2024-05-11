import React from "react";

import "./HeroImg2Styles.css"

const HeroImg2 = (props) => {
  return <div className="hero-img">
    <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
    </div>
  </div>;
};

export default HeroImg2;
