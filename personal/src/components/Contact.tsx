import React, { useEffect, useState } from "react";
import ContactCard from "./CustomComponents/ContactCard";
import { ContactDetails } from "../models/ContactDetails";
import { CircularProgress } from "@mui/material";

export const Contact: React.FC = () => {
    const [contacts, setContacts] = useState<ContactDetails[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(true)

    const handleCardClick = (link: string) => {
        window.open(link, '_blank')
    }

    useEffect(() => {
        async function getContactDetails() {
            try {
                const response = await fetch("/data/contact-cards.json");
                const data = await response.json();
                setContacts(data);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error loading contact cards: ", error);
                setIsLoaded(true);
            }
        }
        getContactDetails();
    }, []);

    return (
        <React.Fragment>
            {!isLoaded && <div className="centered-loading"><CircularProgress /></div>}
            {isLoaded && contacts.length > 0 &&
            (
            <div className={`contact-inner-container ${isLoaded ? 'visible' : ''}`}>
                {contacts.map((contact: ContactDetails) => (
                    <ContactCard
                        title={contact.title}
                        image={contact.image}
                        description={contact.description}
                        onClick={() => handleCardClick(contact.link)}
                    />
                ))}
            </div>
            )}
        </React.Fragment>
    )
}
