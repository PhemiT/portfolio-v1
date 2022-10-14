import PawsHomeImg from '../assets/paws-home.webp'
import GibsonHomeImg from '../assets/gibson.webp'
import DevHomeImg from '../assets/dev-challenges.webp'
import GptHomeImg from '../assets/gpt-home.webp'
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>GPT-OPENAI </h3>
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>DEV CHALLENGES</h3>
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <h3>GIBSON CONCEPT WEBSITE</h3>
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti.</p>
                            <div className="links">
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.repo} color='#DDBEA8' size={15} />Repo</span>
                                </a>
                                <a href="https://github.com/PhemiT" target="_blank" rel="noopener noreferrer">
                                    <span><Icon icon={ICONS.live} color='#DDBEA8' size={15} />Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="works-cta">
                        <button>see more</button>
                    </div>
            </div>
        </>
    )
}

export default Work