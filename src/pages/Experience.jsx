// const ExperienceCard = ({ experience }) => {
//   return (
//     <div className="col-lg-6">
//       <div
//         className="card text-white p-4 shadow-lg rounded"
//         style={{
//           background: "linear-gradient(135deg, #1a1a2e, #4e00c2)",
//           height: "200px", // fixed height
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <div className="d-flex align-items-center mb-3">
//           <h5 className="card-title fw-bold mb-0">{experience.title}</h5>
//         </div>

//         {/* Scrollable description */}
//         <div
//           style={{
//             flex: 1,               // take remaining space
//             overflowY: "auto",     // vertical scroll if content overflows
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             WebkitLineClamp: 4,     // max 4 lines before ellipsis
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           {experience.description}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;
import "../App.css"; // import the CSS file

const ExperienceCard = ({ experience }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="experience-card">
        <div className="card-header">
          <h5 className="card-title fw-bold mb-0">{experience.title}</h5>
        </div>
        <div className="card-body">
          {experience.description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
