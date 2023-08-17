import Icon from '../components/Icon'
import MoreWork from '../components/MoreWork'
import WorkAlt from '../components/WorkAlt'
import ICONS from '../constants/ICONS'

const Work = () => {
    return (
        <>
            <div className="folio-work mg-container heading" id="work">
                <h3 className='heading'>02. Selected Works</h3>
                <div className="selected-works">
                    <WorkAlt 
                    heading='paws pet gallery'
                    desc='Pet gallery web app for posting and viewing pet moments.'
                    repoLink='https://github.com/PhemiT/Paws'
                    liveLink='https://paws-app.vercel.app/'
                    tools='NextJS, SCSS, MongoDB'
                    features={['Responsive UI','Server-Side Rendering', 'Integrated Data Operations']}
                     />
                     <WorkAlt 
                    heading='GPT-3 openai website'
                    desc='Pixel perfect replication of OPENAI landing page from Figma File.'
                    repoLink='https://github.com/PhemiT/gpt3-openai-site'
                    liveLink='https://gpt3-openai-pt.vercel.app/'
                    tools='ReactJS'
                    features={['Responsive UI']}
                     />
                     <WorkAlt 
                    heading='portfolio contact'
                    desc='Sample portfolio displaying CRUD operations for managing business contacts.'
                    repoLink='https://github.com/PhemiT/portfolio-contact'
                    liveLink='https://portfolio-contact-39rs.onrender.com/'
                    tools='NodeJS, EJS, MongoDB'
                    features={['CRUD Operations', 'Authentication & Private Routes', ]}
                     />
                     <WorkAlt 
                    heading='domys'
                    desc='Real estate landing page crafted with meticulous attention to detail.'
                    repoLink='https://github.com/PhemiT/domys'
                    liveLink='https://domys.vercel.app/'
                    tools='ReactJS'
                    features={['Responsive UI']}
                     />
                </div>
                    <div className="works-cta">
                        <a href="https://github.com/PhemiT?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button>view more<Icon icon={ICONS.live}/></button>
                        </a>
                    </div>
                    {/* <MoreWork /> */}
            </div>
        </>
    )
}

export default Work