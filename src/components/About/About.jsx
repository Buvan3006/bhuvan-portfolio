import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

import "./About.css";

import profile from "../../assets/images/profile.jpg";

function About() {
  return (
    <section className="about section" id="about">

      <div className="about-container">

        {/* Image Side */}

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <div className="about-image-wrapper">

            <div className="about-image-glow"></div>

            <div className="about-image-card">
              <img
                src={profile}
                alt="Bhuvan"
              />
            </div>

            <div className="about-floating-card">
              <FaCode />

              <div>
                <strong>Developer</strong>
                <span>Building with passion</span>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Content Side */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >

          <span className="about-subtitle">
            About Me
          </span>

          <h2>
            Passionate about
            <span className="gradient-text">
              {" "}building digital experiences.
            </span>
          </h2>

          <p className="about-description">
            I'm Bhuvanesan, a passionate developer who enjoys
            creating modern, responsive and user-friendly
            applications. I love turning ideas into practical
            digital solutions and continuously exploring
            new technologies.
          </p>

          <p className="about-description">
            My interests include Full Stack Development,
            Artificial Intelligence, Machine Learning,
            IoT and Smart Agriculture solutions.
          </p>

          {/* Info Cards */}

          <div className="about-info-grid">

            <div className="about-info-card">
              <FaGraduationCap />

              <div>
                <span>Education</span>
                <strong>Master of Computer Application</strong>
              </div>
            </div>

            <div className="about-info-card">
              <FaMapMarkerAlt />

              <div>
                <span>Location</span>
                <strong>Dindigul, Tamil Nadu, India</strong>
              </div>
            </div>

            <div className="about-info-card">
              <FaEnvelope />

              <div>
                <span>Email</span>
                <strong>grimca032@gmail.com</strong>
              </div>
            </div>

            <div className="about-info-card">
              <FaCode />

              <div>
                <span>Focus</span>
                <strong>Full Stack Development</strong>
              </div>
            </div>

          </div>

          <div className="about-buttons">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Let's Talk
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;