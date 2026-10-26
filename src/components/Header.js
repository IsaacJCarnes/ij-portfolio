import "../css/Header.css";
import FabricBackground from "./FabricBackground";

export default function Header() {
  return (
    <header id="header-content">
      <h1 className="fabric-container">
        <FabricBackground
          bgClass="bg-orange initial"
          borderClass=""
          shadedMargin={5}
        />
        <span className="perfectOutline" data-text="Isaac Carnes' Portfolio">
          Isaac Carnes' Portfolio
        </span>
      </h1>

      <nav>
        <a href="#About" className="fabric-container rotate-left">
          <FabricBackground borderClass="hidden" shadedMargin={3} />
          <span className="perfectOutline" data-text="About">
            About
          </span>
        </a>

        <a href="#Projects" className="fabric-container rotate-right">
          <FabricBackground borderClass="hidden" shadedMargin={3} />
          <span className="perfectOutline" data-text="Projects">
            Projects
          </span>
        </a>
        <a href="#Resume" className="fabric-container rotate-left">
          <FabricBackground borderClass="hidden" shadedMargin={3} />
          <span className="perfectOutline" data-text="Resume">
            Resume
          </span>
        </a>
        <a href="#Contact" className="fabric-container rotate-right">
          <FabricBackground borderClass="hidden" shadedMargin={3} />
          <span className="perfectOutline" data-text="Contact">
            Contact
          </span>
        </a>
      </nav>
    </header>
  );
}
