import "./Portfolio.css";

import { projectData } from "./projectData.js";
import { useIsMobile } from "../../components/Helpers.js";

import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function Portfolio() {
  const isMobile = useIsMobile();


  const openLink = (url) => {
    window.open(url, "_blank");
  }

  const projectList = projectData.map(
    (
      item,
      i //Creates clickable images for each project
    ) => (
      <div key={i} className={isMobile ? 'projectItem mobile' : 'projectItem'}>
        {isMobile ? (
          <></>
        ) : (
          <img
            data-index={i}
            src={item.photo}
            alt={item.altTxt}
            className={"projectPicture"}
          />
        )}
        <div className="titleButtonBox"><h2 className="projectTitle">{item.name}</h2>{item.projectLink !== "" && <button onClick={(e) => {e.preventDefault(); openLink(item.projectLink)}}><FaGithub color="white"/></button>}{item.deployedLink !== "" && <button onClick={(e) => {e.preventDefault(); openLink(item.deployedLink)}}><CiGlobe color={"white"}/></button>}</div>
        {isMobile ? (
          <img
            data-index={i}
            src={item.photo}
            alt={item.altTxt}
            className={"projectPicture"}
          />
        ) : (
          <></>
        )}
        <div className="projectSummary">
          {item.summaryDesc} {item.techDesc}
        </div>
      </div>
    )
  );

  return (
    <div className="sectionContainer" id="PortfolioContainer">
      <h1 className="sectionHeader">Projects</h1>
      <div id="ProjectsContainer">{projectList}</div>
    </div>
  );
}
