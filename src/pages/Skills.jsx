import React from "react";
import "../App.css";

export default function Skills() {
  const skills = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Typescript", "Tailwind"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Firebase"] },
    { title: "Database", items: ["MongoDB", "SQL"] },
    { title: "Mobile Development", items: ["Flutter", "Dart"] },
    { title: "Tools", items: ["Git", "GitHub", "Figma", "VS Code"] },
  ];

  return (
    <div className="row g-4 justify-content-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="skill-card p-4 h-100 shadow-lg">
            <h4 className="fw-bold text-white mb-3">{skill.title}</h4>

            <ul className="list-unstyled text-light mb-0">
              {skill.items.map((item, i) => (
                <li key={i} className="mb-2">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
