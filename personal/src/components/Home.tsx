import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import RotatingImage from "./CustomComponents/RotatingImage"


export const Home = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        // Delay the animation to make it visible when the component mounts
        setTimeout(() => {
            setAnimation(true);
        }, 100);
    }, []);

    return (
        <React.Fragment>
            <div id="home-page-main-container">
                <div className="home-container">
                    <Typography
                        className={`fade-in ${animation ? "show" : ""}`}
                        variant="h2"
                        fontWeight={1000}
                        marginTop="auto"
                        marginRight="3%"
                        position="relative"
                    >
                        Lost time
                    </Typography>
                    <RotatingImage />
                </div>
                <div>
                    <Typography
                        className={`fade-in ${animation ? "show" : ""}`}
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