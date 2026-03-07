
import "../App.css"; // import the CSS file

const ExperienceCard = ({ experience }) => {
  return (
    <section className="col-lg-6 mb-4 py-1">
      <div className="experience-card">
        <div className="card-header">
          <h5 className="card-title fw-bold mb-0 ">{experience.title}</h5>
        </div>
        <div className="card-body">
          {experience.description}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
