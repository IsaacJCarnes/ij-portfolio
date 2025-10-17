import "./Portfolio.css";

import React, { useState } from "react";

import { projectData } from "./projectData.js";

export default function Portfolio() {


  const projectList = projectData.map(
    (
      item,
      i //Creates clickable images for each project
    ) => (
      <div key={i} className="projectItem">
        <img
          data-index={i}
          src={item.photo}
          alt={item.altTxt}
          className="projectPicture"
        />
        <h2 className="projectTitle">{item.name}</h2>
        <div className="projectSummary">
          {item.summaryDesc} {item.techDesc}
        </div>
      </div>
    )
  );

  return (
    <div id="PortfolioContainer">
      <h1 className="sectionHeader">
        Projects
      </h1>
      <div id="ProjectsContainer">{projectList}</div>
    </div>
  );
}
