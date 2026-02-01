import "./Home.css";
import Profile from "../../assets/profile-pic.jpeg";
import SplitText from "../../components/SplitText";

function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="home-main-container relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="profile-img-container">
            <img src={Profile} alt="profile image" className="profile-img" />
          </div>
          <SplitText
            text="Aditya Patil"
            className="name"
            delay={60}
            duration={1}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 80, scale: 0.8 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            threshold={0.1}
            rootMargin="0px"
            tag="h1"
          />
          <SplitText
            text="Associate Software Engineer"
            className="home-subtitle"
            delay={30}
            duration={0.6}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            tag="p"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
