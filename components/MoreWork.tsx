import React, { useState } from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'
import Modal from './Modal'
import { archiveProjects } from '../data/projects'

const MoreWork = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div className="morework-section">
            <button
                className="btn-morework"
                onClick={() => setIsModalOpen(true)}
            >
                <span>View Full Project Archive ({archiveProjects.length})</span>
                <Icon icon={ICONS.arrowUpRight} size={15} color="#333332" />
            </button>

            <Modal
                heading="Project Archive"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className="archive-list">
                    {archiveProjects.map((project) => (
                        <div key={project.id} className="archive-item">
                            <div className="archive-item-content">
                                <div className="archive-item-header">
                                    <h4>{project.heading}</h4>
                                    <div className="archive-links">
                                        {project.repoLink && (
                                            <a 
                                                href={project.repoLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="archive-link-icon"
                                                title="View GitHub Repository"
                                            >
                                                <Icon icon={ICONS.github} size={16} color="#333332" />
                                            </a>
                                        )}
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="archive-link-icon"
                                            title="View Live Demo"
                                        >
                                            <Icon icon={ICONS.arrowUpRight} size={16} color="#333332" />
                                        </a>
                                    </div>
                                </div>
                                <p className="archive-desc">{project.desc}</p>
                                <div className="archive-tags">
                                    {project.tools.map((t, idx) => (
                                        <span key={idx} className="archive-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default MoreWork
