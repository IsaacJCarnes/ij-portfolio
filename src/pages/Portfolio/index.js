import "./Portfolio.css";

import { projectData } from "./projectData.js";
import { useIsMobile } from "../../components/Helpers.js";

export default function Portfolio() {
  const isMobile = useIsMobile();

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
        <h2 className="projectTitle">{item.name}</h2>
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
    <div id="PortfolioContainer">
      <h1 className="sectionHeader">Projects</h1>
      <div id="ProjectsContainer">{projectList}</div>
    </div>
  );
}
