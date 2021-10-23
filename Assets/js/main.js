const showcaseArea = document.getElementById("showcaseArea");

var Project = function (name, link, photo, altTxt) {
  this.name = name;
  this.link = link;
  this.photo = photo;
  this.altTxt = altTxt;
};

const projects = [
  new Project(
    "Scaredy Cat Scratch Game",
    "https://scratch.mit.edu/projects/560457275/",
    "./Assets/images/scaredyCat.PNG",
    "Scaredy Cat on Scratch"
  ),
  new Project(
    "Maze Runner",
    "https://github.com/IsaacJCarnes/MazeGen",
    "./Assets/images/mazeGen.PNG",
    "The Maze Runner"
  ),
  new Project(
    "Weather Dashboard",
    "https://github.com/IsaacJCarnes/weather-dash-ij",
    "./Assets/images/weatherDash.PNG",
    "Weather Dashboard"
  ),
  new Project(
    "Work Calender",
    "https://github.com/IsaacJCarnes/work-calender-ij",
    "./Assets/images/workDay.PNG",
    "Work Day Scheduler"
  )
];

function fillShowcase(){
    projects.forEach(project => {
        let picHolder = document.createElement("div");
        picHolder.setAttribute("class", "showcaseBox");
        let showcaseLink = document.createElement("a");
        showcaseLink.setAttribute("href", project.link);
        let showcaseImg = document.createElement("img");
        showcaseImg.setAttribute("src", project.photo);
        showcaseImg.setAttribute("alt", project.alt);
        showcaseArea.appendChild(picHolder);
        picHolder.appendChild(showcaseLink);
        showcaseLink.appendChild(showcaseImg);
    });
}

fillShowcase();
