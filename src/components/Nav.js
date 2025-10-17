import "../css/Nav.css";

export default function Nav() {
  const scrollToTarget = (event, targetName) => {
    event.preventDefault();
    const element = document.getElementById(targetName);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="navBar">
      <div className="frostedGlass" />
      <div className="content">
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
      </div>
    </div>
  );
}
