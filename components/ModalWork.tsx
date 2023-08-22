import React from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'
import styles from '../styles/components/ModalWork.module.scss'

interface ModalWorkProps {
    heading: string;
    desc: string;
    features: string;
    repoLink?: string;
    liveLink: string;
}

const ModalWork:React.FC<ModalWorkProps> = (props) => {
  return (
    <div className={styles.modalwork_main}>
        <div className={styles.modalwork_content}>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
            <p>{props.features}</p>
        </div>
        <div className={styles.modalwork_links}>
            {props.repoLink ?
            <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                <span><Icon icon={ICONS.repo} color='#333332' size={15} />Repo</span>
            </a>
            : ''
            }
            <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                <span><Icon icon={ICONS.live} color='#333332' size={15} />Live</span>
            </a>
        </div>
    </div>
  )
}

export default ModalWork