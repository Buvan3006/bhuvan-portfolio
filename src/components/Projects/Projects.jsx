import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaMicrochip,
  FaBrain,
  FaMobileAlt,
} from "react-icons/fa";

import "./Projects.css";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";

const projects = [
  {
    id: 1,
    number: "01",
    category: "IoT & Smart Agriculture",
    title: "Smart Plant Watering & Monitoring System",
    description:
      "An ESP32-based smart irrigation system that monitors soil moisture and automatically controls water delivery while providing mobile monitoring.",
    image: project1,
    icon: <FaMicrochip />,
    status: "Completed",
    technologies: [
      "ESP32",
      "Blynk",
      "Soil Moisture Sensor",
      "Relay",
      "Water Pump",
    ],
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    number: "02",
    category: "IoT & Smart Agriculture",
    title: "Smart Tractor",
    description:
      "An IoT-based smart agriculture project focused on intelligent tractor operations, sensor integration and automation for agricultural applications.",
    image: project2,
    icon: <FaMicrochip />,
    status: "Completed",
    technologies: [
      "ESP32",
      "IoT",
      "Sensors",
      "Automation",
    ],
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    number: "03",
    category: "AI & Deep Learning",
    title: "Plant Disease Detection",
    description:
      "A deep learning solution that identifies plant diseases from leaf images using image classification, model evaluation and explainable AI techniques.",
    image: project3,
    icon: <FaBrain />,
    status: "Completed",
    technologies: [
      "Python",
      "TensorFlow",
      "EfficientNet",
      "ResNet",
      "XAI",
    ],
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    number: "04",
    category: "Full Stack / Campus App",
    title: "Gandhigram Rural Institute Campus App",
    description:
      "A campus-focused application being developed to provide useful digital services and information for students and the institute community.",
    image: project4,
    icon: <FaMobileAlt />,
    status: "In Development",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="section-heading">

        <span className="subtitle">
          Featured Projects
        </span>

        <h2>
          Things I've{" "}
          <span className="gradient-text">
            built.
          </span>
        </h2>

        <p>
          A selection of projects covering IoT, smart agriculture,
          artificial intelligence and full stack development.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.article
            className="project-card"
            key={project.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            {/* Image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <span className="project-number">
                {project.number}
              </span>

              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "status-completed"
                    : "status-development"
                }`}
              >
                {project.status}
              </span>

            </div>

            {/* Content */}

            <div className="project-body">

              <div className="project-category-row">

                <span className="project-icon">
                  {project.icon}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              {/* Technologies */}

              <div className="project-tech">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              {/* Buttons */}

              <div className="project-actions">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary-link"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary-link"
                >
                  View Project
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Projects;