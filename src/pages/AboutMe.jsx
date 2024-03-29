import React from "react";
import './AboutMe.css'
import MYImage from '../Assets/WhatsApp Image 2024-03-23 at 19.16.51_d679109e.jpg'

const AboutMe = () => {
    return (
        <div className="about-container" id="Bio">
            <div className="left-right">
                <div className="left" >
                    <h3>About Me</h3>
                    <div className="img">
                        {/* <img src={MYImage} alt="" /> */}
                    </div>
                </div>
                <div className="right">
                    <div className="biography">
                        <h2>Biography</h2>
                        <p>
                        My name is Abuubakar and I am currently in my junior year at university, majoring in Computer Science. I have always had a keen interest in technology and computers, driving my enthusiasm for coding. Outside of my studies, I indulge in various hobbies such as tinkering with hardware, exploring new software, and participating in coding competitions.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
