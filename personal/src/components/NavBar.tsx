import { AppBar, Box, Toolbar} from "@mui/material"
import React from "react";
import { MyButton } from "./CustomComponents/CustomButton";

export const NavBar: React.FC = () => {


    return (
        <Box>
            <AppBar position="fixed" color="secondary" elevation={0}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "60%", margin: "0 15%"}} >
                    <MyButton label="Petro." to="/"/>
                    <div style={{display: "flex"}}>
                    <MyButton label="Me." to="/me" />
                    <MyButton label="Work." to="/work"/>
                    <MyButton label="Get In Touch." to="/contact" />
                    </div>
                </Toolbar>
            </AppBar>

        </Box>
    )
}


