import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import Heading from "../../components/heading/Heading";
import { Timeline } from "../../components/ui/timeline";
import Redhat from "../../assets/experience-images/Red_Hat-Logo.wine.svg";
import Rework from "../../assets/experience-images/reworkai_logo.jpeg";
import Zensar from "../../assets/experience-images/zensar-technologies-vector-logo.png";
import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      title: "Associate Software Engineer",
      company: "Red Hat",
      location: "Pune, India",
      duration: "Aug 2024 - Present",
      type: "Full-time",
      description: [
        "Contributing as a Frontend Engineer to the Digital Engineering team, driving innovative solutions and enhancing user experiences across enterprise platforms.",
        "Collaborating closely with cross-functional teams to deliver seamless, responsive, and visually appealing web applications that align with business goals.",
        "Implementing modern UI/UX patterns using React, Vue.js, and component-driven architecture.",
        "Working with containerized environments using OpenShift and Podman for deployment workflows.",
      ],
      skills: ["React", "Vue.js", "TypeScript", "OpenShift", "Podman", "PatternFly"],
      logo: Redhat,
      current: true,
    },
    {
      title: "Full Stack Engineer",
      company: "Rework AI",
      location: "Remote",
      duration: "Jan 2024 - Jul 2024",
      type: "Full-time",
      description: [
        "Developed and maintained full-stack applications as a Full Stack Engineer on the MERN team, contributing to the core product development.",
        "Leveraged React.js to create a responsive web interface, driving a 15% user engagement increase through improved UX.",
        "Integrated key features including pitch functionality, JD upload, and bulk file upload with Amazon S3, reducing upload times by 30%.",
        "Implemented RESTful APIs and optimized database queries for improved application performance.",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "AWS S3", "REST APIs"],
      logo: Rework,
      current: false,
    },
    {
      title: "Student Trainee",
      company: "Zensar Technologies",
      location: "Pune, India",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: [
        "Gained hands-on experience in Structured Query Language (SQL) and Procedural Language extensions to SQL (PL/SQL).",
        "Optimized real-time data processing using relational databases, improving query performance.",
        "Collaborated with senior developers to understand enterprise-level database management practices.",
      ],
      skills: ["SQL", "PL/SQL", "Oracle DB", "Data Processing"],
      logo: Zensar,
      current: false,
    },
  ];

  const data = experienceData.map((exp) => ({
    title: exp.title,
    content: (
      <motion.div 
        className="exp-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Mobile Title */}
        <h3 className="exp-mobile-title md:hidden">{exp.title}</h3>
        
        {/* Company Header */}
        <div className="exp-header">
          <div className="exp-logo-wrapper">
            <img src={exp.logo} alt={exp.company} className="exp-logo" />
          </div>
          <div className="exp-company-info">
            <div className="exp-company-name">
              <Building2 size={16} />
              <span>{exp.company}</span>
              {exp.current && <span className="exp-current-badge">Current</span>}
            </div>
            <div className="exp-meta">
              <div className="exp-meta-item">
                <Calendar size={14} />
                <span>{exp.duration}</span>
              </div>
              <div className="exp-meta-item">
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="exp-description">
          <ul>
            {exp.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="exp-skills">
          {exp.skills.map((skill, idx) => (
            <span key={idx} className="exp-skill-tag">{skill}</span>
          ))}
        </div>
      </motion.div>
    ),
  }));

  return (
    <>
      <div id="experience">
        <Heading title="Experience" />
      </div>

      <div className="exp-main-container">
        <Timeline data={data} />
      </div>
    </>
  );
}

export default Experience;
