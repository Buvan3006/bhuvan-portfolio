import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaFilePdf,
} from "react-icons/fa";

import "./Certificates.css";

const certificates = [
  {
    id: 1,
    title: "Certificate 01",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate1.pdf",
  },
  {
    id: 2,
    title: "Certificate 02",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate2.pdf",
  },
  {
    id: 3,
    title: "Certificate 03",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate3.pdf",
  },
  {
    id: 4,
    title: "Certificate 04",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate4.pdf",
  },
  {
    id: 5,
    title: "Certificate 05",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate5.pdf",
  },
  {
    id: 6,
    title: "Certificate 06",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate6.pdf",
  },
  {
    id: 7,
    title: "Certificate 07",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate7.pdf",
  },
  {
    id: 8,
    title: "Certificate 08",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate8.pdf",
  },
  {
    id: 9,
    title: "Certificate 09",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate9.pdf",
  },
  {
    id: 10,
    title: "Certificate 10",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate10.pdf",
  },
  {
    id: 11,
    title: "Certificate 11",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate11.pdf",
  },
  {
    id: 12,
    title: "Certificate 12",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate12.pdf",
  },
  {
    id: 13,
    title: "Certificate 13",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate13.pdf",
  },
  {
    id: 14,
    title: "Certificate 14",
    organization: "Your Organization",
    year: "2025",
    pdf: "/certificates/certificate14.pdf",
  },
];

function Certificates() {
  return (
    <section
      className="certificates-section"
      id="certificates"
    >
      <div className="certificates-container">

        {/* Section Header */}

        <motion.div
          className="certificates-header"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="certificates-subtitle">
            My Achievements
          </span>

          <h2>
            Certifications &{" "}
            <span>Achievements</span>
          </h2>

          <p>
            A collection of certifications that showcase
            my technical knowledge, continuous learning,
            and professional development.
          </p>
        </motion.div>


        {/* Certificate Grid */}

        <div className="certificates-grid">

          {certificates.map((certificate, index) => (
            <motion.div
              className="certificate-card"
              key={certificate.id}
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
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* Top Icon */}

              <div className="certificate-top">

                <div className="certificate-icon">
                  <FaCertificate />
                </div>

                <div className="pdf-icon">
                  <FaFilePdf />
                </div>

              </div>


              {/* Certificate Number */}

              <span className="certificate-number">
                {String(certificate.id).padStart(2, "0")}
              </span>


              {/* Certificate Information */}

              <div className="certificate-info">

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.organization}
                </p>

                <span className="certificate-year">
                  {certificate.year}
                </span>

              </div>


              {/* View Button */}

              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-button"
              >
                <span>
                  View Certificate
                </span>

                <FaExternalLinkAlt />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;