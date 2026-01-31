import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";
import Home from "./pages/home-page/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<><Home /><About /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;
