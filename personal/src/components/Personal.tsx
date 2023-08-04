import { Typography } from "@mui/material"
import React from "react"
import PostComponent from "./CustomComponents/PostComponent/PostComponent"

export const Personal: React.FC = () => {
    return (
        <React.Fragment>
            <PostComponent dataPath="../../src/data/personal-posts.json"/>
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