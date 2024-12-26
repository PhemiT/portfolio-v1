import Icon from '../components/Icon'
import MoreWork from '../components/MoreWork'
import WorkAlt from '../components/WorkAlt'
import ICONS from '../constants/ICONS'

const Heyfood = () => {
    return (
        <a 
        href="https://heyfood.africa/stores?src=aggregator"
        style={{
            textDecoration: 'underline'
        }}
        >
            heyfood
        </a>
    )
}

const Work = () => {
    return (
        <>
            <div className="folio-work mg-container heading" id="work">
                <h3 className='heading'>02. Selected Works</h3>
                <div className="selected-works">
                    <WorkAlt 
                    heading='cloudmost'
                    desc='Cloud services dashboard UI'
                    repoLink='https://github.com/PhemiT/portfolio-contact'
                    liveLink='https://cloudmost.vercel.app/'
                    tools='NextJS, SCSS'
                    features={['Dashboard UI', 'Integrated Modals']}
                     />
                    <WorkAlt 
                    heading='paws pet gallery'
                    desc='Pet gallery web app for posting and viewing pet moments.'
                    repoLink='https://github.com/PhemiT/Paws'
                    liveLink='https://paws-app.vercel.app/'
                    tools='NextJS, SCSS, MongoDB'
                    features={['Responsive UI','Server-Side Rendering', 'Attractive Slider']}
                     />
                     <WorkAlt 
                    heading='NJEM'
                    desc='Travel Agency Website'
                    repoLink='https://github.com/PhemiT/njem'
                    liveLink='https://njem.vercel.app/'
                    tools='NextJS, SCSS'
                    features={['Responsive UI', 'Rolling Animation']}
                     />
                      <WorkAlt 
                    heading='CSR Page'
                    desc={<>
                        Skim Clone of this <Heyfood /> page.
                    </>}
                    repoLink='https://github.com/PhemiT/test-client'
                    liveLink='https://test-client-alpha.vercel.app/'
                    tools='ReactJS(MUI), NodeJS, MongoDB'
                    features={['API Endpoints', 'Client-Side Rendering', 'Responsive UI']}
                     />
                </div>
                    {/* <div className="works-cta">
                        <a href="https://github.com/PhemiT?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button>view more<Icon icon={ICONS.live}/></button>
                        </a>
                    </div> */}
                    <MoreWork />
            </div>
        </>
    )
}

export default Work
