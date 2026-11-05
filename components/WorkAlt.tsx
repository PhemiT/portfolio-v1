import React, { ReactNode } from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'

export interface WorkProps {
    heading: string;
    desc: string | ReactNode;
    tools: string[] | string;
    repoLink?: string;
    liveLink: string;
    features: string[];
    status?: string;
    featured?: boolean;
}

const WorkAlt: React.FC<WorkProps> = (props) => {
    const toolsArray = Array.isArray(props.tools) 
        ? props.tools 
        : props.tools.split(',').map(t => t.trim());

    return (
        <article className={`work-card ${props.featured ? 'is-featured' : ''}`}>
            <div className="card-top">
                <div className="card-header-meta">
                    <span className="card-type-label">Project</span>
                    {props.status && (
                        <span className={`card-status-badge status-${props.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {props.status}
                        </span>
                    )}
                </div>
                <h3 className="card-title">{props.heading}</h3>
            </div>

            <p className="card-desc">{props.desc}</p>

            <div className="card-section">
                <span className="section-label">Tech Stack</span>
                <div className="card-tool-tags">
                    {toolsArray.map((tool, idx) => (
                        <span key={idx} className="tool-tag">{tool}</span>
                    ))}
                </div>
            </div>

            {props.features && props.features.length > 0 && (
                <div className="card-section">
                    <span className="section-label">Highlights</span>
                    <ul className="card-features-list">
                        {props.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                                <span className="feature-bullet">▸</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="card-links">
                {props.repoLink && (
                    <a 
                        href={props.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-card-link repo-btn"
                        aria-label={`View GitHub repository for ${props.heading}`}
                    >
                        <Icon icon={ICONS.github} size={16} color="#BCD979" />
                        <span>Source Code</span>
                    </a>
                )}
                <a 
                    href={props.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-card-link live-btn"
                    aria-label={`View live demo for ${props.heading}`}
                >
                    <Icon icon={ICONS.live} size={16} color="#000000" />
                    <span>Live Demo</span>
                    <Icon icon={ICONS.arrowUpRight} size={13} color="#000000" />
                </a>
            </div>
        </article>
    )
}

export default WorkAlt
