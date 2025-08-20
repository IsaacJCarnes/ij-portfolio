import "../css/ContentModal.css";

export default function ContentModal({ content, isFlipped = false }) {
  const getCircle = () => {
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

  return (
    <div className={"ModalArea" + (isFlipped ? " flipped" : "")}>
      <div className={"ContentArea" + (isFlipped ? " flipped" : "")}>
        {content}
      </div>
      {getCircle()}
    </div>
  );
}
