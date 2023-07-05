import { Typography } from "@mui/material"
import React from "react"

export const Contact: React.FC = () => {
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
                .Contact page
            </Typography>
        </React.Fragment>
    )
}