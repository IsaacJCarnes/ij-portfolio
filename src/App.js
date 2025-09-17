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
    <div id="FullPage">
      <div className="background"/>
      <div style={{ height: "50px" }}></div>
      <Header />
      <ContentModal
        isFlipped={true}
        content={<AboutMe />}
      />
      <ContentModal content={<Portfolio />}/>
      <ContentModal
        isFlipped={true}
        content={<Resume />}
      />
      <ContentModal
        isFlipped={false}
        content={<ContactMe />}
      />
      <Footer />
    </div>
  );
}

export default App;
