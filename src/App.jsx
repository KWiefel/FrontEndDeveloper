import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main";
import Projects from "./assets/components/Projects";
import Footer from "./assets/components/Footer";
import Skills from "./assets/components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Navbar switchdarkmode={setDarkMode} darkmodesetter={darkMode} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
