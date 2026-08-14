import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowDown,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";

import { SiEspressif } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import "./Hero.css";

import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-blob hero-blob-one"></div>
      <div className="hero-blob hero-blob-two"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="availability-dot"></span>
            Available for opportunities
          </motion.div>

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>Bhuvanesan</h1>

          <h2>
            <span className="hero-static-text">
              I'm a
            </span>{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2200,
                "React Developer",
                2200,
                "IoT Developer",
                2200,
                "AI / ML Enthusiast",
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="hero-typing"
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused
            digital experiences using React, Node.js,
            IoT and AI technologies.
          </p>

          <div className="hero-buttons">

            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>

          </div>

          <div className="hero-social">

            <span className="social-label">
              Find me on
            </span>

            <a
              href="https://github.com/Buvan3006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/buvan3006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <div className="hero-photo-wrapper">

            <div className="photo-glow"></div>

            <div className="photo-ring ring-one"></div>
            <div className="photo-ring ring-two"></div>

            <div className="hero-photo-card">
              <img
                src={profile}
                alt="Bhuvan"
              />
            </div>

          </div>

          <motion.div
            className="floating-tech tech-react"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaReact />
            <span>React</span>
          </motion.div>

          <motion.div
            className="floating-tech tech-js"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaJsSquare />
            <span>JavaScript</span>
          </motion.div>

          <motion.div
            className="floating-tech tech-iot"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SiEspressif />
            <span>IoT</span>
          </motion.div>

          <div className="hero-stat-card">
            <span className="stat-number">
              4+
            </span>

            <span className="stat-text">
              Projects
            </span>
          </div>

        </motion.div>

      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span>
          Scroll Down
        </span>

        <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Hero;