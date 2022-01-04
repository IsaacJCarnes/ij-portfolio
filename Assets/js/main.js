const showcaseArea = document.getElementById("showcaseArea");
const highlight = document.getElementById("highlight");

var Project = function (name, link, photo, altTxt) {
  this.name = name;
  this.link = link;
  this.photo = photo;
  this.altTxt = altTxt;
};

const projects = [
  new Project(
    "Maze Runner",
    "https://github.com/IsaacJCarnes/MazeGen",
    "./Assets/images/mazeGen.png",
    "The Maze Runner"
  ),
  new Project(
    "The Dog Endorsement Website",
    "https://github.com/IsaacJCarnes/DogEndorsementWebsite",
    "./Assets/images/endorsementWebsite.png",
    "The Dog Endorsement Website"
  ),
  new Project(
    "Weather Dashboard",
    "https://github.com/IsaacJCarnes/weather-dash-ij",
    "./Assets/images/weatherDash.png",
    "Weather Dashboard"
  ),
  new Project(
    "Work Calender",
    "https://github.com/IsaacJCarnes/work-calender-ij",
    "./Assets/images/workDay.png",
    "Work Day Scheduler"
  ), new Project(
    "Scaredy Cat Scratch Game",
    "https://scratch.mit.edu/projects/560457275/",
    "./Assets/images/scaredyCat.PNG",
    "Scaredy Cat on Scratch"
  ),
];

var selectedProject = null;

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
        if(selectedProject == null){ //Adds reminder when first project is clicked
            let reminderText = document.createElement("p");
            reminderText.textContent = "Click Inside the Window to Redirect to the Project";
            reminderText.setAttribute("style", "position: relative; left:"+(highlight.clientWidth/3)+"px; width: 150px; height: 10px; color:grey; font-size:5px;")
            highlight.after(reminderText);
        }
        selectProject(elem.dataset.projectNum);
    }
}

function takeToProject(){
    if(selectedProject != null){
        window.open(selectedProject.link);
    }
}
fillShowcase();
