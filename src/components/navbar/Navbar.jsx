import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "About", href: "/", description: "Learn more about me" },
    { name: "Experience", href: "/experience", description: "My professional journey" },
    { name: "Projects", href: "/projects", description: "What I've built" },
    { name: "Skills", href: "/skills", description: "Technologies I use" },
    { name: "Resume", href: "/resume", description: "Download my resume" },
    { name: "Contact", href: "/contact", description: "Get in touch" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Mobile navbar
  if (isMobile) {
    return (
      <div className="navbar-container mobile">
        <div className="mobile-navbar">
          <Link to="/" className="mobile-logo" onClick={closeMobileMenu}>
            AP
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                <span className="mobile-menu-title">{item.name}</span>
                <span className="mobile-menu-desc">{item.description}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }

  // Desktop navbar
  return (
    <div className="navbar-container">
      <Menu setActive={setActiveItem}>
        {navItems.map((item) => (
          <MenuItem
            key={item.name}
            setActive={setActiveItem}
            active={activeItem}
            item={item.name}
          >
            <ProductItem
              title={item.name}
              description={item.description}
              href={item.href}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
