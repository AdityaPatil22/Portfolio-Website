import Heading from "../../components/heading/Heading";
import SkillsCard from "../../components/skills-card/SkillsCard";
import TargetCursor from "../../components/TargetCursor";
import Html from "../../assets/skills-images/HTML5.svg";
import Css from "../../assets/skills-images/css-3.svg";
import JavaScript from "../../assets/skills-images/javascript-1.svg";
import TypeScript from "../../assets/skills-images/typescript.svg";
import ReactIcon from "../../assets/skills-images/react-2.svg";
import Vue from "../../assets/skills-images/vue-9.svg";
import Angular from "../../assets/skills-images/angular-icon-1.svg";
import Nuxt from "../../assets/skills-images/nuxt-2.svg";
import Node from "../../assets/skills-images/nodejs-1.svg";
import Express from "../../assets/skills-images/icons8-express-js.svg";
import FastAPI from "../../assets/skills-images/fastapi.svg";
import LangChain from "../../assets/skills-images/langchain.svg";
import MySql from "../../assets/skills-images/mysql-2.svg";
import MongoDB from "../../assets/skills-images/mongodb-icon-1.svg";
import PostgreSQL from "../../assets/skills-images/postgresql.svg";
import ChromaDB from "../../assets/skills-images/chromadb.svg";
import Git from "../../assets/skills-images/git-icon.svg";
import Python from "../../assets/skills-images/python.svg";
import Figma from "../../assets/skills-images/figma-icon.svg";
import Linux from "../../assets/skills-images/tux.svg";
import Docker from "../../assets/skills-images/docker.svg";
import Podman from "../../assets/skills-images/podman.svg";
import OpenShift from "../../assets/skills-images/openshift.svg";
import GraphQL from "../../assets/skills-images/graphql.svg";
import RestAPI from "../../assets/skills-images/rest-api.svg";
import NextJS from "../../assets/skills-images/nextjs.svg";
import RAG from "../../assets/skills-images/rag.svg";
import ModelContextProtocol from "../../assets/skills-images/mcp.svg";
import PromptEngineering from "../../assets/skills-images/prompt-eng.svg";
import LLMIntegration from "../../assets/skills-images/llm-integration.png";
import LlamaStack from "../../assets/skills-images/llama-stack.png";
import CI_CD from "../../assets/skills-images/ci-cd.png";
import GithubActions from "../../assets/skills-images/githubactions.svg";
import Postman from "../../assets/skills-images/postman.svg";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", image: Html },
        { name: "CSS", image: Css },
        { name: "JavaScript", image: JavaScript },
        { name: "TypeScript", image: TypeScript },
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
        { name: "Python", image: Python },
        { name: "FastAPI", image: FastAPI },
        { name: "Node.js", image: Node },
        { name: "Express", image: Express },
        { name: "GraphQL", image: GraphQL },
        { name: "REST APIs", image: RestAPI },
      ],
    },
    {
      title: "AI",
      skills: [
        { name: "LangChain", image: LangChain },
        { name: "RAG", image: RAG },
        { name: "LLM Integration", image: LLMIntegration },
        { name: "Prompt Engineering", image: PromptEngineering },
        { name: "Model Context Protocol", image: ModelContextProtocol },
        { name: "LlamaStack/OGX", image: LlamaStack },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", image: MongoDB },
        { name: "MySQL", image: MySql },
        { name: "PostgreSQL", image: PostgreSQL },
        { name: "ChromaDB", image: ChromaDB },
      ],
    },
    {
      title: "Devops",
      skills: [
        { name: "Docker", image: Docker },
        { name: "Podman", image: Podman },
        { name: "OpenShift", image: OpenShift },
        { name: "CI/CD", image: CI_CD },
        { name: "Github Actions", image: GithubActions },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", image: Git },
        { name: "Linux", image: Linux },
        { name: "Figma", image: Figma },
        { name: "Postman", image: Postman },
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
