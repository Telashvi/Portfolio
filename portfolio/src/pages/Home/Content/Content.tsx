import './Content.css'
import { FaReact } from "react-icons/fa";
// import { GrDocumentDownload } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { Link } from 'react-router-dom';
function Content() {

    return (


        <div className='about-me-container'>

            <div className='about-me-text'>

                <span>Hey there—I'm Tamir.</span>

                <span>
                    I'm a self-taught,  full-stack engineer
                </span>

                <span>
                    Excellent at self-learning and problem-solving skills, love working in a team.
                </span>
                <span>
                    Have full motivation to invest, settle, and grow within a company.
                </span>
            </div>

            <div className='skillset-container'>
                <span className='skillset-text'>
                    {/* <span className='skillset-title'>Skillset</span>
                    <span>As an individual with diverse interests and experience,</span>
                    <span>
                    I've developed a broad, yet deep skillset as a web developer.
                    </span> */}
                    
                    <span>
                        As someone who loves the art of software development,
                    </span>


                    <span>
                        I have a passion for writing robust, clean, and maintainable code.
                    </span>

                </span>
                <div className='skills-container'>
                    <div className='frontend-skills'>
                        <h1><FaReact /> Front-end development</h1>
                        <div className='frontend-skills-titles'>
                            <span>React.js</span>
                            <span>TypeScript</span>
                            <span>JavaScript</span>
                            <span>HTML/CSS</span>
                            <span>Redux</span>
                        </div>

                    </div>
                    <div className='backend-skills'>
                        <h1> <SiExpress/> Back-end development</h1>
                        <div className='backend-skills-titles'>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Mongoose</span>
                        </div>
                    </div>
                </div>
            </div>
                <Link className='to-projects-btn' to={'/projects'}>See my projects <GrProjects/></Link>
           
        </div>
    );
};

export default Content;