import { motion, useScroll } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import "./DocumentChrome.css";

export const SECTIONS = [
  { num: 1, title: "About", path: "/" },
  { num: 2, title: "Experience", path: "/experience" },
  { num: 3, title: "Projects", path: "/projects" },
  { num: 4, title: "Skills", path: "/skills" },
  { num: 5, title: "Impact", path: "/impact" },
];

export const DOC_ID = "RFC 22";
export const DOC_DATE = "October 2026";

const UNNUMBERED = { num: "?", title: "Unnumbered" };

function DocumentChrome() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();

  const current =
    SECTIONS.find((s) => s.path === pathname) ?? UNNUMBERED;

  return (
    <>
      {/* Running header */}
      <header className="doc-header">
        <div className="doc-header-inner">
          <div className="doc-header-left">
            <span className="doc-header-id">{DOC_ID}</span>
            <span className="doc-header-section">
              § {current.num} {current.title}
            </span>
          </div>
          <span className="doc-header-date">{DOC_DATE}</span>
        </div>
        <motion.div
          className="doc-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </header>

      {/* Table of contents — desktop sidebar */}
      <aside className="doc-toc" aria-label="Table of contents">
        <p className="doc-toc-title">Contents</p>
        <nav>
          {SECTIONS.map((s) => (
            <NavLink
              key={s.path}
              to={s.path}
              end={s.path === "/"}
              className={({ isActive }) =>
                "doc-toc-item" + (isActive ? " active" : "")
              }
            >
              <span className="doc-toc-num">§{s.num}</span>
              <span className="doc-toc-label">{s.title}</span>
              <span className="doc-toc-leader" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Section bar — mobile */}
      <nav className="doc-bottom-nav" aria-label="Sections">
        {SECTIONS.map((s) => (
          <NavLink
            key={s.path}
            to={s.path}
            end={s.path === "/"}
            className={({ isActive }) =>
              "doc-bottom-item" + (isActive ? " active" : "")
            }
          >
            <span className="doc-bottom-num">§{s.num}</span>
            <span className="doc-bottom-label">{s.title}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default DocumentChrome;
