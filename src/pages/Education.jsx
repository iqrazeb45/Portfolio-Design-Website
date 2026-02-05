// import React from "react";

// export default function Education() {
//   // Example education data
//   const educationData = [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "COMSATS University Islamabad, Abbottabad",
//       year: "2026",
//       description: "Focused on web development, mobile app development, and problem-solving"
//     },
//   ];

//   return (
//     <section id="education" className="education-section py-5 rounded" style={{ backgroundColor: "#1a0d38" }}>
//       <div className="container">

//         <div className="row g-4" style= {{justifyContent: "center"}}>
//           {educationData.map((edu, index) => (
//             <div key={index} className="col-lg-6">
//               <div className="card shadow-lg p-4 rounded" style={{ backgroundColor: "#110720", color: "#fff" }}>
//                 <h4 className="fw-bold mb-2">{edu.degree}</h4>
//                 <p className="mb-1"><strong>{edu.institution}</strong> | {edu.year}</p>
//                 <p className="mb-0">{edu.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "COMSATS University Islamabad, Abbottabad",
      year: "2022 — 2026",
      description: "Specializing in Full-Stack Development. Actively involved in competitive programming and modern web frameworks.",
      skills: ["React", "JavaScript", "Html", "CSS","Flutter"]
    },
  ];

  return (
    <section id="education" className="py-5" style={{ backgroundColor: "#0f051d", color: "#e0e0e0" }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div style={{ height: "4px", width: "60px", backgroundColor: "#7b2ff7", margin: "0 auto", borderRadius: "2px" }}></div>
        </div>

        <div className="row justify-content-center">
          {educationData.map((edu, index) => (
            <div key={index} className="col-lg-8">
              <div 
                className="education-card p-4 p-md-5 rounded-4 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, border-color 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#7b2ff7";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div className="d-md-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="h4 fw-bold mb-1" style={{ color: "#7b2ff7" }}>{edu.degree}</h3>
                    <h5 className="text-white-50 mb-3">{edu.institution}</h5>
                  </div>
                  <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: "#7b2ff7" }}>
                    {edu.year}
                  </span>
                </div>

                <p className="lead fs-6 text-secondary mb-4">
                  {edu.description}
                </p>

                {/* Skill Tags */}
                <div className="d-flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="small px-2 py-1 rounded" 
                      style={{ border: "1px solid #444", color: "#aaa", fontSize: "0.85rem" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}