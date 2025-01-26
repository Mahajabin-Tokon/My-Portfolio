import Hero from "../Sections/Hero";
import Navbar from "../Sections/Navbar";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Work from "../Sections/Work";

const Home = () => {
  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Work></Work>
      <Projects></Projects>
    </div>
  );
};

export default Home;
