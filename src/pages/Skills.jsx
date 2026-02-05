
import React from "react";
import "../App.css"; // We'll define the professional styles here

export default function Skills() {
  const skills = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Typescript", "Tailwind"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Firebase", "SQL", "MongoDB"] },
    { title: "Mobile App", items: ["Flutter", "Dart"] },
    { title: "Tools", items: ["Git", "GitHub", "Figma", "VS Code", "Android Studio"] },
  ];

  return (
    <section className="skills-section py-3">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="glass-card">
                <div className="card-content">
                  <div className="title-wrapper">
                    <h4 className="skill-title">{skill.title}</h4>
                    <div className="title-underline"></div>
                  </div>
                  <div className="skills-list">
                    {skill.items.map((item, i) => (
                      <span key={i} className="skill-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Decorative background blur */}
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}