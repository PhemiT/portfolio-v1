import React from 'react'
import Icon from '../components/Icon'
import ICONS from '../constants/ICONS'
import { skillCategories } from '../data/skills'

const About = () => {
    return (
        <section className="folio-about mg-container" id="about">
            <div className="heading">
                <h3><span>01.</span> About Me</h3>
            </div>

            <div className="about-body">
                <div className="about-bio">
                    <p>
                        Hey there! I&apos;m <strong>Bukunmi</strong>, a fullstack software engineer based in Lagos, Nigeria with a background in Computer Science. I thrive on the challenge of transforming complex systems and elegant design concepts into fast, intuitive, and production-grade software.
                    </p>
                    <p>
                        Over the past 4+ years, I&apos;ve engineered robust web platforms, real-time multimedia workflows, and decentralized smart contract logic. I care deeply about clean code architecture, performance optimization, and crafting experiences people genuinely enjoy using.
                    </p>

                    <div className="about-resume-cta">
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-resume"
                        >
                            <Icon icon={ICONS.fileText} size={16} color="#333332" />
                            <span>Download Full Resume (PDF)</span>
                            <Icon icon={ICONS.arrowUpRight} size={14} color="#333332" />
                        </a>
                    </div>
                </div>

                <div className="stack-section">
                    <div className="heading">
                        <h3><span>//</span> Technical Arsenal</h3>
                    </div>
                    <p className="stack-subtitle">Technologies, frameworks & tools I leverage daily to ship high-impact software:</p>

                    <div className="skill-grid">
                        {skillCategories.map((group) => (
                            <div key={group.category} className="skill-category-card">
                                <h4>{group.category}</h4>
                                <div className="skill-tags">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="skill-pill">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
