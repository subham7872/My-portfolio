import "./App.css";
import Skill from "./components/Skill";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
