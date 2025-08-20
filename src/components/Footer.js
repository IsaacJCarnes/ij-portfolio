import "../css/Footer.css";

import githubIcon from "../assets/icon-github-black.png";
import linkedinIcon from "../assets/icon-linkedin-black.png";
import ContentModal from "./ContentModal";

export default function Footer() {
  const openGithub = (e) => {
    //Opens my github
    e.preventDefault();
    window.open("https://github.com/IsaacJCarnes");
  };

  const openLinkedin = (e) => {
    //Opens my linkedIn
    e.preventDefault();
    window.open("https://www.linkedin.com/in/isaac-j-carnes/");
  };

  return (
    <ContentModal
      isConnector={false}
      content={
        <div className="FooterContainer">
          <button
            className=""
            type="button"
            onClick={(e) => {
              openGithub(e);
            }}
          >
            <img src={githubIcon} alt="github" width="auto" height="100%"></img>
          </button>
          <button
            type="button"
            onClick={(e) => {
              openLinkedin(e);
            }}
          >
            <img
              src={linkedinIcon}
              alt="linkedIn"
              width="auto"
              height="100%"
            ></img>
          </button>
        </div>
      }
    />
  );
}
