import React from "react"
import PostComponent from "./CustomComponents/PostComponent/PostComponent"
import "./Work.css"

export const Work: React.FC = () => {
    return (
        <React.Fragment>
            <div className="flex-container-column work-main-container">
                <div className="introduction-container">
                    <p className="medium-font white-font">Welcome to my Projects World</p>
                    <div className="flex-row-container">
                        <p className="big-font white-font">Explore the&nbsp;</p>
                        <p className="big-font gold-font">Evolution</p>
                    </div>
                    <p className="medium-font white-font">of my skills and expertise.</p>
                </div>
                <PostComponent dataPath='/data/work-posts.json'/>
            </div>
        </React.Fragment>
    )
}