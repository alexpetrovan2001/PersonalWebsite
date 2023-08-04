import './Footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {currentYear} Petrovan Alex. All rights reserved. </p>
            </div>
        </footer>
    )
}