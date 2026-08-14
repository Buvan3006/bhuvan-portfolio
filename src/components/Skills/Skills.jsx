import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaMicrochip,
  FaServer,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web interfaces.",
    icon: <FaCode />,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        className: "html",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        className: "css",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
        className: "javascript",
      },
      {
        name: "React",
        icon: <FaReact />,
        className: "react",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Building APIs and server-side applications.",
    icon: <FaServer />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        className: "node",
      },
      {
        name: "Express.js",
        icon: <FaCode />,
        className: "express",
      },
      {
        name: "REST API",
        icon: <FaCode />,
        className: "api",
      },
    ],
  },

  {
    title: "Database",
    description:
      "Managing application data using modern database technologies.",
    icon: <FaDatabase />,
    skills: [
      {
        name: "MongoDB",
        icon: <FaDatabase />,
        className: "mongodb",
      },
      {
        name: "MySQL",
        icon: <FaDatabase />,
        className: "mysql",
      },
    ],
  },

  {
    title: "AI & Machine Learning",
    description:
      "Working with Python and deep learning technologies.",
    icon: <FaPython />,
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        className: "python",
      },
      {
        name: "TensorFlow",
        icon: <FaCode />,
        className: "tensorflow",
      },
      {
        name: "Keras",
        icon: <FaCode />,
        className: "keras",
      },
      {
        name: "EfficientNet",
        icon: <FaCode />,
        className: "efficientnet",
      },
      {
        name: "ResNet",
        icon: <FaCode />,
        className: "resnet",
      },
    ],
  },

  {
    title: "IoT & Smart Agriculture",
    description:
      "Developing smart agriculture and automation solutions.",
    icon: <FaMicrochip />,
    skills: [
      {
        name: "ESP32",
        icon: <FaMicrochip />,
        className: "esp32",
      },
      {
        name: "Arduino",
        icon: <FaMicrochip />,
        className: "arduino",
      },
      {
        name: "Blynk",
        icon: <FaCode />,
        className: "blynk",
      },
      {
        name: "Sensors",
        icon: <FaMicrochip />,
        className: "sensors",
      },
      {
        name: "Embedded C",
        icon: <FaCode />,
        className: "embedded",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    description:
      "Tools I use for development, version control and testing.",
    icon: <FaGitAlt />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        className: "git",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        className: "github",
      },
      {
        name: "VS Code",
        icon: <FaCode />,
        className: "vscode",
      },
      {
        name: "Google Colab",
        icon: <FaCode />,
        className: "colab",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">

      <div className="section-heading">
        <span className="subtitle">
          Technical Skills
        </span>

        <h2>
          Technologies I{" "}
          <span className="gradient-text">
            work with.
          </span>
        </h2>

        <p>
          A combination of development, AI, IoT and modern
          technologies that I use to build practical digital solutions.
        </p>
      </div>

      <div className="skills-category-grid">

        {skillCategories.map((category, index) => (
          <div
            className="skills-category-card"
            key={index}
          >

            <div className="category-header">

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-title-area">

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

              </div>

            </div>

            <div className="technology-list">

              {category.skills.map((skill, skillIndex) => (
                <div
                  className="technology-item"
                  key={skillIndex}
                >

                  <span
                    className={`technology-icon ${skill.className}`}
                  >
                    {skill.icon}
                  </span>

                  <span className="technology-name">
                    {skill.name}
                  </span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;