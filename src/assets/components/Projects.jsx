import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project_card__wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
