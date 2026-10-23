import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { ExternalLink, Github } from "lucide-react";
import "./Card.css";

export default function Card({
  projectTitle,
  projectDescription,
  projectImage,
  techStack = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <CardContainer containerClassName="w-full min-w-0" className="card-container">
      <CardBody className="card-body rounded-xl p-6 w-full max-w-none">
        <CardItem translateZ={50} className="text-xl font-bold text-[var(--text-primary)]">
          {projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-[var(--text-secondary)] text-sm mt-2 line-clamp-3"
        >
          {projectDescription}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={projectImage}
            alt={`${projectTitle} preview`}
            className="h-48 w-full object-cover rounded-xl"
          />
        </CardItem>
        {techStack.length > 0 && (
          <CardItem translateZ={40} className="w-full mt-4">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-[var(--tag-bg)] text-[var(--accent-color)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
        )}
        <div className="project-links mt-4" style={{ position: "relative", zIndex: 50 }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
      </CardBody>
    </CardContainer>
  );
}
