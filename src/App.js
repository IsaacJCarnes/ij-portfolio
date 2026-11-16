import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

import Footer from "./components/Footer";
import Nav from "./components/Header";

function App() {
  return (
    <main>
      <div id="PageBackground"></div>
      <Nav />
      <AboutMe />
      <Portfolio />
      <Resume />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
