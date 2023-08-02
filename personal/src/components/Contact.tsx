import { Container, Typography } from "@mui/material"
import React from "react"
import ContactCard from "./CustomComponents/ContactCard"

export const Contact: React.FC = () => {
    const handleCardClick = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <React.Fragment>
            <div className="contact-outer-container">
                {/* <Typography
                    variant="h4"
                    sx={{
                        marginBottom: '2%',
                        marginRight: 'auto',
                    }}
                >
                    Would like to hear from you!
                </Typography> */}
                <div className="contact-inner-container">
                    <ContactCard 
                    title="github." 
                    image="/github-mark.svg" 
                    description="Coding projects and open-source contributions." 
                    onClick={() => handleCardClick("https://github.com/alexpetrovan2001?tab=repositories")}
                    />
                    <ContactCard 
                    title="instagram." 
                    image="/instagram-icon.svg" 
                    description="A piece of myself.`" 
                    onClick={() => handleCardClick("https://www.instagram.com/ale.xpetrovan/")}
                    />
                    <ContactCard 
                    title="linkedin." 
                    image="/linkedin-icon.svg" 
                    description="Aspiring Software Developer. Seeking opportunities." 
                    onClick={() => handleCardClick("https://www.linkedin.com/in/alex-petrovan-63aa70223")}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}