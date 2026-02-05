// import { Link } from "react-router-dom";
// import "../App.css";
// import logo from "../assets/name.png"; 
// export default function Navbar() {
//   return (
//     <header className="custom-header fixed-top">
//       <nav className="navbar navbar-expand-lg custom-navbar">
//         <div className="container d-flex align-items-center justify-content-between">
          
//           {/* Logo */}
//             <img src={logo} alt="Logo" className="logo-img"  />

//           {/* Links */}
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav custom-nav gap-lg-4">
//               <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/About">
//                   About
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/Education">
//                   Education
//                 </Link>
//               </li>

//                <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/Exerience">
//                   Experience
//                 </Link>
//               </li>

//                <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/Projects">
//                   Projects
//                 </Link>
//               </li>

//                <li className="nav-item">
//                 <Link className="nav-link custom-link" to="/Contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </nav>
//     </header>
//   );
// }
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
