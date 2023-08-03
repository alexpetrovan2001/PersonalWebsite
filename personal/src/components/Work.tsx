import { Typography } from "@mui/material"
import React from "react"

export const Work: React.FC = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                }}
            >
                .My work page
            </Typography>
            <ul>
                <li>A portfolio showcasing your projects, work samples, and achievements.</li>
                <li>Each project should include a project title, description, images or videos, and the role you played.</li>
                <li>Technologies or tools you used for each project.</li>
                <li>Testimonials or endorsements from clients, colleagues, or supervisors if applicable.</li>
                <li>A clear organization to make it easy for visitors to browse your work.</li>
            </ul>
        </React.Fragment>
    )
}