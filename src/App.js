import "./App.css";
import Header from "./Components/HeaderComponents/Header";
import TechSkills from "./Components/TechnicalSkillsComponents/TechSkills";
import Projects from "./Components/ProjectsComponents/Projects";
import ContactMe from "./Components/ContactComponents/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <TechSkills />
      <ContactMe />
    </div>
  );
}

export default App;
