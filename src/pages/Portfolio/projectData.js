import {
    MazeGen,
    EndorsementWebsite,
    tilemapCompiler,
    TilesetViewer,
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
      "Tileset Viewer",
      "https://isaacjcarnes.github.io/TilesetViewer/",
      "https://github.com/IsaacJCarnes/TilesetViewer",
      TilesetViewer,
      "Tileset Viewer",
      "",
      "Tilset viewer displays a grid of tessellating tiles that I designed to seamlessly connect in any arrangement. Each tile is randomly selected from a set of unique designs and displayed with varying rotations/orientations, creating unique patterns between the tiles."
    ),
    new Project(
      "Tilemap Compiler",
      "",
      "https://github.com/IsaacJCarnes/Tilemap-Compiler",
      tilemapCompiler,
      "Tilemap Compiler project made in Godot.",
      "Tilemap Compiler is a small application made in Godot to assist with assembling the tileset for Tileset Viewer. The application creates a tilemap from a list of image files, allowing for easy frequent updates to the tilemap. This allows me to quickly add and modify the tiles in the tilemap for Tileset Viewer.",
      ""
    ),
    new Project(
      "Card Graphix",
      "https://card-graphix.web.app/",
      "https://github.com/IsaacJCarnes/card-graphix-firebase",
      CardGraphix,
      "Card Building Website",
      "Used for creating and customizing buisness cards and exporting the design to a pdf.",
      "Built using Apollo, Bootstrap, Express, JavaScript, React JS and Mongoose. Hosted on Firebase and also uses the Cloudinary API for uploading images to the site."
    ),
    new Project(
      "The Dog Endorsement Website",
      "https://dog-endorsement-website.herokuapp.com/",
      "https://github.com/IsaacJCarnes/DogEndorsementWebsite",
      EndorsementWebsite,
      "The Dog Endorsement Website",
      "Used for finding adoptable dogs around a zipcode, with the added option for dog breed preference.",
      "Built using Handlebars.js and Bootstrap, hosted using Github Pages. Uses the Petfinder API to get the animal search data."
    ),    
  ];