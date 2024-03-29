import React from "react";
import './pages/Header.jsx'
import Header from "./pages/Header.jsx";
import Home from './pages/HomePage.jsx'
// import Bio from "./pages/Bio.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from './pages/Projects.jsx'
import Contact from './pages//Contact .jsx'
import AboutMe from "./pages/AboutMe.jsx";


const App = ()=> {
  return (
    <div>
      <Header/>
      
      <Home/>

      {/* <Bio /> */}
      <AboutMe/>

      <Skills/>

      <Projects/>

      <Contact/>
    </div>
  )
}
export default App