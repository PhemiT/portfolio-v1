import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"

const socialLinks = [
    {link: "mailto:phemiwrites@gmail.com" , icon: `${ICONS.mail}`},
    {link: "https://github.com/PhemiT" , icon: `${ICONS.github}`},
    {link: "https://www.linkedin.com/in/olubukunmi-olufemi-b7013122b" , icon: `${ICONS.linkedin}`}
]
 
const Footer = () => {
    return (
        <div className="folio-footer mg-container">
            <div className="attribution">
                <a href="https://github.com/PhemiT/portfolio-v1">Designed & Built by Bukunmi</a>
            </div>
            <div className="socials">
                {socialLinks.map((link) => {
                    return (
                        <a href={link.link} target="_blank" rel="noopener noreferrer"><Icon icon={link.icon} color="#333332" size={27} /></a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer