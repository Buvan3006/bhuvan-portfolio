import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";

<div className="right">
    <img src={profile} alt="Bhuvan" className="profile-image" />
</div>
function Home() {
  return (
    <section id="home" className="hero">

      <div className="left">

        <h3>Hello 👋 I'm</h3>

        <h1>Bhuvanesan M</h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1500,
            "React Developer",
            1500,
            "JavaScript Developer",
            1500,
          ]}
          speed={40}
          repeat={Infinity}
        />

        <p>
          Passionate about building modern websites,
          responsive applications and solving real-world problems.
        </p>

        <div className="buttons">

          <button>Download Resume</button>

          <button>View Projects</button>

        </div>

        <div className="social">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="right">

        <img
          src="/profile.png"
          alt="profile"
        />

      </div>

    </section>
  )
}

export default Home;