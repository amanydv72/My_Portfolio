import React from "react";
import { Link } from "react-router-dom";

import "./Skills.css";

const Skills = ({url}) => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>ReactJS</span>
                <span>75%</span>
              </div>
              <div className="line reactjs"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C</span>
                <span>85%</span>
              </div>
              <div className="line c"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C++</span>
                <span>80%</span>
              </div>
              <div className="line cpp"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>65%</span>
              </div>
              <div className="line python"></div>
            </div>
            <Link to={url}>
              <button className="read-more">Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
