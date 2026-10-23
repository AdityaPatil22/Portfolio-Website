import { motion, useReducedMotion } from "framer-motion";
import Heading from "../../components/heading/Heading";
import Redhat from "../../assets/experience-images/Red_Hat-Logo.wine.svg";
import Rework from "../../assets/experience-images/reworkai_logo.jpeg";
import Zensar from "../../assets/experience-images/zensar-technologies-vector-logo.png";
import "./Experience.css";

const commits = [
  {
    hash: "9e2f7a1",
    tag: "v3.0",
    head: true,
    company: "Red Hat",
    title: "Associate Software Engineer",
    date: "June 2024 – Present",
    location: "Pune, India",
    type: "Full-time",
    logo: Redhat,
    groups: [
      {
        project: "Customer Portal Product Security (CPPS)",
        points: [
          "Built and maintained frontend features for Product Security SPAs using Vue.js and PatternFly.",
          "Implemented features such as Jump To navigation, JSON/CSV download support, and UI enhancements.",
          "Improved code quality and contributed to CI/CD workflows for deployment and integration processes.",
        ],
      },
      {
        project: "Security Advisories MCP Server",
        points: [
          "Developed an MCP server for querying security advisories, CVEs, Bugzilla IDs, and solution data.",
          "Implemented features such as dynamic query handling, input validation, rate limiting, and CORS protection.",
          "Automated containerized deployments using OpenShift and integrated the server with AI-assisted workflows.",
        ],
      },
      {
        project: "Red Hat Design System (RHDS) MCP Server",
        points: [
          "Built an MCP server to support AI-assisted creation and validation of RHDS components.",
          "Enabled integration with AI tools such as Cursor and Claude for frontend development workflows.",
          "Published and maintained the MCP server as an NPM package for developer usage.",
        ],
      },
      {
        project: "DOCX Platform",
        points: [
          "Optimized page rendering and reduced CLS issues to improve user experience and page stability.",
          "Implemented SWR caching and resolved production edge cases for faster and more reliable page loads.",
          "Improved initial render performance by identifying and removing blocking requests.",
        ],
      },
    ],
    skills: ["React", "Vue.js", "TypeScript", "OpenShift", "Podman", "PatternFly"],
  },
  {
    hash: "3c8d14b",
    tag: "v2.0",
    head: false,
    company: "Rework AI",
    title: "Full Stack Engineer",
    date: "Jan 2024 – Jul 2024",
    location: "Remote",
    type: "Full-time",
    logo: Rework,
    points: [
      "Developed and maintained full-stack applications as a Full Stack Engineer on the MERN team, contributing to the core product development.",
      "Leveraged React.js to create a responsive web interface, driving a 15% user engagement increase through improved UX.",
      "Integrated key features including pitch functionality, JD upload, and bulk file upload with Amazon S3, reducing upload times by 30%.",
      "Implemented RESTful APIs and optimized database queries for improved application performance.",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "AWS S3", "REST APIs"],
  },
  {
    hash: "7a4e9d2",
    tag: "v1.0",
    head: false,
    company: "Zensar Technologies",
    title: "Student Trainee",
    date: "Jun 2023 – Aug 2023",
    location: "Pune, India",
    type: "Internship",
    logo: Zensar,
    points: [
      "Gained hands-on experience in Structured Query Language (SQL) and Procedural Language extensions to SQL (PL/SQL).",
      "Optimized real-time data processing using relational databases, improving query performance.",
      "Collaborated with senior developers to understand enterprise-level database management practices.",
    ],
    skills: ["SQL", "PL/SQL", "Oracle DB", "Data Processing"],
  },
];

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <article className="doc-page experience-document">
      <div id="experience">
        <Heading title="Employment History" />
      </div>

      <p className="listing-caption">
        Listing 1: git log — employment history, newest first
      </p>

      <div className="git-log" role="figure" aria-label="Employment history, newest first">
        {commits.map((commit, i) => (
          <motion.section
            key={commit.hash}
            className="commit"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.12, ease: "easeOut" }}
          >
            <div className="commit-gutter" aria-hidden="true">
              <span className="commit-node">*</span>
              <span className="commit-line" />
            </div>

            <div className="commit-body">
              <p className="commit-ref-line">
                <span className="commit-hash">{commit.hash}</span>{" "}
                <span className="commit-refs">
                  {commit.head ? `(HEAD -> main, tag: ${commit.tag})` : `(tag: ${commit.tag})`}
                </span>
                {commit.head && <span className="commit-cursor" aria-hidden="true" />}
              </p>

              <p className="commit-subject">
                {commit.logo && (
                  <img className="commit-avatar" src={commit.logo} alt="" />
                )}
                <span>
                  {commit.company} — {commit.title}
                </span>
              </p>

              <p className="commit-meta">
                <span className="meta-key">Date:</span> {commit.date}
              </p>
              <p className="commit-meta">
                <span className="meta-key">Where:</span> {commit.location}
              </p>
              <p className="commit-meta">
                <span className="meta-key">Type:</span> {commit.type}
              </p>

              <div className="commit-message">
                {commit.groups
                  ? commit.groups.map((group) => (
                      <div className="commit-group" key={group.project}>
                        <p className="commit-project">{group.project}</p>
                        <ul>
                          {group.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : (
                      <ul>
                        {commit.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
              </div>

              <p className="commit-trailer">
                <span className="meta-key">Skills:</span> {commit.skills.join(", ")}
              </p>
            </div>
          </motion.section>
        ))}
      </div>
    </article>
  );
}

export default Experience;
