import Resume from "../components/Resume"

const About = () => {
    return (
        <div className="folio-about mg-container" id="about">
            <div className="heading">
                <h3><span>01.</span> About Me</h3>
            </div>
            <div className="about-body">
                <p>
                    Hey there! I'm Bukunmi, I'm a fullstack software engineer from Lagos, Nigeria and a computer science undergraduate. I thrive on the challenge of transforming stunning designs into real-life, functioning websites and crafting the robust logic that powers them. I have about 3 years of experience and am laser-focused on delivering high-performing, scalable, and intuitive web infrastructures.
                </p>
                <div className="stack heading">
                    <h3>Tools I Use</h3>
                    <h4>Languages:</h4>
                    <p>JavaScript/Typescript, Java</p>
                    <h4>Web3 Languages:</h4>
                    <p>Move(Sui Network), Motoko</p>
                    <h4>Frameworks/Libraries:</h4>
                    <p>ReactJS(NextJS, MUI), Angular, NodeJS(ExpressJS, NestJS)</p>
                    <h4>Storages/Databases:</h4>
                    <p>MongoDB, Postgres, SQL</p>
                    <h4>Styling:</h4>
                    <p>CSS, SCSS, Styled Components, TailwindCSS</p>
                    <h4>Other tools:</h4>
                    <p>Azure, Git/GitHub, WordPress</p>
                </div>
                {/* <Resume /> */}
            </div>
        </div>
    )
}

export default About
