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
                    {/* <div className="work">
                        <img src={PawsHomeImg.src} alt="Paws project" />
                        <div className="work-info">
                            <h3>Paws pet gallery</h3>
                        </div>
                    </div>
                    <div className="work">
                        <img src={GptHomeImg.src} alt="Paws project" />
                        <div className="work-info">
                            <h3>Gpt OpenAI site</h3>
                        </div>
                    </div>
                    <div className="work">
                        <img src={GibsonHomeImg.src} alt="Paws project" />
                        <div className="work-info">
                            <h3>Gibson Concept Website</h3>
                        </div>
                    </div>
                    <div className="work">
                        <img src={DevHomeImg.src} alt="Paws project" />
                        <div className="work-info">
                            <h3>Dev Challenges</h3>
                        </div>
                    </div> */}
                    <div className="gradient-divider" />
                    <div className="work">
                        <h1>PAWS PET GALLERY</h1>
                        <div className="info">
                            <span>Repo <Icon icon='' /></span>
                            <span>Live <Icon icon='' /></span>
                        </div>
                    </div>
                    <div className="gradient-divider" />
                    <div className="work">
                        <h1>GPT-OPENAI </h1>
                        <div className="info">
                            <span>Repo <Icon icon='' /></span>
                            <span>Live <Icon icon='' /></span>
                        </div>
                    </div>
                    <div className="gradient-divider" />
                    <div className="work">
                        <h1>DEV CHALLENGES</h1>
                        <div className="info">
                            <span>Repo <Icon icon='' /></span>
                            <span>Live <Icon icon='' /></span>
                        </div>
                    </div>
                    <div className="gradient-divider" /> 
                    <div className="work">
                        <h1>GIBSON CONCEPT WEBSITE</h1>
                        <div className="info">
                            <span>Repo <Icon icon='' /></span>
                            <span>Live <Icon icon='' /></span>
                        </div>
                    </div>
                    <div className="gradient-divider" /> 


                </div>
            </div>
        </>
    )
}

export default Work