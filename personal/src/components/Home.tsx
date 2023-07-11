import { Typography } from "@mui/material"
import React from "react"
import RotatingImage from "./CustomComponents/RotatingImage"


export const Home = () => {
    return (
        <React.Fragment>
            <div id="home-page-main-container">
                <div className="flex-container">
                    <Typography
                        variant="h2"
                        fontWeight={1000}
                        marginTop="auto"
                        marginRight="2.8%"
                        position="relative"
                    >
                        .Lost time
                    </Typography>
                    <RotatingImage />
                </div>
                <div>

                    <Typography
                        variant="h2"
                        fontWeight={1000}
                        marginLeft="40%"
                        position="relative">
                        is never found again.
                    </Typography>

                </div>

            </div>
        </React.Fragment>
    )
}