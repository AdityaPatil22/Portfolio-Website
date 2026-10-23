import { Routes, Route } from "react-router-dom";
import DocumentChrome, { DOC_ID } from "./components/chrome/DocumentChrome";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Impact from "./pages/impact/Impact";
import NotFound from "./pages/not-found/NotFound";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <DocumentChrome />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="doc-colophon">
        <span>{DOC_ID}</span>
        <span>Aditya Patil</span>
        <span className="colophon-note">This document was typeset by hand.</span>
      </footer>
    </div>
  );
}

export default App;
