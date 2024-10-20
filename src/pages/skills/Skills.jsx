import Heading from "../../components/heading/Heading";
import SkilsCard from "../../components/skills-card/SkilsCard";
import Html from "../../assets/skills-images/HTML5.svg";
import Css from "../../assets/skills-images/css-3.svg";
import JavaScript from "../../assets/skills-images/javascript-1.svg";
import Bootstrap from "../../assets/skills-images/bootstrap-5-1.svg";
import Tailwind from "../../assets/skills-images/tailwindcss.svg";
import React from "../../assets/skills-images/react-2.svg";
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
import ESlint from "../../assets/skills-images/eslint-1.svg";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
    { name: "JavaScript", image: JavaScript },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Tailwind", image: Tailwind },
    { name: "React", image: React },
    { name: "Vue", image: Vue },
    { name: "Angular", image: Angular },
    { name: "Nuxt", image: Nuxt },
    { name: "Express", image: Express },
    { name: "Node", image: Node },
    { name: "MySQL", image: MySql },
    { name: "MongoDB", image: MongoDB },
    { name: "Git", image: Git },
    { name: "GitBash", image: GitBash },
    { name: "Java", image: Java },
    { name: "Cloud", image: Cloud },
    { name: "Figma", image: Figma },
    { name: "Linux", image: Linux },
    { name: "ESLint", image: ESlint },
  ];

  return (
    <>
      <div id="skills">
        <Heading title="Skills" />
      </div>
      <div className="skill-main-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <SkilsCard
            key={index}
            skillImg={skill.image}
            skillname={skill.name}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;
