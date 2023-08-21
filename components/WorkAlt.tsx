import React, { ReactNode } from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'

interface WorkProps  {
    heading: string;
    desc: string | ReactNode;
    tools: string;
    repoLink: string;
    liveLink: string;
    features: string[];
}

const WorkAlt:React.FC<WorkProps> = (props) => {
  return (
    <div className="work">
        <h3>{props.heading}</h3>
        <div className="works_info">
            <p className='works_desc'>{props.desc}</p>
            <div className="works_tools">
                <h4>tools used:</h4>
                <p>{props.tools}</p>
            </div>
            <h4>Key Features</h4>
            <div className="works_features">
                {props.features?.map((feature, index) => (
                <span key={index}>
                    {feature}
                </span>
                ))}
            </div>
            <div className="works_links">
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                </a>
                <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default WorkAlt