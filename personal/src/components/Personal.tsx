import React from "react"
import "./Personal.css"

export const Personal: React.FC = () => {
    return (
        <React.Fragment>
            <div className="main-content">
                <div className="introduction-wrapper">
                    <div className="hello-component">
                        <p>Hello, I'm</p>
                    </div>
                    <p className="name-component">Petrovan</p>
                    <p className="name-component">Alex</p>
                    <p className="position-component">Software Developer.</p>
                </div>
                <div className="about-wrapper">
                    
                </div>
            </div>
            {/* <ul>
                <li>A high-resolution photo of yourself to make your website more personable.</li>
                <li>A short and engaging biography that highlights your background, interests, and expertise.</li>
                <li>A summary of your skills, talents, and accomplishments.</li>
                <li>Perhaps a timeline or infographic showcasing your education and career journey.</li>
                <li>Links to your social media profiles, professional networks, or online portfolios.</li>
                <li>A link to your CV.</li>
            </ul> */}
        </React.Fragment>
    )
}