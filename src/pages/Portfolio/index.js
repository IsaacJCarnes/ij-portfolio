import './Portfolio.css';

import React, { useState } from "react";

import {
  MazeGen,
  EndorsementWebsite,
  ScaredyCat,
  WeatherDash,
  CardGraphix,
} from "../../assets/index.js";

export default function Portfolio() {

  var Project = function (name, deployedLink, projectLink, photo, altTxt) { //Project object
    this.name = name;
    this.deployedLink = deployedLink;
    this.projectLink = projectLink;
    this.photo = photo;
    this.altTxt = altTxt;
  };

  const projects = [ //Project array
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

  const pickProject = (e) => { //get index on chosen image and set selectedProject equal to it
    e.preventDefault();
    if (e.target.nodeName === "IMG") {
      selectProject(e.target.dataset.index);
    }
  };

  let projectList = projects.map((item, i) => ( //Creates clickable images for each project
    <div
      className="SelectorBorder"
      key={i}
    >
      <img
        data-index={i}
        src={item.photo}
        alt={item.altTxt}
        className="SelectorImg"
      ></img>
    </div>
  ));

  const openRepositoryLink = (e) => { //Get repository link from selected project
    e.preventDefault();
    window.open(projects[selectedProject].projectLink);
  };

  const openDeployedLink = (e) => { //Get deployed link from selected project
    e.preventDefault();
    window.open(projects[selectedProject].deployedLink);
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
        <h1 className='ProjectDisplayName'>{projects[selectedProject].name}</h1>
        <div className='ProjectImgContainer'>
          <img
            height="500px"
            src={projects[selectedProject].photo}
            alt={projects[selectedProject].altTxt}
          ></img></div>
        <div className="ButtonContainer d-flex flex-row align-items-around justify-content-around w-75 m-2">
          <button
            type="button"
            onClick={(e) => {openRepositoryLink(e)}}
          >
            Repository
          </button>

          <button
            type="button"
            onClick={(e) => {openDeployedLink(e)}}
          >
            Deployed
          </button>
        </div>
      </div>
    </div>
  );
}