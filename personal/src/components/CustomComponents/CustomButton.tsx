import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MyButton: React.FC<{ label: string, to: string }> = ({ label, to }) => {
    return (
      <Button 
      variant="text" 
      color="primary" 
      component={Link}
      to={to}
      sx={{
        backgroundColor: "white",
        textTransform:"none", 
        marginRight: "1vw",
        width: "auto",
        fontSize: "1.2vw",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        transition: "background-color 0.4s, color 0.4s ease-in-out",
        "&:hover": {
            backgroundColor: "#c99e1a",
            color: "black",
        },
        }}>
        {label}
      </Button>
    );
  }