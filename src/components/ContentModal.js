import "../css/ContentModal.css";

import "../components/Helpers.js";
import { useIsMobile } from "../components/Helpers.js";

export default function ContentModal({
  content,
  isFlipped = false,
  hasConnector = true, //connector from previous
  isConnector = true, //connector to next
  circleName = "", //Used to add ID to circle
}) {
  const getCircle = () => {
    if (!isConnector) {
      return <></>;
    }
    var extraClass = "";
    if (isFlipped) {
      extraClass = `${extraClass} flipped`;
    }
    return (
      <div className={`circleHolder${extraClass}`}>
        <div className={`outerCircle${extraClass}`}>
          <div className={`innerCircle${extraClass}`}/>
        </div>
        <div id={circleName} className="circleTag"/>
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
    <div
      className={
        "ModalArea" + getClassName() + (useIsMobile() ? " isMobile" : "")
      }
    >
      <div
        className={
          "ContentArea" +
          (isFlipped ? " flipped" : "") +
          (hasConnector ? "" : " noBorder")
        }
      >
        <div className="innerContentArea">{content}</div>
      </div>
      {getCircle()}
    </div>
  );
}
