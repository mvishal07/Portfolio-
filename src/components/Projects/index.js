import './index.css'
import { FiGithub } from "react-icons/fi";
import PSbasedFacerecognitionAttendanceSystemcoverphot from './images/PSbasedFacerecognitionAttendanceSystemcoverphot.png';
import image from './images/image.png';
function Projects(props) {
    const {theme} = props
    const projectsStyle = theme === 'light' ? 'projects' : 'projects-dark'
    const projheading = theme === 'light'?'pjr-heading' : 'pjr-heading-dark'
    const projectCard = theme === 'light'?'project-card': 'project-card-dark'
    const title = theme === 'light'?'title':'title-dark'
    const descr = theme === 'light'?'descr':'descr-dark'
    const prjbtn  = theme === 'light'?'prj-btn':'prjbtn-dark'
    const icons = theme === 'light' ? 'icons' : 'icons-dark';
    const linkbtn = theme === 'light' ? 'link-btn' : 'link-btn-dark';
    const projects = [
        {
            id: 1,
            title: "JobbyApp",
            des: "Created the Jobby App to simplify job searching with features like filtering by salary range, employment type, and job title search. Built secure authentication with JWT token storage and API integration, and implemented pages such as Login, Home, and Job Details using React components and states.",
            tools: ["React Js","JavaScript","CSS","APIs","HTML"],
            image: image,
                        source: 'https://github.com/mvishal07/jobbyApp',

        },

        {
            id: 2,
            title: "GPS-Based Face Recognition Attendance System",
            des: "Developed a GPS-based Face-recognition Attendance System to verify students' identity and location for attendance using GPS and facial recognition. Built with Flask for the backend and MySQL for storing student data, this system ensures accurate and secure monitoring within designated areas.",
            tools: ["Python","React Js","JavaScript","CSS","HTML","MySQL"],
            image: PSbasedFacerecognitionAttendanceSystemcoverphot,
            source: 'https://github.com/mvishal07/GPSBASED-Face-Recognition-Attendance-System-'
        },




    ]

    return (
        <div className={projectsStyle} id="projects">
            <h2 className={projheading}>Projects</h2>
            <ul className='projects-container'>
                {projects.map((each) => (
                    <li key={each.id} className={projectCard}>
                        <div className='project-image'>
                            <img src={each.image} alt={each.title} className='pr-image' />
                        </div>
                        <div className='project-info'>
                            <h3 className={title}>{each.title}</h3>
                            <p className={descr}>{each.des}</p>
                            <div className='tools'>
                                {each.tools.map((t) => (
                                    <span key={t} className="tool">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className='link-btn'>
                                <button className={prjbtn}> <a href={each.source} target="_blank" className={linkbtn}><FiGithub fontSize={15} className={icons}/> Source Code</a></button>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Projects;