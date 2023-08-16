import React from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'

interface WorkProps  {
    heading: string;
    desc: string;
    repoLink: string;
    liveLink: string;
}

const WorkAlt:React.FC<WorkProps> = (props) => {
  return (
    <div className="work">
        <h3>{props.heading}</h3>
        <div className="info">
            <p>{props.desc}</p>
            <div className="links">
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