import { Typography } from "@mui/material"
import React from "react"


export const Home = () => {
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
                .My home page
            </Typography>
        </React.Fragment>
    )
}