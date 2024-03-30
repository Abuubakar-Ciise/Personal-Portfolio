import React, { useState} from "react";
import './Bio.css'
const Bio =({bioData}) => {
    const [activeSection,setActiveSection] = useState("biography");

    const hadleSection = (section)=> {
        setActiveSection(section);
    };

    const renderCurrentContant = ()=> {
        const currentParagaraph = bioData[activeSection];
        return <p>{currentParagaraph}</p>
    }
    return (
        <div className="bioContainer">
            <button className={`bio-button ${activeSection === 'biography' ? 'active': ''}`}
            onClick={()=> hadleSection('biography')}
            >
            Biography</button>
            <button className={`bio-button ${activeSection === 'background' ? 'active' : ''}`}
             onClick={() => hadleSection('background')}>
                background
            </button>

            <button className={`bio-button ${activeSection === 'education' ? 'active' : ''}`}
             onClick={() => hadleSection('education')}>
                education
            </button>

            <button className={`bio-button ${activeSection === 'interests' ? 'active' : ''}`}
             onClick={() => hadleSection('interests')}>
                interests
            </button>
            <div className="bio-content">{renderCurrentContant()}</div>
        </div>
    )
}
export default Bio
