import { motion } from "framer-motion";
import { Download, ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";
import Heading from "../../components/heading/Heading";
import "./Resume.css";

function Resume() {
  const highlights = [
    {
      icon: <Briefcase size={24} />,
      title: "Experience",
      value: "2+ Years",
      description: "Professional development experience",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      value: "B.Tech",
      description: "Computer Science & Engineering",
    },
    {
      icon: <Award size={24} />,
      title: "Projects",
      value: "10+",
      description: "Completed web applications",
    },
  ];

  return (
    <>
      <div id="resume">
        <Heading title="Resume" />
      </div>

      <div className="resume-container">
        <motion.div
          className="resume-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="resume-intro">
            <h2 className="resume-title">Aditya Patil</h2>
            <p className="resume-subtitle">Full Stack Developer</p>
            <p className="resume-description">
              Passionate about building scalable web applications with modern
              technologies. Experienced in React, Vue, Angular, Node.js, and
              cloud platforms.
            </p>
          </div>

          <div className="resume-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-info">
                  <span className="highlight-value">{item.value}</span>
                  <span className="highlight-title">{item.title}</span>
                  <span className="highlight-desc">{item.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="resume-actions">
            <motion.a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              View Resume
            </motion.a>
            <motion.a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Resume;
