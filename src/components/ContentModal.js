import "../css/ContentModal.css";

export default function ContentModal({ content, isFlipped = false }) {
  const getCircle = () => {
    if (!isFlipped) {
      return (
        <div className="circleArea">
            <span />
          <div className="circleHolder">
            <div className="quarterCircle"></div>
            <div className="blockingCircle"></div>
          </div>
        </div>
      );
    }
    return <></>;
  };
  const getFlippedCircle = () => {
    if (isFlipped) {
      return (
        <div className="circleHolder flipped">
          <div className="quarterCircle"></div>
          <div className="blockingCircle"></div>
        </div>
      );
    }
    return <></>;
  };
  return (
    <div className={"ModalArea" + (isFlipped ? " flipped" : "")}>
      {getFlippedCircle()}
      <div className={"ContentArea" + (isFlipped ? " flipped" : "")}>
        {content}
      </div>
      {getCircle()}
    </div>
  );
}
