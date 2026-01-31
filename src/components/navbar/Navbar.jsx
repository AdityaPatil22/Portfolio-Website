import { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="navbar-container">
      <Menu setActive={setActiveItem}>
        <MenuItem setActive={setActiveItem} active={activeItem} item="About">
          <ProductItem
            title="About"
            description="Learn more about me"
            href="/"
          />
        </MenuItem>
        <MenuItem
          setActive={setActiveItem}
          active={activeItem}
          item="Experience"
        >
          <ProductItem
            title="Experience"
            description="My professional journey"
            href="/experience"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Projects">
          <ProductItem
            title="Projects"
            description="What I've built"
            href="/projects"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Skills">
          <ProductItem
            title="Skills"
            description="Technologies I use"
            href="/skills"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Resume">
          <ProductItem
            title="Resume"
            description="Download my resume"
            href="/resume"
          />
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Contact">
          <ProductItem
            title="Contact"
            description="Get in touch"
            href="/contact"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
