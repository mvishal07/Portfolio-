import React, { useState } from 'react';
import './index.css';
import badge from '../ExampleCarouselImage/badge.png'
const certifications = [
  {
    title: "React Certification",
    issuer: "NxtWave",
    image: require('../ExampleCarouselImage/react.png'),
    link:'https://certificates.ccbp.in/academy/react-js?id=XFQAISJOHL'
  },
  {
    title: "Python Certification",
    issuer: "NxtWave",
    image: require('../ExampleCarouselImage/python.png'),
    link:'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=QONVWFCFZY'
  },
  {
    title: "Introduction to DataBases",
    issuer: "NxtWave",
    image: require('../ExampleCarouselImage/sql.png'),
    link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=UZTGZHCCXP',
  },
];

const Certifications = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {theme} = props
  const titlecer = theme === 'light' ? 'titlecer' : 'titlecer-dark';
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container" id="certifications">
      <div className={titlecer}>
        <h2>Certifications</h2>
        <img src={badge} alt='certification' className='badge'/>
      </div>
      <div>
      <div className="carousel">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={cert.image} alt={cert.title} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <button className='view-btn'>
                <a href={cert.link} target="_blank" className='view-a' color='black'>  View Certificate</a>
                </button>
            
            </div>
          </div>
        ))}
        <button className="carousel-button left" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button right" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="carousel-dots">
        {certifications.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active-dot' : ''}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Certifications;
