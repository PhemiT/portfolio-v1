import React from 'react'
import Icon from '../components/Icon'
import ICONS from '../constants/ICONS'
import { highlights } from '../data/skills'

const Header = () => {
    return (
        <section className="folio-header mg-container">
            <div className="hero-status-pill">
                <span className="status-dot" />
                <span>Available for new projects & roles</span>
            </div>

            <div className="hero-intro">
                <p className="greeting">Hi, I&apos;m <span className="name-highlight">Olubukunmi Olufemi</span></p>
                <h1 className="gradient-text">software engineer</h1>
            </div>

            <p className="hero-tagline">
                Crafting <span className="highlight">efficient</span>, <span className="highlight">scalable</span>, and <span className="highlight">user-friendly</span> web applications and decentralized solutions.
            </p>

            <div className="hero-actions">
                <a href="#work" className="btn-primary">
                    <span>View Projects</span>
                    <Icon icon={ICONS.arrowUpRight} size={15} color="#333332" />
                </a>
                <a href="#contact" className="btn-secondary">
                    <span>Let&apos;s Talk</span>
                </a>
                <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline"
                >
                    <Icon icon={ICONS.fileText} size={15} color="#333332" />
                    <span>Resume</span>
                </a>
            </div>

            <div className="hero-highlights">
                {highlights.map((item, idx) => (
                    <div key={idx} className="highlight-card">
                        <span className="hl-value">{item.value}</span>
                        <span className="hl-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Header
