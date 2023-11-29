import "./Btn.css";

const Btn = (props) => {
  return (
    <a href="#" className="btn">
      {props.textContent}
    </a>
  );
};

export default Btn;
