import "./css/App.css";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import WildPage from "./pages/WildPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentModal from "./components/ContentModal";

function App() {
  return (
    <div className="FullPage">
      <div className="background" />
      <div style={{ height: "50px" }}></div>
      <Header />
      <ContentModal
        isFlipped={true}
        content={<div style={{ height: "300px" }}>Content</div>}
      />
      <ContentModal
        isFlipped={false}
        content={<div style={{ height: "300px" }}>Content</div>}
      />
      <Footer />
    </div>
  );
}

export default App;
