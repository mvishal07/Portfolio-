import './index.css'
function About(props) {
        
const {theme, changeTheme } = props;
const aboutCotainer =  theme !== 'light' ? 'about-container-dark' : 'about-container-light';
const heading = theme === 'light' ? 'heading' :'heading-dark';
    return (
        
        <div className={aboutCotainer} id="about">
            <h1 className={heading}>About Me</h1>
            <p className="about">I'm Munagalashetty Vishal, a passionate Full-Stack Developer with expertise in React.js and Node.js
                .I get a thrill out of building scalable web applications and interactive user experiences that 
                tackle real-world problems. With a solid background in Computer Science Engineering,
                 I dive headfirst into problem-solving, crafting seamless user interfaces, and optimizing performance. 
                 Feel free to browse through my portfolio and see how I turn ideas into impactful solutions.</p>
        </div>
        
    );
}

export default About;
