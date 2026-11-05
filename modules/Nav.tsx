import { useContext } from "react"
import { NavContext } from "../helpers/NavContext"
import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"
import { useScrollPosition } from "../hooks/useScrollPosition"

const navLinks = [
    { label: "Home", href: "#head" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
]

const Nav = () => {
    const { menuActive, setMenuActive } = useContext(NavContext)
    const scrollPosition = useScrollPosition()
    const changeStyle = scrollPosition > 100

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <header className={`folio-nav-wrapper ${changeStyle ? 'scrolled' : ''}`}>
            <div className="folio-nav mg-container">
                <div className="logo">
                    <a href="#head">
                        <h3>O.O<span className="logo-dot">.</span></h3>
                    </a>
                </div>

                <nav className="desktop-links" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-resume-btn"
                    >
                        <span>Resume</span>
                    </a>
                </nav>

                <div className="mobile-toggle">
                    <button
                        className="menu-btn"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        {menuActive ? <Icon icon={ICONS.close} size={22} color="#333332" /> : <Icon icon={ICONS.menu} size={22} color="#333332" />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Nav
