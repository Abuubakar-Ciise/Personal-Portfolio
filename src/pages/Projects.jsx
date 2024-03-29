import React from "react"
import './Projects.css'
// c1210122
import ProjectsCard from '../components/Card'
import Button from "../components/Home-button"
// Abuubakar Ciise
import img from '../Assets/restaurant-management-system-main.jpg'
// c1210122

const Projects = ()=> {


    return(
        <div className="projects-container" id="Projects">
            {/* <h1>Projects</h1> */}
            <div className="projects-cards">
                <div className="projects-cardss">
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>restaurant</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div>

                <div className="projects-cardss">
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>Project 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div>

                <div className="projects-cardss">
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>Project 3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div>

                {/* <div className="projects-cardss" >
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>Project 4</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div>

                <div className="projects-cardss">
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>Project 5</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div>

                <div className="projects-cardss">
                    <ProjectsCard  color="#FEFBF6"  width="500px">
                        <img src={img} alt="" />
                        <h1>Project 6</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum perferendis unde officia? Ullam, debitis ratione. Aspernatur officia qui ex eligendi error, nihil quisquam maxime exercitationem consectetur rerum suscipit iusto.</p>
                        <div className="buttons">
                            <Button className="Projects-button"> Live Preview</Button>
                            <Button className="Projects-button"> Source Code</Button>
                            </div>
                    </ProjectsCard>
                </div> */}
            </div>
        </div>
    )
}
export default Projects
