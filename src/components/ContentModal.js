import "../css/ContentModal.css";

export default function ContentModal({
  content,
  isFlipped = false,
  isConnector = true,
}) {
  const getCircle = () => {
    if (!isConnector) {
      return <></>;
    }
    if (isFlipped) {
      return (
        <div className="circleHolder flipped">
          <div className="outerCircle flipped">
            <div className="innerCircle" />
          </div>
        </div>
      );
    }
    return (
      <div className="circleHolder">
        <div className="outerCircle">
          <div className="innerCircle" />
        </div>
      </div>
    );
  };

  const getClassName = () => {
    if (!isConnector) {
      return " noConnector";
    }
    return isFlipped ? " flipped" : "";
  };
  return (
    <div className={"ModalArea" + getClassName()}>
      <div className={"ContentArea" + (isFlipped ? " flipped" : "")}>
        <div className="innerContentArea">{content}</div>
      </div>
      {getCircle()}
    </div>
  );
}
