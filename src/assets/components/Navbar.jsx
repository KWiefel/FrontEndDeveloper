import "./Navbar.css";
import Sun from "./../img/sonne.png";
import Moon from "./../img/mond.png";

const Navbar = ({ switchdarkmode, darkmodesetter }) => {
  const change = () => {
    switchdarkmode((darkMode) => !darkMode);
  };

  return (
    <header>
      <nav className={darkmodesetter ? "dark" : ""}>
        <p className="logo">JS.</p>
        <div className="links">
          <a href="#">projects</a>
          <a href="#">skills</a>
          <a href="#">contact</a>
          <img src={darkmodesetter ? Sun : Moon} alt="" onClick={change} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
