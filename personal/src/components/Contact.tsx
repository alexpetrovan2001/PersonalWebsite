import React, { useEffect } from "react"
import ContactCard from "./CustomComponents/ContactCard"
import { ContactDetails } from "../models/ContactDetails"

export const Contact: React.FC = () => {
    const [contacts, setContacts] = React.useState<ContactDetails[]>([])

    const handleCardClick = (link: string) => {
        window.open(link, '_blank')
    }

    useEffect(() => {
        async function getContactDetails(){
            try{
                const response = await fetch("../../src/data/contact-cards.json");
                const data = await response.json();
                setContacts(data);
            } catch(error){
                console.error("Error loading contact cards: ", error);
            }
        }
        getContactDetails();
    }, []
    )
    

    return (
        <React.Fragment>
            <div className="contact-outer-container">
                <div className="contact-inner-container">
                    {contacts.map((contact: ContactDetails) => (
                        <ContactCard
                            title = {contact.title}
                            image = {contact.image}
                            description = {contact.description}
                            onClick = {() => handleCardClick(contact.link) }
                        />
                    ))}
                </div>
                {/*
                Various ways to contact you, such as an email address, contact form, or links to your social media profiles.
                If you have a preferred method of communication, make it clear.
                Your location or time zone, especially if you offer remote services.
                Consider adding a professional-looking contact form that visitors can fill out.
                If you're open to collaborations or job opportunities, mention your availability.
                */}
            </div>
        </React.Fragment>
    )
}
