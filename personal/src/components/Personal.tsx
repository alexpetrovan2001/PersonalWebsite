import React from "react"
import "./Personal.css"

export const Personal: React.FC = () => (
    <React.Fragment>
        <div className="flex-container-column personal-main-container">
            <div className="personal-introduction-container">
                <p className="medium-personal-font">Welcome to my World</p>
                <div className="flex-row-container">
                    <p className="big-personal-font">Hi, I'm&nbsp;</p>
                    <p className="big-personal-font gold-font">Petrovan Alex</p>
                </div>
                <p className="medium-personal-font">software developer.</p>
            </div>
            <div className="personal-description-container">
                <p className="medium-personal-font gray-font">
                    Education Background
                </p>
                <p className="small-personal-font">
                I am currently embarking on my third and final year of study at Babes Bolyai University in Cluj Napoca, where I've been immersed in the world of computer science. My academic journey has been a dynamic exploration of algorithms, data structures, and software engineering principles. I've had the privilege of collaborating on diverse coding projects, expanding my proficiency in fields such as artificial intelligence and web development. My education at this esteemed institution has not only fortified my technical skills but has also nurtured my analytical thinking and problem-solving aptitude, setting the stage for my aspirations in the technology realm.
                </p>
                <p className="medium-personal-font gray-font">
                    Professional Background
                </p>
                <p className="small-personal-font">
                With a year of professional experience in the automotive industry, I've harnessed my software development skills to contribute to innovative solutions within the industry. This experience allowed me to work in collaborative teams, translating intricate technical concepts into practical applications that drive progress. Prior to my software journey, I held diverse roles ranging from bartending to guiding individuals through the paperwork involved in setting up businesses. These ventures have cultivated my adaptability, communication acumen, and entrepreneurial spirit, which I now channel into crafting efficient and impactful software solutions.
                </p>
            </div>
            <div>
                
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