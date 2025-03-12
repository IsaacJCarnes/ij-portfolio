import './css/App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import WildPage from "./pages/WildPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MovingDots from "./components/MovingDots";
import ScrollListener from './components/ScrollListener';
import ScrollComponent from './components/ScrollComponent';

function App() {

  const basePath = "/ij-portfolio/";
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className='FullPage d-flex flex-column align-items-center'>
      <Header />
      <div className="ContentDiv">
        <ScrollListener scrollProp={scrollPosition} setScrollProp={setScrollPosition} />
        <div>{scrollPosition}</div>
        <ScrollComponent scrollProp={scrollPosition} startX={0} startY={0}>
          <AboutMe />
        </ScrollComponent>
        <ScrollComponent scrollProp={scrollPosition} width={1500} height={600} startY={-600}>
          <Portfolio />
        </ScrollComponent>
        <ScrollComponent scrollProp={scrollPosition} width={1000} startX={2500} movingRight={false}>
          <Resume />
        </ScrollComponent>
      </div>
      <MovingDots />
      <Footer />
    </div>
  );
}

export default App;
