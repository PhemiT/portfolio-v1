import React from 'react'
import WorkAlt from '../components/WorkAlt'
import MoreWork from '../components/MoreWork'
import { selectedProjects } from '../data/projects'

const Work = () => {
    return (
        <section className="folio-work mg-container" id="work">
            <div className="heading">
                <h3 className="heading"><span>02.</span> Selected Works</h3>
            </div>
            <p className="work-intro">A curated selection of production applications, dashboards, and client platforms.</p>

            <div className="selected-works">
                {selectedProjects.map((project) => (
                    <WorkAlt
                        key={project.id}
                        heading={project.heading}
                        desc={project.desc}
                        tools={project.tools}
                        repoLink={project.repoLink}
                        liveLink={project.liveLink}
                        features={project.features}
                        status={project.status}
                        featured={project.featured}
                    />
                ))}
            </div>

            <MoreWork />
        </section>
    )
}

export default Work
