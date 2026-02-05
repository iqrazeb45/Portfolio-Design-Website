
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
