import Heading from "../../components/heading/Heading";
import SkillsCard from "../../components/skills-card/SkillsCard";
import TargetCursor from "../../components/TargetCursor";
import Html from "../../assets/skills-images/HTML5.svg";
import Css from "../../assets/skills-images/css-3.svg";
import JavaScript from "../../assets/skills-images/javascript-1.svg";
import ReactIcon from "../../assets/skills-images/react-2.svg";
import Vue from "../../assets/skills-images/vue-9.svg";
import Angular from "../../assets/skills-images/angular-icon-1.svg";
import Nuxt from "../../assets/skills-images/nuxt-2.svg";
import Node from "../../assets/skills-images/nodejs-1.svg";
import Express from "../../assets/skills-images/icons8-express-js.svg";
import MySql from "../../assets/skills-images/mysql-2.svg";
import MongoDB from "../../assets/skills-images/mongodb-icon-1.svg";
import Git from "../../assets/skills-images/git-icon.svg";
import GitBash from "../../assets/skills-images/git-bash.svg";
import Cloud from "../../assets/skills-images/google-cloud-2.svg";
import Java from "../../assets/skills-images/java-4.svg";
import Figma from "../../assets/skills-images/figma-icon.svg";
import Linux from "../../assets/skills-images/tux.svg";
import Docker from "../../assets/skills-images/docker.svg";
import Podman from "../../assets/skills-images/podman.svg";
import OpenShift from "../../assets/skills-images/openshift.svg";
import GraphQL from "../../assets/skills-images/graphql.svg";
import NextJS from "../../assets/skills-images/nextjs.svg";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", image: Html },
        { name: "CSS", image: Css },
        { name: "JavaScript", image: JavaScript },
        { name: "React", image: ReactIcon },
        { name: "Vue", image: Vue },
        { name: "Angular", image: Angular },
        { name: "Nuxt", image: Nuxt },
        { name: "Next.js", image: NextJS },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", image: Node },
        { name: "Express", image: Express },
        { name: "Java", image: Java },
        { name: "GraphQL", image: GraphQL },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", image: MongoDB },
        { name: "MySQL", image: MySql },
      ],
    },
    {
      title: "Devops",
      skills: [
        { name: "Docker", image: Docker },
        { name: "Podman", image: Podman },
        { name: "OpenShift", image: OpenShift },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", image: Git },
        { name: "Git Bash", image: GitBash },
        { name: "Linux", image: Linux },
        { name: "GCP", image: Cloud },
        { name: "Figma", image: Figma },
      ],
    },
  ];

  return (
    <>
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />
      
      <div id="skills">
        <Heading title="Skills" />
      </div>

      <div className="skills-page-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="skill-grid">
              {category.skills.map((skill, skillIndex) => (
                <SkillsCard
                  key={skillIndex}
                  skillImg={skill.image}
                  skillName={skill.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
