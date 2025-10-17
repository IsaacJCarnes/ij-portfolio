import "../css/Header.css";

import ContentModal from "./ContentModal";

export default function Header() {
  return (
    <ContentModal
      hasConnector={false}
      circleName="circle1"
      content={
        <div className="header">
          <h1>Isaac Carnes' Portfolio</h1>
        </div>
      }
    />
  );
}
