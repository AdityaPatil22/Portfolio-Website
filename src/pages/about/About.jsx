import { FocusCards } from "../../components/ui/focus-cards";
import "./About.css";

function About() {
  const cards = [
    {
      title: "Linkedin",
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
  return (
    <>
      <div className="about-container">
        <div className="about-left-container">
          <div className="info-container">
            <p className="info-text">Name &nbsp;:</p>
            <p className="info-details">&nbsp; Aditya Patil</p>
          </div>
          <div className="info-container">
            <p className="info-text">Email :</p>
            <p className="info-details">&nbsp; adityapatil7649@gmail.com</p>
          </div>
        </div>
        <div className="about-right-container">
          <h1 className="hello-heading">Hello There!</h1>
          <p className="about-description">
            Full-stack web developer, building scalable, accessible, and
            production-grade web experiences with a strong focus on quality,
            performance, and real-world impact.
            <br />
            <br /> I work across the stack—designing and developing modern
            front-end interfaces, integrating robust back-end services, and
            collaborating closely with cross-functional teams to deliver
            reliable solutions. My experience spans JavaScript-driven
            ecosystems, component-based UI development, API integration, and
            working with containerized environments in enterprise-grade
            workflows.
            <br />
            <br /> I have a solid foundation in web fundamentals (HTML, CSS,
            JavaScript) and hands-on experience with modern frameworks and
            tooling, along with databases like MySQL and MongoDB. Over time,
            I’ve grown a strong appreciation for clean architecture,
            accessibility, maintainability, and developer experience—principles
            that guide how I write and review code. Curious by nature,
            detail-oriented, and driven by problem-solving—always looking to
            build things that matter and scale.
          </p>
        </div>
      </div>
      <div className="focus-cards-container">
        <FocusCards cards={cards} />
      </div>
    </>
  );
}

export default About;
