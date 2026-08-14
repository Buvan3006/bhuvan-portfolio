import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>B</span>
            <strong>Bhuvan</strong>
          </a>

          <p>
            Building modern web experiences, smart agriculture
            solutions and intelligent applications.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Social Links */}

        <div className="footer-connect">

          <h3>Connect</h3>

          <p>
            Let's connect and build something meaningful.
          </p>

          <div className="footer-social">

            {/* GitHub */}

            <a
              href="https://github.com/Buvan3006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}

            <a
              href="www.linkedin.com/in/buvan3006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* Email */}

            <a
              href="mailto:yourmail@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Bhuvan. All rights reserved.
        </p>

        <button
          onClick={scrollTop}
          className="footer-top-button"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;