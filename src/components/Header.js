import "../css/Header.css";

import { useNavigate } from "react-router-dom";
import SVGComponent from "./SVGPath";

import Nav from "./Nav";

export default function Header() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/ij-portfolio/");
  }

  return (
    <div className="HeaderArea">
      <div className="header1" onClick={(e) => handleClick(e)}>
        Isaac Carnes
      </div>
      <div id="circleHolder">
        <div id="quarterCircle"></div>
        <div id="blockingCircle"></div>
      </div>
    </div>
  );
}
