import { ArrowDownRight, ArrowUpRight, Code2, GitBranch, Layers3, Sparkles } from "lucide-react";
import ProfilePic from "../../assets/profile-pic.jpeg";
import "./About.css";

const RESUME_URL = "https://aditya-patil-resume.my.canva.site/";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-patil-596413223/" },
  { label: "GitHub", href: "https://github.com/AdityaPatil22" },
  { label: "LeetCode", href: "https://leetcode.com/u/aditya1592/" },
];

const focusAreas = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI-powered developer tools",
    description:
      "Building practical LLM applications, agents, and MCP integrations that fit naturally into the tools developers already use.",
    tags: ["LLM applications", "AI agents", "MCP"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Reliable backend systems",
    description:
      "Designing maintainable APIs and services, with attention to clear contracts, useful observability, and predictable behavior.",
    tags: ["Python", "FastAPI", "Node.js"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Fast, thoughtful interfaces",
    description:
      "Creating accessible web experiences and improving performance from the browser through to production delivery.",
    tags: ["React", "Vue", "Nuxt"],
  },
];

const highlights = [
  { value: "Production", label: "software at Red Hat" },
  { value: "Open source", label: "contributions and collaboration" },
  { value: "Community", label: "talks, writing, and mentoring" },
];

function About() {
  return (
    <article className="doc-page about-document" id="about">
      <header className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow"><span className="about-status-dot" /> SOFTWARE ENGINEER · PUNE, INDIA</p>
          <h1 className="about-title">I build software<br /><em>that moves ideas forward.</em></h1>
          <p className="about-lede">
            I’m <strong>Aditya Patil</strong>, a software engineer at Red Hat working across web
            platforms, developer experience, and AI-powered tools. I enjoy turning
            complicated workflows into software that feels clear, useful, and dependable.
          </p>
          <div className="about-actions">
            <a className="about-primary-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              View résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="about-text-link" href="mailto:adityapatil7649@gmail.com">
              Get in touch <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="about-open-note"><span>Currently interested in</span> developer tooling, practical AI, and open source.</p>
        </div>
        <div className="about-portrait-wrap">
          <div className="about-portrait-frame">
            <img className="about-portrait" src={ProfilePic} alt="Aditya Patil" />
          </div>
          <div className="about-portrait-caption">
            <span className="about-caption-mark">AP / 22</span>
            <span>Building in the open</span>
          </div>
          <div className="about-side-note" aria-hidden="true">ENGINEERING · CURIOSITY · COMMUNITY</div>
        </div>
      </header>

      <section className="about-highlights" aria-label="Professional highlights">
        {highlights.map((highlight) => (
          <div className="about-highlight" key={highlight.value}>
            <p className="about-highlight-value">{highlight.value}</p>
            <p className="about-highlight-label">{highlight.label}</p>
          </div>
        ))}
      </section>

      <section className="about-section about-story">
        <div className="about-section-heading">
          <p className="about-kicker">A LITTLE CONTEXT</p>
          <h2 className="doc-subheading">From interface details to systems thinking.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            My work sits between product engineering and platform thinking. I’ve
            worked on customer-facing web applications, performance improvements,
            and tools that help engineers get more done with less friction.
          </p>
          <p>
            More recently, I’ve been exploring how AI can become a useful part of
            real development workflows—not just a demo. That means caring about
            integration, reliability, and the experience around the model as much
            as the model itself.
          </p>
        </div>
      </section>

      <section className="about-section about-focus-section">
        <div className="about-section-heading about-focus-heading">
          <p className="about-kicker">WHAT I WORK ON</p>
          <h2 className="doc-subheading">Three areas, one mindset.</h2>
          <p className="about-section-intro">
            Useful software comes from strong fundamentals, clear trade-offs, and
            respect for the person using it.
          </p>
        </div>
        <div className="about-focus-grid">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="about-focus-card" key={area.number}>
                <div className="about-focus-topline">
                  <span className="about-focus-number">{area.number}</span>
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul className="about-tag-list" aria-label={`${area.title} skills`}>
                  {area.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-bottom">
        <div>
          <p className="about-kicker">BEYOND THE BUILD</p>
          <h2>Learn openly. Share what works. Give back.</h2>
          <p>
            I value the open-source community and the conversations that happen
            around it—from contributing fixes to sharing lessons through developer
            conferences, writing, and mentoring.
          </p>
        </div>
        <div className="about-socials" aria-label="Elsewhere on the web">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}<ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <span><GitBranch size={14} aria-hidden="true" /> Open to good problems and thoughtful collaboration.</span>
        <a href="mailto:adityapatil7649@gmail.com">adityapatil7649@gmail.com</a>
      </footer>
    </article>
  );
}

export default About;
