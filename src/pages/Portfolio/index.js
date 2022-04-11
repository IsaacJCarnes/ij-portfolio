import "./Portfolio.css";

import React, { useState } from "react";

import {projectData} from './projectData.js';

export default function Portfolio() {
  const [selectedProject, selectProject] = useState(0); //State change for selected project element

  const pickProject = (e) => {
    //get index on chosen image and set selectedProject equal to it
    e.preventDefault();
    if (e.target.nodeName === "IMG") {
      selectProject(e.target.dataset.index);
    }
  };

  let projectList = projectData.map(
    (
      item,
      i //Creates clickable images for each project
    ) => (
      <div className="SelectorBorder" key={i}>
        <img
          data-index={i}
          src={item.photo}
          alt={item.altTxt}
          className="SelectorImg"
        ></img>
      </div>
    )
  );

  /* Code for flipping image to details on click */
  const [imageShown, setImageShown] = useState(true); //State change for selected project element
  const [midAnim, setMidAnim] = useState(false); //State change for in middle of animation
  const ContentChange = () => {
    if (midAnim === false) {
      setMidAnim(true);
      let projContainer = document.getElementById("ProjectContentContainer");
      projContainer.classList.remove("FlipIn");
      projContainer.classList.add("FlipOut");
    }
  };

  const SwapContent = () => {
    let projImg = document.getElementById("ProjImg");
    let projDesc = document.getElementById("ProjDesc");
    if (midAnim) {
      if (imageShown === true) {
        projImg.style.display = "hidden";
        projDesc.style.display = "initial";
      } else {
        projImg.style.display = "initial";
        projDesc.style.display = "hidden";
      }
      setImageShown(!imageShown);
      setMidAnim(false);
    }
    let projContainer = document.getElementById("ProjectContentContainer");
    projContainer.classList.add("FlipIn");
  };

  const ProjImg = () => {
    return (
      <img
        id="ProjImg"
        height="500px"
        src={projectData[selectedProject].photo}
        alt={projectData[selectedProject].altTxt}
        style={{ display: imageShown ? "initial" : "none" }}
      ></img>
    );
  };

  const ProjDescription = () => {
    return (
      <div id="ProjDesc" style={{ display: imageShown ? "none" : "flex" }}>
        <div style={{fontFamily:"'Courier New', Courier, monospace"}}>No IMG</div>
        <div className="ButtonContainer">
          <button
            type="button"
            onClick={(e) => {
              openRepositoryLink(e);
            }}
          >
            Repository
          </button>

          <button
            type="button"
            onClick={(e) => {
              openDeployedLink(e);
            }}
          >
            Deployed
          </button>
        </div>
      </div>
    );
  };

  const openRepositoryLink = (e) => {
    //Get repository link from selected project
    e.preventDefault();
    if(midAnim){
      return;
    }
    window.open(projectData[selectedProject].projectLink);
  };

  const openDeployedLink = (e) => {
    //Get deployed link from selected project
    e.preventDefault();
    if(midAnim){
      return;
    }
    window.open(projectData[selectedProject].deployedLink);
  };

  const HelpText = () => {
    if(imageShown){
      return <p>Tap Inside The Image To See Related Content</p>
    }
    return <p>Tap Inside The Border To See The Image</p>
  }

  return (
    <div className="PortfolioContainer">
      <div
        className="SelectorContainer"
        onClick={(e) => {
          pickProject(e);
        }}
      >
        {projectList}
      </div>

      <div className="ProjectDisplay">
        <h1 className="ProjectDisplayName">{projectData[selectedProject].name}</h1>
        <div
          id="ProjectContentContainer"
          onClick={(e) => {
            e.preventDefault();
            if (e.target.type !== "button") {
              ContentChange();
            }
          }}
          onAnimationEnd={(e) => {
            e.preventDefault();
            SwapContent();
          }}
        >
          {ProjImg()}
          {ProjDescription()}
        </div>
      </div>
      {HelpText()}
    </div>
  );
}
