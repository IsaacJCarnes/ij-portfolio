import "./css/App.css";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

import Footer from "./components/Footer";
import Nav from "./components/Nav"
import ContentModal from "./components/ContentModal";

function App() {
  return (
    <main>
      <Nav />
      <div className="spacer"></div>
      <ContentModal isFlipped={true} content={<AboutMe />} circleName="circle2"/>
      <ContentModal content={<Portfolio />} circleName="circle3"/>
      <ContentModal isFlipped={true} content={<Resume />} circleName="circle4"/>
      <ContentModal isFlipped={false} content={<ContactMe />} circleName="circle5"/>
      <Footer />      
    </main>
  );
}

export default App;
