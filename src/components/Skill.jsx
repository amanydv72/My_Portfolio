import React from "react";

const Skill = ({ name, level, className }) => {
  return (
    <div className={`skill-card ${className}`}>
      <div className="skill-details">
        <div className="skill-name">{name}</div>
        <div className="skill-level">
          <div className="skill-bar">
            <div className="skill-level-fill" style={{ '--skill-level-width': `${level}%` }}></div>
          </div>
          <div className="skill-level-text">{level}%</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
