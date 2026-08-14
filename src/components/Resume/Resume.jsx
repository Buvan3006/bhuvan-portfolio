import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaMicrochip,
  FaBrain,
  FaMobileAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import "./Resume.css";

const journey = [
  {
    id: "01",
    period: "Academic",
    icon: <FaGraduationCap />,
    title: "Master of Computer Applications",
    organization: "Gandhigram Rural Institute",
    description:
      "Currently pursuing Master of Computer Applications with a strong interest in Full Stack Development, Artificial Intelligence, Machine Learning and IoT.",
    tags: ["Computer Science", "Development", "AI", "IoT"],
  },
  {
    id: "02",
    period: "IoT Projects",
    icon: <FaMicrochip />,
    title: "Smart Agriculture Projects",
    organization: "Academic & Personal Projects",
    description:
      "Developed IoT-based smart agriculture solutions including Smart Plant Watering & Monitoring System and Smart Tractor projects.",
    tags: ["ESP32", "IoT", "Sensors", "Smart Agriculture"],
  },
  {
    id: "03",
    period: "AI / ML",
    icon: <FaBrain />,
    title: "Plant Disease Detection",
    organization: "Deep Learning Project",
    description:
      "Built a plant disease classification system using deep learning models and explored Explainable AI techniques for model interpretation.",
    tags: ["Python", "EfficientNet", "ResNet", "XAI"],
  },
  {
    id: "04",
    period: "Current",
    icon: <FaMobileAlt />,
    title: "Gandhigram Campus App",
    organization: "Full Stack Development",
    description:
      "Currently developing a campus-focused application designed to provide useful digital services and information for students and the institute community.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

function Resume() {
  return (
    <section className="resume section" id="resume">

      <div className="section-heading">
        <span className="subtitle">
          My Journey
        </span>

        <h2>
          Education &
          <span className="gradient-text">
            {" "}Activity.
          </span>
        </h2>

        <p>
          A visual overview of my academic background, technical
          projects and current development journey.
        </p>
      </div>

      <div className="journey-container">

        {journey.map((item, index) => (
          <motion.article
            className="journey-card"
            key={item.id}
            initial={{
              opacity: 0,
              y: 40,
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

            <div className="journey-number">
              {item.id}
            </div>

            <div className="journey-icon">
              {item.icon}
            </div>

            <div className="journey-content">

              <span className="journey-period">
                {item.period}
              </span>

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.organization}
              </h4>

              <p>
                {item.description}
              </p>

              <div className="journey-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <div className="journey-arrow">
              <FaArrowRight />
            </div>

          </motion.article>
        ))}

      </div>

      <motion.div
        className="resume-cta"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >

        <div className="resume-cta-icon">
          <FaDownload />
        </div>

        <div className="resume-cta-content">
          <h3>
            Want my complete resume?
          </h3>

          <p>
            Download the full PDF to explore my education,
            projects and technical experience.
          </p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>

      </motion.div>

    </section>
  );
}

export default Resume;