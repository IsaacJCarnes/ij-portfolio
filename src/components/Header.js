import "../css/Header.css";
import FabricBackground from "./FabricBackground";

export default function Header() {
  return (
    <header>
      <FabricBackground />

      <div id="header-content">
        <h1 className="perfectOutline" data-text="Isaac Carnes' Portfolio">Isaac Carnes' Portfolio</h1>
        <nav>
          <a href="#About" className="perfectOutline" data-text="About">About</a>
          <a href="#Portfolio" className="perfectOutline" data-text="Portfolio">Portfolio</a>
          <a href="#Resume" className="perfectOutline" data-text="Resume">Resume</a>
          <a href="#Contact" className="perfectOutline" data-text="Contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
