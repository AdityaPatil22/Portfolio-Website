import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Briefcase,
  User
} from "lucide-react";
import { FocusCards } from "../../components/ui/focus-cards";
import "./About.css";

function About() {
  const cards = [
    {
      title: "LinkedIn",
      src: "https://i.pinimg.com/736x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg",
      url: "https://www.linkedin.com/in/aditya-patil-596413223/",
    },
    {
      title: "Github",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BIlB_ercdvTO34Lq4zm2pPbCXO9lvMOplg&s",
      url: "https://github.com/AdityaPatil22",
    },
    {
      title: "Leetcode",
      src: "https://cdn-1.webcatalog.io/catalog/leetcode/leetcode-icon-filled-256.png?v=1714774949349",
      url: "https://leetcode.com/u/aditya1592/",
    },
  ];

  const highlights = [
    "Frontend & Backend Development",
    "React, Vue, Angular Expertise",
    "RESTful API Design",
    "Database Management",
    "Cloud & DevOps",
    "UI/UX Implementation",
  ];

  return (
    <div className="about-section">
      {/* Main About Content */}
      <div className="about-container">
        {/* Left Column - Info Card */}
        <motion.div 
          className="about-left-container"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">
                <User size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">Name</span>
                <span className="info-value">Aditya Patil</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a href="mailto:adityapatil7649@gmail.com" className="info-value info-link">
                  adityapatil7649@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Briefcase size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">Current Role</span>
                <span className="info-value">Associate Software Engineer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - About Content */}
        <motion.div 
          className="about-right-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="hello-heading">Hello There!</h2>
          
          <p className="about-intro">
            I'm a <strong>Full Stack Developer</strong> passionate about building 
            scalable, accessible, and production-grade web experiences.
          </p>

          <p className="about-description">
            I work across the stack—designing and developing modern front-end 
            interfaces, integrating robust back-end services, and collaborating 
            closely with cross-functional teams to deliver reliable solutions.
          </p>

          <p className="about-description">
            My experience spans JavaScript-driven ecosystems, component-based UI 
            development, API integration, and working with containerized environments 
            in enterprise-grade workflows. I have a strong appreciation for clean 
            architecture, accessibility, and developer experience.
          </p>

          {/* What I Do */}
          <div className="highlights-section">
            <h3 className="highlights-title">What I Do</h3>
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="highlight-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="highlight-dot" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Focus Cards Section */}
      <div className="focus-cards-section">
        <h3 className="section-subtitle">Connect With Me</h3>
        <div className="focus-cards-container">
          <FocusCards cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default About;
