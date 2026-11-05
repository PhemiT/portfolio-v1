import React from "react"
import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"

const socialLinks = [
    { name: "Email", link: "mailto:phemiwrites@gmail.com", icon: ICONS.mail },
    { name: "GitHub", link: "https://github.com/PhemiT", icon: ICONS.github },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/olubukunmi-olufemi-b7013122b", icon: ICONS.linkedin }
]

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="folio-footer-wrapper">
            <div className="folio-footer mg-container">
                <div className="attribution">
                    <p>Designed &amp; Built by <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">Olubukunmi Olufemi</a></p>
                    <span className="copyright">© {currentYear} • All rights reserved</span>
                </div>
                <div className="socials" aria-label="Social Profiles">
                    {socialLinks.map((item) => (
                        <a 
                            key={item.link} 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            aria-label={item.name}
                        >
                            <Icon icon={item.icon} color="#333332" size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
