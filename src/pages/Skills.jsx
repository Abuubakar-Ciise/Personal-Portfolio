import React from "react";
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt,FaGithub } from 'react-icons/fa';
// Abuubakar Ciise
import { DiGit, DiVisualstudio, DiMysql, DiReact, DiNodejs } from 'react-icons/di';

import {SiCsharp} from 'react-icons/si';
// c1210122
import './Skills.css'
import SkillCard from "../components/Card";

const Skills = ()=> {

    return (
        <div className="skill-container" id="skills">
            <div className="Experience"><h1>Experience</h1></div>
            <div className="familiar"><p>The familiar tools and technologies include</p></div>

            <div className="skill-cards">
            <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(251, 109, 72,0.8)"
                 > 
                    <div><h2><FaHtml5 size={50} color="#FB6D48" /></h2> <h2>HTML</h2></div>
                </SkillCard  >
                </div>

                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(0, 141, 218,0.5)"
                 > 
                    <div><h2><FaCss3Alt size={50} color="#008DDA" /></h2> <h2>CSS</h2></div>
                </SkillCard  >
                </div>


                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(235, 244, 0,1)"
                 > 
                    <div><h2><FaJs size={50} color="#EBF400" /></h2> <h2>JavaScript</h2></div>
                </SkillCard  >
                </div>


                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(150, 239, 255, 1)"
                 > 
                    <div><h2><DiReact size={50} color="#96EFFF" /></h2> <h2>React</h2></div>
                </SkillCard  >
                </div>

                <div className="skill-cardss">
                <SkillCard  
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(231, 41, 41,0.5)"
                > 
                    <div><h2><FaJava size={50} color="#E72929" /></h2> <h2>Java</h2></div>
                </SkillCard>
                </div>

                <div className="skill-cardss">
                <SkillCard  
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(127, 39, 255,0.5)"
                > 
                    <div><h2><SiCsharp size={50} color="#7F27FF" /></h2> <h2>Csharp</h2></div>
                </SkillCard>
                </div>
{/* 
                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(251, 109, 72,0.8)"
                 > 
                    <div><h2><DiGit size={50} color="#FB6D48" /></h2> <h2>Git</h2></div>
                </SkillCard  >
                </div> */}

                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(0, 0, 0,0.8)"
                 > 
                    <div><h2><FaGithub size={50} color="black" /></h2> <h2>GitHub</h2></div>
                </SkillCard  >
                </div>

                <div className="skill-cardss"> 
                <SkillCard 
                        color="white" 
                        width="200px"
                        boxShadow="0px 4px 8px rgba(0, 141, 218,0.5)"
                 > 
                    <div><h2><DiVisualstudio size={50} color="#008DDA" /></h2> <h2>Visualstudio</h2></div>
                </SkillCard  >
                </div>


                


            </div>
        </div>
    )
    
}

export default Skills
