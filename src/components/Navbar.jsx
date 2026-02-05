
import "../App.css";
import logo from "../assets/name.png"; 

export default function Navbar() {
  return (
    <header className="custom-header fixed-top">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <img src={logo} alt="Logo" className="logo-img" />

          {/* Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav custom-nav gap-lg-4">
              <li className="nav-item">
                <a className="nav-link custom-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#education">
                  Education
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link custom-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#experience">
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
