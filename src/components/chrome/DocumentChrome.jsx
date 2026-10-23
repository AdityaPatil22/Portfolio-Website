import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./DocumentChrome.css";

export const SECTIONS = [
  { num: 1, title: "About", path: "/" },
  { num: 2, title: "Experience", path: "/experience" },
  { num: 3, title: "Projects", path: "/projects" },
  { num: 4, title: "Skills", path: "/skills" },
  { num: 5, title: "Impact", path: "/impact" },
];

export const DOC_ID = "RFC 22";

function DocumentChrome() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="doc-header">
      <div className="doc-header-inner">
        <NavLink to="/" end className="doc-header-brand" aria-label="Aditya Patil — home">
          <span className="doc-header-brand-name">Aditya Patil</span>
          <span className="doc-header-brand-meta">Software Engineer · AI &amp; Developer Tools</span>
        </NavLink>

        <nav className="doc-nav" aria-label="Main navigation">
          {SECTIONS.map((section) => (
            <NavLink
              key={section.path}
              to={section.path}
              end={section.path === "/"}
              className={({ isActive }) =>
                "doc-nav-item" + (isActive ? " active" : "")
              }
            >
              {section.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <motion.div
        className="doc-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </header>
  );
}

export default DocumentChrome;
