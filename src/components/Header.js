import "../css/Header.css";
import FabricBackground from "./FabricBackground";

export default function Header() {
  const scrollToTarget = (event, targetName) => {
    event.preventDefault();
    const element = document.getElementById(targetName);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <FabricBackground />

      <div className="content">
        <h1>Isaac Carnes' Portfolio</h1>
        <nav>
          <button
            onClick={(e) => {
              scrollToTarget(e, "circle1");
            }}
          >
            About Me
          </button>
          <button
            onClick={(e) => {
              scrollToTarget(e, "circle2");
            }}
          >
            Portfolio
          </button>
          <button
            onClick={(e) => {
              scrollToTarget(e, "circle3");
            }}
          >
            Resume
          </button>
          <button
            onClick={(e) => {
              scrollToTarget(e, "circle4");
            }}
          >
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  );
}
