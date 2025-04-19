import NavbarSection from "./components/NavbarSection";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";
import './App.css'
import Certifications from "./components/Certifications";
import ContactUs from "./components/ContactUs";
function App() {


      const [theme, setTheme] = useState("light");
  
  
      const changeTheme = () => {
          if (theme === "light") {
              setTheme("dark")
          } else {
              setTheme("light")
          }
      }
      const app = theme === 'light'?'App':"App-dark"

  return (
    <div className={app}>
      
      <NavbarSection changeTheme={changeTheme} theme={theme} />
      <Home changeTheme={changeTheme} theme={theme}  />
      <About changeTheme={changeTheme} theme={theme}  />
      <Skills changeTheme={changeTheme} theme={theme} />
      <Projects changeTheme={changeTheme} theme={theme} />
      <Certifications changeTheme={changeTheme} theme={theme} />
      <ContactUs changeTheme={changeTheme} theme={theme}  />

    </div>
  );
}

export default App;
