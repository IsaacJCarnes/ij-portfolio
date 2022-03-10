import './css/App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='FullPage d-flex flex-column w-100 h-100 align-items-center'>
      <Header/>
      <div className="ContentDiv d-flex mt-2 mb-3 justify-content-center">
        <Routes>
          <Route exact path="/ij-portfolio" element={<AboutMe />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contactMe" element={<ContactMe />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/*" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
