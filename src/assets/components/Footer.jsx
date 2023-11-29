import "./Footer.css";
import Btn from "./Btn";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Contact</h3>
      <Btn textContent={"email me"} />
      <p>Created by Konstantin Wiefel</p>
    </footer>
  );
};

export default Footer;
