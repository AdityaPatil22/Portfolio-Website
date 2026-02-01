import Card from "../../components/Card/Card";
import Heading from "../../components/heading/Heading";
import RealTimeCampus from "../../assets/project-images/real-time-campus.gif";
import Spotify from "../../assets/project-images/spotify.gif";
import Vacation from "../../assets/project-images/vacation.gif";
import Blog from "../../assets/project-images/blog.gif";
import RickMorty from "../../assets/project-images/rick-morty.gif";
import Sweet from "../../assets/project-images/sweet.jpg";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Blog Site",
      description:
        "A full-featured blogging platform inspired by Medium. Users can create, update, and delete blogs with a rich text editor, engage with the community through comments, and share insights and experiences.",
      image: Blog,
      techStack: ["React", "Node.js", "MongoDB", "Express",],
      liveUrl: "https://friday-blog.netlify.app/",
      githubUrl: "https://github.com/AdityaPatil22",
    },
    {
      title: "Rick and Morty Toy Store",
      description:
        "An interactive e-commerce toy store themed around Rick and Morty. Features product catalog with filtering, shopping cart functionality, and character-themed UI with smooth animations.",
      image: RickMorty,
      techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
      liveUrl: "https://side-projects-overkill.github.io/rick-and-morty-toy-store/",
      githubUrl: "https://github.com/AdityaPatil22",
    },
    {
      title: "SweetSpot",
      description:
        "A modern dessert ordering platform with an elegant UI. Browse through curated sweet collections, customize orders, and enjoy seamless checkout experience with responsive design.",
      image: Sweet,
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://sweets-spot.netlify.app/",
      githubUrl: "https://github.com/AdityaPatil22",
    },
    {
      title: "Vacation Rental Platform",
      description:
        "A comprehensive vacation rental website built with the MERN stack. Features include property listings with search filters, booking management, user authentication, and review system.",
      image: Vacation,
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "https://vacation-rental-platform.onrender.com/listings",
      githubUrl: "https://github.com/AdityaPatil22",
    },
    {
      title: "Spotify Clone",
      description:
        "A music streaming application replicating Spotify's core features. Includes music playback controls, playlist management, responsive design, and smooth audio visualization.",
      image: Spotify,
      techStack: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      liveUrl: "https://spotify-clone-proj1.netlify.app/",
      githubUrl: "https://github.com/AdityaPatil22",
    },
    {
      title: "Campus Navigation System",
      description:
        "Real-time campus navigation app helping students and visitors explore the campus with interactive maps, step-by-step directions, live location tracking, and point-of-interest markers.",
      image: RealTimeCampus,
      techStack: ["React", "Geolocation API", "Node.js"],
      liveUrl: null,
      githubUrl: "https://github.com/AdityaPatil22",
    },
  ];

  return (
    <>
      <div id="projects">
        <Heading title="Projects" />
      </div>

      <div className="projects-main-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            projectTitle={project.title}
            projectDescription={project.description}
            projectImage={project.image}
            techStack={project.techStack}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
