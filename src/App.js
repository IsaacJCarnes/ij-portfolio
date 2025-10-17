import "./css/App.css";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import WildPage from "./pages/WildPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav"
import ContentModal from "./components/ContentModal";
import GradientContainer from "./components/GradientContainer";

import { useState, useEffect } from "react";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY / 10);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="FullPage">

      <div className="backgroundContainer">
        <div
          className="background"
          style={{ backgroundPositionX: offset + "px" }}
        />          
        <GradientContainer />
      </div>
      <Nav />
      <div className="spacer"></div>
      <Header />
      <ContentModal isFlipped={true} content={<AboutMe />} circleName="circle2"/>
      <ContentModal content={<Portfolio />} circleName="circle3"/>
      <ContentModal isFlipped={true} content={<Resume />} circleName="circle4"/>
      <ContentModal isFlipped={false} content={<ContactMe />} circleName="circle5"/>
      <Footer />      
    </div>
  );
}

export default App;
