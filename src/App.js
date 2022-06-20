import './css/App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import WildPage from "./pages/WildPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const basePath = "/ij-portfolio/";
  return (
    <div className='FullPage d-flex flex-column align-items-center'>
      <Header/>
      <div className="ContentDiv d-flex mt-2 mb-3 justify-content-center">
        <Routes>
          <Route exact path={basePath} element={<AboutMe />} />
          <Route exact path={basePath + "portfolio"} element={<Portfolio />} />
          <Route exact path={basePath + "contactMe"} element={<ContactMe />} />
          <Route exact path={basePath + "resume"} element={<Resume />} />
          <Route exact path="/*" element={<WildPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
