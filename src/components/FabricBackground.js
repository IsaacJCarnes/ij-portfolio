import "../css/FabricBackground.css";

export default function FabricBackground({bgClass = "bg-orange", borderClass="", shadeAmount=0.4, shadedMargin=10}) {
  return (
      <div style={{"--unshaded-margin": `${shadedMargin}px`, "--shade-amount": shadeAmount}}className={"fabric-background " + bgClass}>
        <div className={"custom-dash-border dash-top dash-horizontal "+borderClass} />
        <div className={"custom-dash-border dash-right dash-vertical "+borderClass} />
        <div className={"custom-dash-border dash-bottom dash-horizontal "+borderClass} />
        <div className={"custom-dash-border dash-left dash-vertical "+borderClass} />
        <div className="shaded-area" />
      </div>
  );
}
