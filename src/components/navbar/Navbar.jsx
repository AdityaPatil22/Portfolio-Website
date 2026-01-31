import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import AboutImg from "../../assets/navbar-images/about.png";
import ExperienceImg from "../../assets/navbar-images/experience.png";
import ProjectImg from "../../assets/navbar-images/project.png";
import SkillsImg from "../../assets/navbar-images/skills.png";
import ResumeImg from "../../assets/navbar-images/Resume.png";

import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="navbar-container">
      <Menu setActive={setActiveItem}>
        <MenuItem setActive={setActiveItem} active={activeItem} item="About">
          <ProductItem
            title="About"
            href="/"
            src={AboutImg}
          />
        </MenuItem>
        <MenuItem
          setActive={setActiveItem}
          active={activeItem}
          item="Experience"
        >
          <ProductItem
            title="Experience"
            description=""
            href="/experience"
            src={ExperienceImg}
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
          <ProductItem
            title="Projects"
            description=""
            href="/projects"
            src={ProjectImg}
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Skills">
          <ProductItem
            title="Skills"
            description=""
            href="/skills"
            src={SkillsImg}
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Resume">
          <ProductItem
            title="Resume"
            description=""
            href="/resume"
            src={ResumeImg}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
