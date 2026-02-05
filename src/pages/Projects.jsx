// import React from "react";

// export default function Projects() {
//   const projectsData = [
//     {
//       title: "Amazon Clone Website",
//       description:
//         "A responsive Amazon clone built using HTML, CSS with product sections and UI design.",
//       tech: ["HTML", "CSS", ],
//       image:
//         "https://images.unsplash.com/photo-1632813404574-b63d317ee258?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "FYP Connect (Supervisor Finder App)",
//       description:
//         "A Flutter + Firebase application for students to find Final Year Project supervisors with recommendation system.",
//       tech: ["Flutter", "Firebase", "Python"],
//       image:
//         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Game Shop Website",
//       description:
//         "A React based game store where users can browse games and add to cart with database integration.",
//       tech: ["React", "Bootstrap", "MongoDB"],
//       image:
//         "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Chess Game App",
//       description:
//         "A professional chess application built in Flutter with all chess rules and a modern UI.",
//       tech: ["Flutter", "Dart", "Firebase"],
//       image:
//         "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=900&q=60",
//     },
	   
// 	   {
//       title: "Chat Us Application",
//       description:
//         "A real-time chat application built using Flutter and Firebase. Users can sign up, login, send messages instantly, share images, and manage profiles with smooth UI.",
//       tech: ["Flutter", "Firebase", "Firestore Database", "Notifications"],
//       image:
//         "https://plus.unsplash.com/premium_photo-1721697080473-8281f165fbfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   return (
//     <section className="container py-3" id="projects">
//       {/* Heading */}
//       <div className="text-center mb-5">
//         <p className="text-light fs-5">
//           Some of my best work in Web and Mobile Development
//         </p>
//       </div>

//       {/* Carousel */}
//       <div
//         id="projectsCarousel"
//         className="carousel slide shadow-lg rounded overflow-hidden"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           {projectsData.map((project, index) => (
//             <div
//               className={`carousel-item ${index === 0 ? "active" : ""}`}
//               key={index}
//             >
//               <div className="row align-items-center bg-dark p-4">
//                 {/* Left Side Image */}
//                 <div className="col-lg-6 mb-4 mb-lg-0">
//                   <img
//                     src={project.image}
//                     className="img-fluid rounded shadow"
//                     alt={project.title}
//                     style={{ height: "350px", width: "100%", objectFit: "cover" }}
//                   />
//                 </div>

//                 {/* Right Side Content */}
//                 <div className="col-lg-6 text-white">
//                   <h3 className="fw-bold">{project.title}</h3>
//                   <p className="text-light mt-3">{project.description}</p>

//                   {/* Tech Badges */}
//                   <div className="mt-3">
//                     {project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="badge bg-primary me-2 mb-2 p-2"
//                         style={{ fontSize: "14px" }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Buttons */}
//                   <div className="mt-4">
                   
//                     <button className="btn btn-success me-3 px-4" onClick={() => window.open("https://github.com/iqrazeb45", "_blank")}>
//                       GitHub
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Previous Button */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#projectsCarousel"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>

//         {/* Next Button */}
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#projectsCarousel"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function Projects() {
  const projectsData = [
    {
      title: "Amazon Clone Website",
      description:
        "A responsive Amazon clone built using HTML, CSS with product sections and UI design.",
      tech: ["HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1632813404574-b63d317ee258?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "FYP Connect (Supervisor Finder App)",
      description:
        "A Flutter + Firebase application for students to find Final Year Project supervisors with recommendation system.",
      tech: ["Flutter", "Firebase", "Python"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Game Shop Website",
      description:
        "A React based game store where users can browse games and add to cart with database integration.",
      tech: ["React", "Bootstrap", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Chess Game App",
      description:
        "A professional chess application built in Flutter with all chess rules and a modern UI.",
      tech: ["Flutter", "Dart", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Chat Us Application",
      description:
        "A real-time chat application built using Flutter and Firebase. Users can sign up, login, send messages instantly, share images, and manage profiles with smooth UI.",
      tech: ["Flutter", "Firebase", "Firestore Database", "Notifications"],
      image:
        "https://plus.unsplash.com/premium_photo-1721697080473-8281f165fbfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="container py-5" id="projects">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="text-light fs-5">
          Some of my best work in Web and Mobile Development
        </p>
      </div>

      {/* Carousel */}
      <div
        id="projectsCarousel"
        className="carousel slide shadow-lg rounded overflow-hidden"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {projectsData.map((project, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row align-items-center bg-dark p-3 p-lg-4">
                {/* Left Side Image */}
                <div className="col-lg-6 col-12 mb-3 mb-lg-0 text-center">
                  <img
                    src={project.image}
                    className="img-fluid rounded shadow"
                    alt={project.title}
                    style={{
                      height: "auto",
                      maxHeight: "350px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Right Side Content */}
                <div className="col-lg-6 col-12 text-center text-lg-start text-white">
                  <h3 className="fw-bold">{project.title}</h3>
                  <p className="text-light mt-3">{project.description}</p>

                  {/* Tech Badges */}
                  <div className="mt-3 d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary p-2"
                        style={{ fontSize: "14px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <div className="mt-4">
                    <button
                      className="btn btn-success px-4"
                      onClick={() =>
                        window.open("https://github.com/iqrazeb45", "_blank")
                      }
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
