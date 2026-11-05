import React, { useEffect, useState, useContext } from 'react'
import { NavContext } from '../helpers/NavContext'

const linkItems: { label: string; key: string }[] = [
    { label: "Home", key: "#head" },
    { label: "About", key: "#about" },
    { label: "Work", key: "#work" },
    { label: "Contact", key: "#contact" }
]

const NavMenu = () => {
    const { menuActive, setMenuActive } = useContext(NavContext)
    const [menuToggled, setMenuToggled] = useState(false)

    useEffect(() => {
        if (menuActive) setMenuToggled(true)
    }, [menuActive])

    const closeOnClick = () => {
        setMenuActive(false)
    }

    if (!menuToggled) return null

    return (
        <aside 
            className={`nav-menu-backdrop ${menuActive ? 'active' : ''}`}
            onClick={closeOnClick}
            aria-hidden={!menuActive}
        >
            <div 
                className={`nav-menu-panel ${menuActive ? 'slide-in' : 'slide-out'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mobile-nav-header">
                    <span className="mobile-nav-title">Navigation</span>
                    <button className="mobile-close-btn" onClick={closeOnClick} aria-label="Close menu">
                        ✕
                    </button>
                </div>

                <nav className="mobile-nav-links">
                    {linkItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.key}
                            className="mobile-link"
                            onClick={closeOnClick}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-resume-btn"
                        onClick={closeOnClick}
                    >
                        Download Resume (PDF)
                    </a>
                </nav>
            </div>
        </aside>
    )
}

export default NavMenu
