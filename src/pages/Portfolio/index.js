import "./Portfolio.css";

import React, { useState } from "react";

import { projectData } from "./projectData.js";

export default function Portfolio() {
  const [selectedProject, selectProject] = useState(0); //State change for selected project element
  const [lastProject, setLastProject] = useState(0);

  const [imageShown, setImageShown] = useState(true); //State change for selected project element
  const [midAnim, setMidAnim] = useState(false); //State change for in middle of animation

  const pickProject = (e) => {
    //get index on chosen image and set selectedProject equal to it
    e.preventDefault();
    if (e.target.dataset.index === selectedProject) {
      return;
    }
    if (e.target.nodeName === "IMG") {
      setLastProject(selectedProject);
      selectProject(e.target.dataset.index);
      if (imageShown) {
        let last = document.getElementById("LastImg");
        let curr = document.getElementById("CurrentImg");
        last.classList.add("FadeOut");
        curr.classList.add("FadeIn");
      } else {
        let last = document.getElementById("LastDesc");
        let curr = document.getElementById("ProjDesc");
        last.classList.add("FadeOut");
        curr.classList.add("FadeIn");
      }
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
      let projContainer = document.getElementById("ProjectContentContainer");
      projContainer.classList.add("FlipIn");
    }
  };

  const ProjImg = () => {
    if (lastProject !== null) {
      return (
        <div id="ProjImg" style={{ display: imageShown ? "initial" : "none" }}>
          <img
            id="CurrentImg"
            src={projectData[selectedProject].photo}
            alt={projectData[selectedProject].altTxt}
            style={{ display: imageShown ? "initial" : "none" }}
            onAnimationEnd={(e) => e.target.classList.remove("FadeIn")}
          ></img>
          <img
            id="LastImg"
            src={projectData[lastProject].photo}
            alt={projectData[lastProject].altTxt}
            style={{ display: imageShown ? "initial" : "none" }}
            onAnimationEnd={(e) => e.target.classList.remove("FadeOut")}
          ></img>
        </div>
      );
    }
    return (
      <div id="ProjImg">
        <img
          id="CurrentImg"
          src={projectData[selectedProject].photo}
          alt={projectData[selectedProject].altTxt}
          style={{ display: imageShown ? "initial" : "none" }}
        ></img>
      </div>
    );
  };

  const ProjDescription = () => {
    if (lastProject !== null) {
      return (
        <div id="DescHolder" style={{ display: imageShown ? "none" : "flex" }}>
          <div id="ProjDesc" 
          style={{ display: imageShown ? "none" : "flex" }}
          onAnimationEnd={(e) => e.target.classList.remove("FadeIn")}>
            <p
              className="descText"
              style={{ fontFamily: "'Courier New', Courier, monospace" }}
            >
              {projectData[selectedProject].summaryDesc}
            </p>
            <p
              className="descText"
              style={{ fontFamily: "'Courier New', Courier, monospace" }}
            >
              {projectData[selectedProject].techDesc}
            </p>
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
          <div
                id="LastDesc"
                style={{ display: imageShown ? "none" : "flex" }}
                onAnimationEnd={(e) => e.target.classList.remove("FadeOut")}
              >
                <p
                  className="descText"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
                >
                  {projectData[lastProject].summaryDesc}
                </p>
                <p
                  className="descText"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
                >
                  {projectData[lastProject].techDesc}
                </p>
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
        </div>
      );
    }
    return (
      <div id="DescHolder" style={{ display: imageShown ? "none" : "flex" }}>
        <div id="ProjDesc" style={{ display: imageShown ? "none" : "flex" }}>
          <p
            className="descText"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            {projectData[selectedProject].summaryDesc}
          </p>
          <p
            className="descText"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            {projectData[selectedProject].techDesc}
          </p>
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
      </div>
    );
  };

  const openRepositoryLink = (e) => {
    //Get repository link from selected project
    e.preventDefault();
    if (midAnim) {
      return;
    }
    window.open(projectData[selectedProject].projectLink);
  };

  const openDeployedLink = (e) => {
    //Get deployed link from selected project
    e.preventDefault();
    if (midAnim) {
      return;
    }
    window.open(projectData[selectedProject].deployedLink);
  };

  const HelpText = () => {
    if (imageShown) {
      return (
        <p className="HelpText">Tap Inside The Image To See Related Content</p>
      );
    }
    return <p className="HelpText">Tap Inside The Border To See The Image</p>;
  };

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
        <h1 className="ProjectDisplayName">
          {projectData[selectedProject].name}
        </h1>
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
