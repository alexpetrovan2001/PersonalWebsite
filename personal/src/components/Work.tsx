import React from "react"
import PostComponent from "./CustomComponents/PostComponent/PostComponent"

export const Work: React.FC = () => {
    return (
        <React.Fragment>
            <div className="flex-container-column work-main-container">
                <PostComponent dataPath='/data/work-posts.json'/>
            </div>
        </React.Fragment>
    )
}