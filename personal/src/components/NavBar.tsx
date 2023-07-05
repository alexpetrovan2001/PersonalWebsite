import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
    const MyButton: React.FC<{ label: string, to: string }> = ({ label, to }) => {
        return (
          <Button 
          variant="text" 
          color="primary" 
          component={Link}
          to={to}
          sx={{
            textTransform:"none", 
            marginLeft: "1vw",
            width: "auto",
            fontSize: "1vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            }}>
            {label}
          </Button>
        );
      };

    return (
        <Box>
            <AppBar position="static" color="secondary">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "60%", margin: "0 auto"}} >
                    <MyButton label=".Petro" to="/"/>
                    <div style={{display: "flex"}}>
                    <MyButton label=".Work" to="/work"/>
                    <MyButton label=".Me" to="/me" />
                    <MyButton label=".Get In Touch" to="contact" />
                    </div>
                </Toolbar>
            </AppBar>

        </Box>
    )
}


