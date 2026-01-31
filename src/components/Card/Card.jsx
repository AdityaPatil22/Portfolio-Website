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
    <CardContainer className="card-container">
      <CardBody className="card-body bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-sm">
        <CardItem translateZ={50} className="text-xl font-bold text-gray-900 dark:text-white">
          {projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-3"
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
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
        )}
        <CardItem translateZ={30} className="w-full mt-4">
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
