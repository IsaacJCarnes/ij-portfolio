import {
    MazeGen,
    EndorsementWebsite,
    ScaredyCat,
    WeatherDash,
    CardGraphix,
  } from "../../assets/index.js";

  var Project = function (name, deployedLink, projectLink, photo, altTxt) {
    //Project object
    this.name = name;
    this.deployedLink = deployedLink;
    this.projectLink = projectLink;
    this.photo = photo;
    this.altTxt = altTxt;
  };

export const projectData = [
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