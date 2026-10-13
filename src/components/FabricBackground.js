import "../css/FabricBackground.css";

export default function FabricBackground({bgClass = "bg-orange", borderClass=""}) {
  return (
      <div className={"fabric-background " + bgClass}>
        <div className={"custom-dash-border dash-top dash-horizontal "+borderClass} />
        <div className={"custom-dash-border dash-right dash-vertical "+borderClass} />
        <div className={"custom-dash-border dash-bottom dash-horizontal "+borderClass} />
        <div className={"custom-dash-border dash-left dash-vertical "+borderClass} />
        <div className="shaded-area" />
      </div>
  );
}
