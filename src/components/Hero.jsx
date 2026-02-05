import "../App.css";
import hero from "../assets/hero.png";
import tools from "../assets/tools.png";
import experienceData from "../data/experienceData";
import ExperienceCard from "../pages/Experience.jsx";
import About from "../pages/About.jsx"; // adjust the path if needed
import Education from "../pages/Education.jsx";
import Projects from "../pages/Projects.jsx";
import Footer from "./Footer.jsx";
import Skills from "../pages/Skills.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-6 text-white">
            <p className="mb-2">A Developer who</p>
            <h1 className="display-3 fw-bold">
              Turns ideas into <span className="text-purple">Code</span>...
            </h1>
            <p className="lead mb-4">
              Because every elegant solution starts with the right logic.
            </p>
            <h2 className="fw-bold">I'm a Software Developer</h2>
            <p className="mb-0">
              Currently, I'm a Web Developer at{" "}
              <span className="text-primary">Firnas.Tech</span>
            </p>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 position-relative mt-4 mt-lg-0 text-center">
            <img
              src={hero}
              alt="Iqra Zeb - Software Developer"
              className="img-fluid hero-img shadow-lg rounded"
              style={{ maxWidth: "300px" }}
            />
            <p className="fs-5 text-white opacity-75 mx-auto mt-4 mb-0 w-75">
              I build responsive websites and intuitive mobile apps that solve
              real problems and create delightful user experiences.
            </p>
          </div>
        </div>

        {/* { About Section} */}
        <div className="row mt-5">
          <div className="col text-center">
            <h2 id="about" className="display-4 fw-bold text-white mb-5">
              About Me
            </h2>
            <About />
          </div>
        </div>

        {/* { Education Section} */}
        <div id="education" className="row mt-5">
          <div className="col text-center">
            <h2 className="display-4 fw-bold text-white mb-5">Education</h2>
            <Education />
          </div>
        </div>
        {/* Skills Section */}
        <div id="skills" className="row mt-5">
          <div className="col text-center">
            <h2 className="display-4 fw-bold text-white mb-5">Skills</h2>
            <Skills />
          </div>
        </div>

        {/* Work Experience Section */}
        <div id="experience" className="row mt-5">
          <div className="col text-center">
            <h2 className="display-4 fw-bold text-white mb-5">
              Work Experience
            </h2>
          </div>

          <div className="row g-4">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>

        <section
          className="skills-section text-center py-5"
          style={{ backgroundColor: "#110720" }}
        >
          <div className="container">
            {/* Heading */}
            <p
              className="text-2xl fw-bold text-white mx-auto mb-3"
              style={{ maxWidth: "800px", fontSize: "2rem" }}
            >
              I'm currently looking to join a{" "}
              <span className="text-purple" style={{ color: "#a855f7" }}>
                cross-functional team
              </span>
              <br />
              <span
                className="text-purple"
                style={{ fontSize: "1rem", color: "#dddde8" }}
              >
                that values building user-friendly and impactful applications
              </span>
            </p>

            {/* Illustration */}
            <div className="illustration mt-4">
              <img
                src={tools}
                alt="Skills Illustration"
                className="img-fluid"
                style={{ maxWidth: "800px", width: "100%", height: "auto" }}
              />
            </div>

            {/* { Projects Section} */}
            <div id="projects" className="row mt-5">
              <div className="col text-center">
                <h2 className="display-4 fw-bold text-white mb-5">Projects</h2>
                <Projects />
              </div>
            </div>

            {/* { Footer Section} */}
            <div id="contact" className="row mt-5">
              <div className=" text-center">
                <h2 className="display-4 fw-bold text-white mb-5">Contact</h2>
              </div>
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
