import "./WorkCardStyles.css";

import React from "react";
import WorkCard from "./WorkCard";
import CertificateCardData from "./CertificateCardData";

const CertificateCard = ({ heading }) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">{heading}</h1>

      <div className="project-container">
        {CertificateCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgscr}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateCard;
