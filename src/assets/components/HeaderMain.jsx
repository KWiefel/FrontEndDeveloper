import "./HeaderMain.css";
import Btn from "./Btn";

const HeaderMain = () => {
  return (
    <section className="header_main">
      <h1>
        Hi, I am <span>John Smith.</span>
      </h1>
      <h3>A Front End Developer.</h3>
      <p>
        Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
        perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
        modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
        minima consectetur.
      </p>
      <Btn textContent={"resume"} />
    </section>
  );
};

export default HeaderMain;
