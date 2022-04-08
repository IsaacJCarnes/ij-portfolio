import "./Portfolio.css";

import React, { useState } from "react";

import {
  MazeGen,
  EndorsementWebsite,
  ScaredyCat,
  WeatherDash,
  CardGraphix,
} from "../../assets/index.js";

export default function Portfolio() {
  var Project = function (name, deployedLink, projectLink, photo, altTxt) {
    //Project object
    this.name = name;
    this.deployedLink = deployedLink;
    this.projectLink = projectLink;
    this.photo = photo;
    this.altTxt = altTxt;
  };

  const projects = [
    //Project array
    new Project(
      "Card Graphix",
      "https://card-graphix.herokuapp.com/",
      "https://github.com/wl0194/card-graphix",
      { CardGraphix }.CardGraphix,
      "Card Building Website"
    ),
    new Project(
      "The Dog Endorsement Website",
      "https://dog-endorsement-website.herokuapp.com/",
      "https://github.com/IsaacJCarnes/DogEndorsementWebsite",
      { EndorsementWebsite }.EndorsementWebsite,
      "The Dog Endorsement Website"
    ),
    new Project(
      "Maze Runner",
      "https://isaacjcarnes.github.io/MazeGen/",
      "https://github.com/IsaacJCarnes/MazeGen",
      { MazeGen }.MazeGen,
      "The Maze Runner"
    ),
    new Project(
      "Weather Dashboard",
      "https://isaacjcarnes.github.io/weather-dash-ij/",
      "https://github.com/IsaacJCarnes/weather-dash-ij",
      { WeatherDash }.WeatherDash,
      "Weather Dashboard"
    ),
    new Project(
      "Scaredy Cat Scratch Game",
      "https://scratch.mit.edu/projects/560457275/fullscreen/",
      "https://scratch.mit.edu/projects/560457275/",
      { ScaredyCat }.ScaredyCat,
      "Scaredy Cat on Scratch"
    ),
  ];

  const [selectedProject, selectProject] = useState(0); //State change for selected project element

  const pickProject = (e) => {
    //get index on chosen image and set selectedProject equal to it
    e.preventDefault();
    if (e.target.nodeName === "IMG") {
      selectProject(e.target.dataset.index);
    }
  };

  let projectList = projects.map(
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
    console.log(imageShown);
    let projContainer = document.getElementById("ProjectContentContainer");
    projContainer.classList.add("FlipIn");
  };

  const ProjImg = () => {
    return (
      <img
        id="ProjImg"
        height="500px"
        src={projects[selectedProject].photo}
        alt={projects[selectedProject].altTxt}
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
    window.open(projects[selectedProject].projectLink);
  };

  const openDeployedLink = (e) => {
    //Get deployed link from selected project
    e.preventDefault();
    if(midAnim){
      return;
    }
    window.open(projects[selectedProject].deployedLink);
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
        <h1 className="ProjectDisplayName">{projects[selectedProject].name}</h1>
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
