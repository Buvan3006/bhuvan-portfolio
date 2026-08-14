import { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);

    if (nextMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-container">

        {/* Logo */}

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">
            B
          </span>

          <span className="logo-text">
            Bhuvanesan
          </span>
        </Link>


        {/* Navigation */}

        <nav
          className={`nav-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          {/* Home */}

          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* About */}

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            About
          </Link>


          {/* Skills */}

          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Skills
          </Link>


          {/* Services */}

          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Services
          </Link>


          {/* Projects */}

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Projects
          </Link>


          {/* ⭐ Certificates */}

          <Link
            to="certificates"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Certificates
          </Link>


          {/* Resume */}

          <Link
            to="resume"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Resume
          </Link>


          {/* Contact */}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
          >
            Contact
          </Link>

        </nav>


        {/* Right Side */}

        <div className="navbar-actions">

          {/* Dark / Light Mode */}

          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}
          </button>


          {/* Resume Button */}

          <a
            href="/resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>


          {/* Mobile Menu */}

          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;