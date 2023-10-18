import { Container, Typography } from "@mui/material";
import React from "react";

interface CardProps {
    title: string;
    image: string;
    description: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, description, onClick}) => {
    return (
      <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            margin: '3%',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.4)',
            },
            height: '40vh',
        }}
        onClick={onClick}
      >
        <img className="card-item" src={image} alt={title} style={{ width: '100px', height: '100px'}}/>
        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
            {title}
        </Typography>
        <Typography sx={{ textAlign: 'center'}}>
            {description}
        </Typography>
      </Container>
    );
  };
  
  export default Card;