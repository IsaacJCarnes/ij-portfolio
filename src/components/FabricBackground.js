import "../css/FabricBackground.css";

export default function FabricBackground() {
  return (
      <div className="fabric-background">
        <div className="custom-dash-border dash-top dash-horizontal" />
        <div className="custom-dash-border dash-right dash-vertical" />
        <div className="custom-dash-border dash-bottom dash-horizontal" />
        <div className="custom-dash-border dash-left dash-vertical" />
      </div>
  );
}
