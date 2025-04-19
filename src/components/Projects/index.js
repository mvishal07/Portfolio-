import './index.css'
import { FiGithub } from "react-icons/fi";
import PSbasedFacerecognitionAttendanceSystemcoverphot from './images/PSbasedFacerecognitionAttendanceSystemcoverphot.png';
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
            image: 'https://private-user-images.githubusercontent.com/108283119/395580430-9081cf61-f641-4a8f-9200-c553f107f120.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM5MjAwMTYsIm5iZiI6MTc0MzkxOTcxNiwicGF0aCI6Ii8xMDgyODMxMTkvMzk1NTgwNDMwLTkwODFjZjYxLWY2NDEtNGE4Zi05MjAwLWM1NTNmMTA3ZjEyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwNlQwNjA4MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NjNhMTMxM2Q4ZmE4YzUxMTE3YTYyM2JjYTFjYmI0NzU0ZDEwYmQ2NGU0MTZkMTNlMTE0NmNlOTgzNGIzYzFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rnQDapepKBq2zt1ajKptJNAld_imC50OqsppzJeFR7E',
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