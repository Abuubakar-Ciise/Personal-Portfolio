import './AboutMe.css';
import MYImage from '../Assets/WhatsApp Image 2024-03-23 at 19.16.51_d679109e.jpg';
import Bio from "./Bio";

const bioData = {
    background: "Computer Science student at Jamhuriya University, passionate about web development (HTML, CSS, JavaScript). I also enjoy building desktop applications, as demonstrated by my restaurant management system project. Recently, I've been fascinated by Artificial Intelligence and Machine Learning. My image recognition project using Python fueled this interest, and I'm eager to explore its potential applications.",
    interests: "Driven by a passion for web development (HTML, CSS, JavaScript), I enjoy crafting visually appealing and user-friendly web experiences. Beyond web development, I'm fascinated by the potential of Artificial Intelligence (AI) and Machine Learning (ML). My recent image recognition project ignited my interest in exploring how AI can be applied to solve real-world problems.",
    education: "Currently pursuing a Computer Science degree at Jamhuriya University. My passion lies in web development, and I'm proficient in HTML, CSS, and JavaScript. I've also gained hands-on experience building desktop applications, showcased by my restaurant management system project. This diverse educational background has equipped me with the technical foundation to excel in various coding domains.",
    biography: "I'am Abuubakar Ciise and i am a Student in Just Also i am a Full-Stack Developer",
};

const AboutMe = () => {
    return (
        <div className="about-container" id="Bio">
            <div className="left-right">
                <div className="left">
                    <img src={MYImage} alt="" />
                </div>
                <div className="right">
                <Bio bioData={bioData} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
