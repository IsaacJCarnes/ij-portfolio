import {
    MazeGen,
    EndorsementWebsite,
    ScaredyCat,
    WeatherDash,
    CardGraphix,
  } from "../../assets/index.js";

  var Project = function (name, deployedLink, projectLink, photo, altTxt, summaryDesc, techDesc) {
    //Project object
    this.name = name;
    this.deployedLink = deployedLink;
    this.projectLink = projectLink;
    this.photo = photo;
    this.altTxt = altTxt;
    this.summaryDesc = summaryDesc;
    this.techDesc = techDesc
  };

export const projectData = [
    //Project array
    new Project(
      "Card Graphix",
      "https://card-graphix.web.app/",
      "https://github.com/IsaacJCarnes/card-graphix-firebase",
      { CardGraphix }.CardGraphix,
      "Card Building Website",
      "Used for creating and customizing buisness cards and exporting the design to a pdf.",
      "Built using Apollo, Bootstrap, Express, JavaScript, React JS and Mongoose. Hosted on Firebase and also uses the Cloudinary API for uploading images to the site."
    ),
    new Project(
      "The Dog Endorsement Website",
      "https://dog-endorsement-website.herokuapp.com/",
      "https://github.com/IsaacJCarnes/DogEndorsementWebsite",
      { EndorsementWebsite }.EndorsementWebsite,
      "The Dog Endorsement Website",
      "Used for finding adoptable dogs around a zipcode, with the added option for dog breed preference.",
      "Built using Handlebars.js and Bootstrap, hosted using Github Pages. Uses the Petfinder API to get the animal search data."
    ),
    new Project(
      "Maze Runner",
      "https://isaacjcarnes.github.io/MazeGen/",
      "https://github.com/IsaacJCarnes/MazeGen",
      { MazeGen }.MazeGen,
      "The Maze Runner",
      "Several mazes for the user to try and get their best time on.",
      "Built using UIkit, hosted on Github Pages. Uses the Giphy and ACNH Apis."
    ),
    new Project(
      "Weather Dashboard",
      "https://isaacjcarnes.github.io/weather-dash-ij/",
      "https://github.com/IsaacJCarnes/weather-dash-ij",
      { WeatherDash }.WeatherDash,
      "Weather Dashboard",
      "Used for looking at 7 day forecast for a specfic city.",
      "Built using Open Weather API and hosted on Github Pages."
    ),
    new Project(
      "Scaredy Cat Scratch Game",
      "https://scratch.mit.edu/projects/560457275/fullscreen/",
      "https://scratch.mit.edu/projects/560457275/",
      { ScaredyCat }.ScaredyCat,
      "Scaredy Cat on Scratch",
      "Small game on Scratch to demonstrate effective game logic.",
      ""
    ),
  ];