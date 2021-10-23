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
    "Placeholder",
    "",
    "https://via.placeholder.com/160",
    "Placeholder Image"
  ),
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
