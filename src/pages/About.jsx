

// import React from "react";

// export default function About() {
//   return (
//     <section
//       className="about-section py-4 py-md-5 text-center"
//       style={{ backgroundColor: "#1a0d38" }}
//     >
//       <div className="container px-3 px-md-5 mt-0">
//         <p
//           className="text-white mx-auto"
//           style={{
//             maxWidth: "850px",
//             fontSize: "clamp(1rem, 2vw, 1.2rem)",
//             lineHeight: "1.5",
           
//           }}
//         >
//           I am a Computer Science graduate with a strong interest in web and
//           mobile application development. I have hands-on experience with
//           Flutter, Firebase, HTML, CSS, JavaScript, and React, and I enjoy
//           building user-friendly applications that solve real-world problems. I
//           am passionate about continuous learning, improving my technical
//           skills, and growing as a software developer.
//         </p>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function About() {
  return (
    <section
      className="about-section text-center py-4 py-md-5"
      style={{
        backgroundColor: "#1a0d38",
        height: "auto",
        overflow: "visible",
      }}
    >
      <div className="container">
        <p
          className="text-white mx-auto mb-0 px-2 px-md-4"
          style={{
            maxWidth: "800px",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: "1.8",
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          I am a Computer Science graduate with a strong interest in web and
          mobile application development. I have hands-on experience with
          Flutter, Firebase, HTML, CSS, JavaScript, and React, and I enjoy
          building user-friendly applications that solve real-world problems. I
          am passionate about continuous learning, improving my technical skills,
          and growing as a software developer.
        </p>
      </div>
    </section>
  );
}
