const showcaseArea = document.getElementById("showcaseArea");
const highlight = document.getElementById("highlight");

var Project = function (name, deployedLink, projectLink, photo, altTxt) {
  this.name = name;
  this.deployedLink = deployedLink;
  this.projectLink = projectLink;
  this.photo = photo;
  this.altTxt = altTxt;
};

const projects = [
  new Project(
    "Maze Runner",
    "https://isaacjcarnes.github.io/MazeGen/",
    "https://github.com/IsaacJCarnes/MazeGen",
    "./Assets/images/mazeGen.png",
    "The Maze Runner"
  ),
  new Project(
    "The Dog Endorsement Website",
    "https://dog-endorsement-website.herokuapp.com/",
    "https://github.com/IsaacJCarnes/DogEndorsementWebsite",
    "./Assets/images/endorsementWebsite.png",
    "The Dog Endorsement Website"
  ),
  new Project(
    "Weather Dashboard",
    "https://isaacjcarnes.github.io/weather-dash-ij/",
    "https://github.com/IsaacJCarnes/weather-dash-ij",
    "./Assets/images/weatherDash.png",
    "Weather Dashboard"
  ),
  new Project(
    "Work Calender",
    "https://isaacjcarnes.github.io/work-calender-ij/",
    "https://github.com/IsaacJCarnes/work-calender-ij",
    "./Assets/images/workDay.png",
    "Work Day Scheduler"
  ), new Project(
    "Scaredy Cat Scratch Game",
    "https://scratch.mit.edu/projects/560457275/fullscreen/",
    "https://scratch.mit.edu/projects/560457275/",
    "./Assets/images/scaredyCat.PNG",
    "Scaredy Cat on Scratch"
  ),
];

var selectedProject = null;

function showModal(projectNum){
  selectedProject = projects[projectNum];

  let modal_title = document.getElementById('modal-title');
  modal_title.textContent = selectedProject.name;

  let modal_img = document.getElementById('modal-img');
  modal_img.setAttribute("src", selectedProject.photo);
  modal_img.setAttribute("alt", selectedProject.alt);

  let modal_deployed = document.getElementById('modal-deployed');
  modal_deployed.setAttribute("href", selectedProject.deployedLink);

  let modal_project = document.getElementById('modal-project');
  modal_project.setAttribute("href", selectedProject.projectLink);
};

function fillShowcase(){
    projects.forEach(project => {
        let picHolder = document.createElement("div");
        picHolder.setAttribute("class", "showcaseBox");
        let showcaseLink = document.createElement("a");
        //showcaseLink.setAttribute("href", project.link);
        let showcaseImg = document.createElement("img");
        showcaseImg.setAttribute("src", project.photo);
        showcaseImg.setAttribute("alt", project.alt);
        showcaseArea.appendChild(picHolder);
        picHolder.appendChild(showcaseLink);
        showcaseLink.appendChild(showcaseImg);
        showcaseImg.dataset.projectNum = projects.indexOf(project);
    });
}

const highlightPhotoSize = 240
function selectProject(projectNum){
    highlight.innerHTML = "";
    selectedProject = projects[projectNum];

    let heading = document.createElement("h2");
    heading.textContent = selectedProject.name;
    heading.setAttribute("class", "text-light");
    heading.setAttribute("style", "text-align: center;");
    highlight.appendChild(heading);
    
    let picHolder = document.createElement("div");
    picHolder.setAttribute("class", "border")
    picHolder.setAttribute("style", "width:" + highlightPhotoSize + "px; height:" + highlightPhotoSize +"px; margin:10px;")

    let showcaseLink = document.createElement("a");
    //showcaseLink.setAttribute("href", selectedProject.link);

    let showcaseImg = document.createElement("img");
    showcaseImg.setAttribute("style", "width:" + (highlightPhotoSize-3) + "px; height:" + (highlightPhotoSize-3) +"px;")
    showcaseImg.setAttribute("src", selectedProject.photo);
    showcaseImg.setAttribute("alt", selectedProject.alt);
    
    highlight.appendChild(picHolder);
    picHolder.appendChild(showcaseLink);
    showcaseLink.appendChild(showcaseImg);
}

function showcaseSelect(event){
  let elem = event.target;
  if(elem.nodeName == "IMG"){
    //selectProject(elem.dataset.projectNum);
    showModal(elem.dataset.projectNum);
  } else {
    //document.getElementById('myModal').modal('hide');
  }
}

function takeToProject(){
    if(selectedProject != null){
      window.open(selectedProject.link);
    }
}
fillShowcase();
