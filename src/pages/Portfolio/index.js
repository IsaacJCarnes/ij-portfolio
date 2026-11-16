import "./Portfolio.css";

import { projectData } from "./projectData.js";

import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import FabricBackground from "../../components/FabricBackground.js";

export default function Portfolio() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const projectList = projectData.map(
    (
      item,
      i, //Creates clickable images for each project
    ) => (
      <div key={i} className="projectItem">
        <img
          data-index={i}
          src={item.photo}
          alt={item.altTxt}
          className="projectPicture largeScreens"
        />
        <div className="titleButtonBox">
          <h2 className="projectTitle perfectOutline" data-text={item.name}>
            {item.name}
          </h2>
          {item.projectLink !== "" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                openLink(item.projectLink);
              }}
            >
              <FaGithub color="white" />
            </button>
          )}
          {item.deployedLink !== "" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                openLink(item.deployedLink);
              }}
            >
              <CiGlobe color={"white"} />
            </button>
          )}
        </div>
        <img
          data-index={i}
          src={item.photo}
          alt={item.altTxt}
          className="projectPicture smallScreens"
        />
        <div className="projectSummary">
          {item.summaryDesc} {item.techDesc}
        </div>
        <FabricBackground
          borderClass="hidden"
          shadedMargin={3}
        />
      </div>
    ),
  );

  return (
    <section id="Projects" className="section-area">
      <div className="fabric-container section-title right">
        <FabricBackground
          bgClass="bg-orange initial sectionHeading"
          borderClass=""
          shadedMargin={3}
        />
        <h3 className="sectionHeader perfectOutline" data-text="Projects">
          Projects
        </h3>
      </div>
      <div>
        <div id="ProjectsContainer">{projectList}</div>
      </div>
    </section>
  );
}
