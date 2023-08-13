import "./styles/global.css";
import { useState } from "react";
import MenuBar from "./components/menuBar";
import Home from "./components/home";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Portafolio from "./components/portafolio";
import Contact from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState("Home");

  const handleView = (view) => {
    setView(view);
    console.log(view);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <MenuBar handleView={handleView} />
          {view === "Home" && <Home />}
          {view === "Skills" && <Skills />}
          {view === "Experience" && <Experience />}
          {view === "Portafolio" && <Portafolio />}
          {view === "Contact" && <Contact />}
        </section>
      </main>
    </div>
  );
}

export default App;
