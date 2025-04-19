import './index.css'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import psziephoto from './psziephoto.jpg';

function Home(prpos) {
    
const {theme, changeTheme } = prpos;
const container = theme === 'light' ? 'container' : 'container-dark';
const nameStyle = theme === 'light' ? 'name-style' : 'name-style-dark';
const contactBtn = theme === 'light' ? 'contact-btn' : 'contact-btn-dark';
const resumeBtn = theme === 'light' ? 'resume-btn' : 'resume-btn-dark';
const alink = theme === 'light' ? 'a-link' : 'a-link-dark';
const alink2 = theme === 'light' ? 'a-link2' : 'a-link-dark2';
const icons = theme === 'light' ? 'icons' : 'icons-dark';
    return <>

        <div className={container} id="home">

            <div className="left-side">
                <div>
                    <h4 className="caption">Web Developer & Tech Enthusiast</h4>
                </div>
                <h1 className="main-name">Hello, I'm <span className={nameStyle}>Vishal</span></h1>
                <p className='des'>Innovative  Full-Stack  Developer  Building  Next-Gen  Web Solutions and Driving Open Source Progress</p>
                <div className='btn-container'>
                    <button className={resumeBtn} >
                        <a className={alink} href="https://drive.google.com/file/d/1fbL20LW2VyT98jeJVLI2YkSO2yGD1fsR/view?usp=sharing" target="_blank">

                            Resume   <LiaExternalLinkAltSolid  fontSize={15}></LiaExternalLinkAltSolid>
                        </a>
                    </button>
                    
                    <button className={contactBtn}  > <a href='#contactus' className={alink2} >Contact Me </a> </button>
                </div>

                <div className="apps">
                    <a className='app' href="https://github.com/mvishal07" target="_blank"> <FaGithub fontSize={30}  className={icons}></FaGithub></a>
                    <a className="app" href="https://www.linkedin.com/in/vishal-munagalashetty-151a66256/" target="_blank"> <CiLinkedin fontSize={34} className={icons}></CiLinkedin></a>
                </div>
            </div>
            <div className="right-side">
            <div className="img-container">
                    
                    <img src={psziephoto} alt="heelo" className='photo'/>
            </div>
            </div>
        </div>

    </>
}
export default Home;