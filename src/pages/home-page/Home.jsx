import "./Home.css";

import Heading from "../../components/heading/Heading";
import Profile from "../../assets/profile-pic.jpeg";

function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="home-main-container relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="profile-img-container">
            <img src={Profile} alt="profile image" className="profile-img" />
          </div>
          <h1 className="name">
            <span>Aditya Patil</span>
          </h1>
          <p>Associate Software Engineer</p>
        </div>
      </div>
      <div id="about-me">
        <Heading title="About Me" />
      </div>
    </>
  );
}

export default Home;
