import "../css/Nav.css";

export default function Nav() {
  const scrollToTarget = (event, targetName) => {
    event.preventDefault();
    const element = document.getElementById(targetName);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="fabric">
        <div className="custom-dash-border dash-top dash-horizontal" />
        <div className="custom-dash-border dash-right dash-vertical" />
        <div className="custom-dash-border dash-bottom dash-horizontal" />
        <div className="custom-dash-border dash-left dash-vertical" />
      </div>

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
