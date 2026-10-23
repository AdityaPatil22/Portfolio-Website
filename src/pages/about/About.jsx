import ProfilePic from "../../assets/profile-pic.jpeg";
import "./About.css";

const RESUME_URL = "https://aditya-patil-resume.my.canva.site/";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-patil-596413223/" },
  { label: "GitHub", href: "https://github.com/AdityaPatil22" },
  { label: "LeetCode", href: "https://leetcode.com/u/aditya1592/" },
];

function About() {
  return (
    <article className="doc-page about-document" id="about">
      {/* RFC header block */}
      <header className="rfc-head">
        <dl className="rfc-meta">
          <div className="rfc-meta-row">
            <dt>Request for Comments</dt>
            <dd>22</dd>
          </div>
          <div className="rfc-meta-row">
            <dt>Category</dt>
            <dd>Full Stack &amp; AI Engineering</dd>
          </div>
          <div className="rfc-meta-row">
            <dt>Status</dt>
            <dd>Accepting interesting problems</dd>
          </div>
          <div className="rfc-meta-row">
            <dt>Expires</dt>
            <dd>Never</dd>
          </div>
        </dl>
        <div className="rfc-author-block">
          <img className="rfc-portrait" src={ProfilePic} alt="Portrait of Aditya Patil" />
          <div className="rfc-author-lines">
            <p className="rfc-author-name">A. Patil</p>
            <p className="rfc-author-org">Red Hat</p>
            <p className="rfc-author-loc">Pune, India</p>
          </div>
        </div>
      </header>

      {/* Document title */}
      <h1 className="rfc-title">Aditya Patil</h1>
      <p className="rfc-subtitle">Software Engineer — Full Stack &amp; AI Applications</p>

      {/* Abstract */}
      <section className="rfc-abstract">
        <h2 className="doc-subheading">Abstract</h2>
        <p className="rfc-prose">
          This document describes a software engineer who builds scalable,
          production-grade applications across the full stack. The author
          currently works at the intersection of software engineering and AI,
          using LLMs to improve developer workflows and building tools people
          genuinely rely on.
        </p>
      </section>

      {/* §1 Introduction */}
      <section className="rfc-section">
        <h2 className="doc-subheading">
          <span className="secnum">1</span>Introduction
        </h2>
        <p className="rfc-prose">
          What began as an interest in technology evolved into a passion for
          software engineering. Today I work at the intersection of software
          engineering and AI: using LLMs to improve developer workflows, and
          building tools people genuinely rely on.
        </p>
        <p className="rfc-prose">
          The rest of this document describes where that work has happened
          (§2), what it has produced (§3, §4), and what it has given back (§5).
        </p>
      </section>

      {/* §1.1 – §1.3 Capabilities */}
      <section className="rfc-section">
        <h3 className="doc-subheading rfc-subsection">
          <span className="secnum">1.1</span>AI Engineering
        </h3>
        <p className="rfc-req">
          Systems the author builds <span className="rfc-keyword">MUST</span>{" "}
          integrate cleanly with existing developer workflows. Current work
          includes:
        </p>
        <ul className="rfc-list">
          <li>LLM applications &amp; AI agents</li>
          <li>RAG pipelines &amp; AI integrations</li>
          <li>Developer tools &amp; automation</li>
        </ul>
      </section>

      <section className="rfc-section">
        <h3 className="doc-subheading rfc-subsection">
          <span className="secnum">1.2</span>Backend Engineering
        </h3>
        <p className="rfc-req">
          Services <span className="rfc-keyword">SHOULD</span> fail loudly and
          log honestly. The author works with:
        </p>
        <ul className="rfc-list">
          <li>FastAPI &amp; Node.js</li>
          <li>APIs &amp; MCP servers</li>
          <li>Cloud, Docker &amp; OpenShift</li>
        </ul>
      </section>

      <section className="rfc-section">
        <h3 className="doc-subheading rfc-subsection">
          <span className="secnum">1.3</span>Web Engineering
        </h3>
        <p className="rfc-req">
          Interfaces <span className="rfc-keyword">MUST</span> remain fast and
          accessible. Built with:
        </p>
        <ul className="rfc-list">
          <li>React, Vue &amp; Nuxt</li>
          <li>Modern UI architecture</li>
          <li>Performance &amp; accessibility</li>
        </ul>
      </section>

      {/* Author's Address */}
      <section className="rfc-address">
        <h2 className="doc-subheading">Author&apos;s Address</h2>
        <address className="rfc-address-lines">
          Aditya Patil
          <br />
          Red Hat
          <br />
          Pune, India
        </address>
        <p className="rfc-address-links">
          <span className="rfc-address-label">Email:</span>{" "}
          <a href="mailto:adityapatil7649@gmail.com">adityapatil7649@gmail.com</a>
          <br />
          <span className="rfc-address-label">Résumé:</span>{" "}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">view</a>
          {" / "}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">download PDF</a>
          <br />
          <span className="rfc-address-label">Elsewhere:</span>{" "}
          {socials.map((s, i) => (
            <span key={s.label}>
              {i > 0 && " / "}
              <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </span>
          ))}
        </p>
      </section>
    </article>
  );
}

export default About;
