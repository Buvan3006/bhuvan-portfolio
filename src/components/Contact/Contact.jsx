import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="contact-background"></div>

      <div className="section-heading">

        <span className="subtitle">
          Get In Touch
        </span>

        <h2>
          Let's build something
          <span className="gradient-text">
            {" "}great.
          </span>
        </h2>

        <p>
          Have a project, idea or opportunity?
          I'd love to hear from you.
        </p>

      </div>

      <div className="contact-container">

        {/* Contact Information */}

        <motion.div
          className="contact-left"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="contact-intro">
            <h3>
              Let's talk.
            </h3>

            <p>
              Whether you want to discuss a project,
              collaboration or just say hello, feel free
              to reach out.
            </p>
          </div>

          <div className="contact-info-list">

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <strong>
                  grimca032@gmail.com
                </strong>
              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  +91 9345046909
                </strong>
              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <strong>
                  Dindigul, Tamil Nadu, India
                </strong>
              </div>

            </div>

          </div>

          <div className="contact-social">

            <span>
              Connect with me
            </span>

            <div>

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

            </div>

          </div>

        </motion.div>

        {/* Contact Form */}

        <motion.div
          className="contact-form-wrapper"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="What is this about?"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;