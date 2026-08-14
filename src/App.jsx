import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Services />

        <Projects />

        <Certificates />

        <Resume />

        <Contact />

      </main>

      <Footer />

      <ScrollToTop />

    </>
  );
}

export default App;