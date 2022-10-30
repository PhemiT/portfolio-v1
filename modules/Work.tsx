import Icon from '../components/Icon'
import ICONS from '../constants/ICONS'

const Work = () => {
    return (
        <>
            <div className="folio-work mg-container heading" id="work">
                <h3>02. Selected Projects</h3>
                <div className="selected-works">
                    <div className="work">
                        <h3>PAWS PET GALLERY</h3>
                        <div className="info">
                            <p>Pet gallery web app for posting and viewing pet moments. Built using Next.js with Typescript, SCSS and MongoDB.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT/Paws" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://paws-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>GPT3-OPENAI WEBSITE</h3>
                        <div className="info">
                            <p>Pixel perfect replication of OPENAI landing page from Figma File. Built with React.js and CSS</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT/gpt3-openai-site" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://gpt3-openai-pt.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>DEV CHALLENGES</h3>
                        <div className="info">
                            <p>Index of minor projects I continously do to maintain, improve and/or learn new technologies.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT/Dev-Challenges" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://dev-challenges-phemit.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>TWITTER CLONE</h3>
                        <div className="info">
                            <p>Clone of Twitter web app with Like, Post, Delete and Comment Features. Built with Next.js, CSS, Firebase and Recoil</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT/twitter-clone-next-js" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://twitter-clone-phemi-t.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="works-cta">
                        <a href="https://github.com/PhemiT?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button>see more</button>
                        </a>
                    </div>
            </div>
        </>
    )
}

export default Work