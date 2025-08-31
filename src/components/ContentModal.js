import "../css/ContentModal.css";

import "../components/Helpers.js"
import { useIsMobile } from "../components/Helpers.js";

export default function ContentModal({
  content,
  isFlipped = false,
  hasConnector = true, //connector from previous
  isConnector = true, //connector to next
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
    <div className={"ModalArea" + getClassName() + (useIsMobile() ? " isMobile" : "")}>
      <div className={"ContentArea" + (isFlipped ? " flipped" : "") +  (hasConnector? "" : " noBorder")}>
        <div className="innerContentArea">{content}</div>
      </div>
      {getCircle()}
    </div>
  );
}
