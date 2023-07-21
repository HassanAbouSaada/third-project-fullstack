import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, color, description, _id } ) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
        <h3>{color}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ProjectCard;