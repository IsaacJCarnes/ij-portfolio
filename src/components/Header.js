import "../css/Header.css";
import FabricBackground from "./FabricBackground";

export default function Header() {
  return (
    <header>
      <FabricBackground />

      <div className="content">
        <h1>Isaac Carnes' Portfolio</h1>
        <nav>
          <a href="#About">About</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Resume">Resume</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
