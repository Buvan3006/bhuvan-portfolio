import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

import "./Services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern and responsive user interfaces using HTML, CSS, JavaScript and React.",
  },
  {
    icon: <FaServer />,
    number: "02",
    title: "Backend Development",
    description:
      "Developing REST APIs and backend applications using Node.js, Express.js and database technologies.",
  },
  {
    icon: <FaMobileAlt />,
    number: "03",
    title: "Responsive Design",
    description:
      "Creating interfaces that provide a consistent experience across mobile, tablet and desktop devices.",
  },
  {
    icon: <FaPaintBrush />,
    number: "04",
    title: "UI / UX Design",
    description:
      "Designing clean, intuitive and visually engaging interfaces with a strong focus on usability.",
  },
];

function Services() {
  return (
    <section className="services section" id="services">

      <div className="section-heading">

        <span className="subtitle">
          My Services
        </span>

        <h2>
          What I can
          <span className="gradient-text">
            {" "}build.
          </span>
        </h2>

        <p>
          I combine development, design and problem-solving
          to create practical digital experiences.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <motion.div
            className="service-card"
            key={service.number}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
            }}
          >

            <div className="service-top">

              <span className="service-number">
                {service.number}
              </span>

              <div className="service-icon">
                {service.icon}
              </div>

            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <span className="service-line"></span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Services;