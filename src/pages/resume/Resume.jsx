import { motion } from "framer-motion";
import { Download, ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";
import Heading from "../../components/heading/Heading";
import SplitText from "../../components/SplitText";
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
      description: "Electronics and Telecommunication Engineering",
    },
    {
      icon: <Award size={24} />,
      title: "Projects",
      value: "30+",
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
            <SplitText
              text="Download/View My Resume"
              className="resume-title"
              delay={45}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, scale: 0.9 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              threshold={0.2}
              rootMargin="-50px"
              tag="h2"
            />
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
