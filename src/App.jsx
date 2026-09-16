import Sidebar from "./components/Sidebar";
import About from "./components/AboutMe";
import Stars from "./components/Stars";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <Stars />
      <Sidebar />

      <main className="relative z-10 lg:ml-[320px]">
        <About />
      </main>

      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
