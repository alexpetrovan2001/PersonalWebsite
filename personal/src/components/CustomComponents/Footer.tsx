import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {currentYear} Petrovan Alex. All rights reserved. </p>
            </div>
        </footer>
    )
}