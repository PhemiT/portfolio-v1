import Icon from '../components/Icon'
import WorkAlt from '../components/WorkAlt'
import ICONS from '../constants/ICONS'

const Work = () => {
    return (
        <>
            <div className="folio-work mg-container heading" id="work">
                <h3>02. Selected Works</h3>
                <div className="selected-works">
                    <WorkAlt 
                    heading='paws pet gallery'
                    desc='Pet gallery web app for posting and viewing pet moments. Built using Next.js with Typescript, SCSS and MongoDB.'
                    repoLink='https://github.com/PhemiT/Paws'
                    liveLink='https://paws-app.vercel.app/'
                     />
                     <WorkAlt 
                    heading='GPT-3 openai website'
                    desc='Pixel perfect replication of OPENAI landing page from Figma File. Built with React.js and CSS'
                    repoLink='https://github.com/PhemiT/gpt3-openai-site'
                    liveLink='https://gpt3-openai-pt.vercel.app/'
                     />
                     <WorkAlt 
                    heading='domys'
                    desc='Real estate landing page crafted with meticulous attention to detail. Done with React.js .'
                    repoLink='https://github.com/PhemiT/domys'
                    liveLink='https://domys.vercel.app/'
                     />
                     <WorkAlt 
                    heading='portfolio contact'
                    desc='Sample portfolio displaying CRUD operations for managing business contacts. Built with Node.js, EJS and MongoDB.'
                    repoLink='https://github.com/PhemiT/portfolio-contact'
                    liveLink='https://portfolio-contact-39rs.onrender.com/'
                     />
                </div>
                    <div className="works-cta">
                        <a href="https://github.com/PhemiT?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button>view more<Icon icon={ICONS.live}/></button>
                        </a>
                    </div>
            </div>
        </>
    )
}

export default Work