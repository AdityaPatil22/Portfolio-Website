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
  return (
    <>
      <div id="projects">
        <Heading title="Projects" />
      </div>

      <div className="projects-main-container">
        <a href="https://friday-blog.netlify.app/">
          <Card
            projectTitle="Blog Site"
            projectDescription="Blog Site  is a platform for sharing and exploring stories, inspired by Medium. Users can create, update, and delete blogs, engaging with community sharing insights and experiences."
            projectImage={Blog}
          />
        </a>
        <a href="https://side-projects-overkill.github.io/rick-and-morty-toy-store/">
          <Card
            projectTitle="Rick and Morty Toy Store"
            projectDescription="Developed a fully functional vacation rental website using the MERN stack, featuring property listings, booking management, and user authentication."
            projectImage={RickMorty}
          />
        </a>

        <a href="https://sweets-spot.netlify.app/">
          <Card
            projectTitle="SweetSpot"
            projectDescription="Developed a fully functional vacation rental website using the MERN stack, featuring property listings, booking management, and user authentication."
            projectImage={Sweet}
          />
        </a>

        <a href="https://vacation-rental-platform.onrender.com/listings">
          <Card
            projectTitle="Vacation Rental Platform"
            projectDescription="Developed a fully functional vacation rental website using the MERN stack, featuring property listings, booking management, and user authentication."
            projectImage={Vacation}
          />
        </a>

        <a href="https://spotify-clone-proj1.netlify.app/">
          <Card
            projectTitle="Spotify Clone"
            projectDescription="Created a Spotify clone utilizing modern web development tools, featuring a responsive design, music streaming functionality, and a user-friendly interface."
            projectImage={Spotify}
          />
        </a>
        <Card
          projectTitle="Real Time Campus Navigation System"
          projectDescription="Developed a real-time Campus Navigation App to help students, staff, and visitors easily navigate and explore the campus with step-by-step directions and live location tracking."
          projectImage={RealTimeCampus}
        />
      </div>
    </>
  );
}

export default Projects;
