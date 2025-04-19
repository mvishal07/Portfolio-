import { useEffect, useRef, useState } from 'react';
import './index.css';

function Skills(props) {
  const {theme} = props
  
  const skillContainer = theme === 'light' ? 'skill-container' : 'skill-container-dark';

const skillCard = theme === 'light' ? 'skill-card' : 'skill-card-dark';
const bouncingArea = theme === 'light' ? 'bouncing-area' : 'bouncing-area-dark';
const skilllabel = theme === 'light' ? 'skill-label' : 'skill-label-dark';
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const skills = [
    { name: 'HTML', src: require('./images/html-5.png') },
    { name: 'CSS', src: require('./images/css.png') },
    { name: 'JavaScript', src: require('./images/java-script.png') },
    { name: 'React', src: require('./images/science.png') },
    { name: 'Node.js', src: require('./images/nodejs.png') },
    { name: 'Bootstrap', src: require('./images/bootstrap.png') },
    { name: 'GitHub', src: require('./images/github.png') },
    { name: 'MySQL', src: require('./images/mysql.png') },
    { name: 'Java', src: require('./images/java.png') },
  ];

  const skills2=[
    
  ]
  // Generate unique left positions spaced evenly across the container
  const getEvenlySpacedPositions = () => {
    const step = 100 / (skills.length + 1);
    return skills.map((_, index) => (index + 1) * step);
  };

  const leftPositions = getEvenlySpacedPositions();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div className={skillCard} id="skills">
    <div className={skillContainer} ref={containerRef}>
      <h1 className={skilllabel}>Skills & Tech Stack</h1>
      <div className={bouncingArea}>
        {skills.map((skill, index) => (
          
          <><img
            key={index}
            className={`skill-icon ${startAnimation ? 'bounce' : ''}`}
            src={skill.src}
            alt={skill.name}
            title={skill.name}
            style={{
              left: `${leftPositions[index]}%`,
              animationDelay: `${Math.random() * 0.7}s`,
            }} />
            
            {/*<p style={{
              left: `${leftPositions[index]}%`,
              animationDelay: `${Math.random() * 0.7}s`,
            }} className={`skill-icon2 ${startAnimation ? 'bounce' : ''}`}>{skill.name}</p>
            */}
            </>
         
        ))}
      </div>
    </div>
    </div>
  );
}

export default Skills;
