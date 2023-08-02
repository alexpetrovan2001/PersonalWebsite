import { Container, Icon, Typography } from "@mui/material";
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
            width: 250,
            height: 300,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            margin: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.4)',}
        }}
        onClick={onClick}
      >
        
        <img className="card-item" src={image} alt={title} width={100} height={100}/>
        <Typography className="card-item" variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
            {title}
        </Typography>
        <Typography className="card-item">
            {description}
        </Typography>
      </Container>
    );
  };
  
  export default Card;