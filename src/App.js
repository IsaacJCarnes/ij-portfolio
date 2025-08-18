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
import SVGComponent from "./components/SVGPath";

function App() {

  const basePath = "/ij-portfolio/";
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className='FullPage'>
      <Header />
      <SVGComponent />
      <Footer />
    </div>
  );
}

export default App;
