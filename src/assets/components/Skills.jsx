import "./Skills.css";

const Skills = ({ switchdarkmode, darkmodesetter }) => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills__wrapper">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
      </div>
      <div className="skills__wrapper">
        <p className={darkmodesetter ? "dark" : ""}>SASS</p>
        <p>Tailwind CSS</p>
        <p>Git</p>
        <p>UI/UX</p>
      </div>
    </section>
  );
};

export default Skills;
