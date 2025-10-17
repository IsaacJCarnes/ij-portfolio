import "../css/GradientContainer.css";


export default function GradientContainer(props) {
  return (
    <div className="gradientContainer">
        {props.children}
    </div>
  );
}
