import "../css/FabricBackground.css";

export default function FabricBackground({bgClass = "bg-orange"}) {
  return (
      <div className={"fabric-background " + bgClass}>
        <div className="custom-dash-border dash-top dash-horizontal" />
        <div className="custom-dash-border dash-right dash-vertical" />
        <div className="custom-dash-border dash-bottom dash-horizontal" />
        <div className="custom-dash-border dash-left dash-vertical" />
        <div className="shaded-area" />
      </div>
  );
}
