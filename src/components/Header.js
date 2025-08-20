import "../css/Header.css";

import { useNavigate } from "react-router-dom";
import ContentModal from "./ContentModal";

import Nav from "./Nav";

export default function Header() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/ij-portfolio/");
  }
return (
    <ContentModal content={<div className="header"><h1>Isaac Carnes' Portfolio</h1></div>}/>
);
  /*return (
    <ContentModal
    <div className="HeaderArea">
      <div className="header1" onClick={(e) => handleClick(e)}>
        Isaac Carnes
      </div>
      <div id="circleHolder">
        <div id="quarterCircle"></div>
        <div id="blockingCircle"></div>
      </div>
    </div>
  );*/
}
