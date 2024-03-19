import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters/animatedletters';

const Resume = () => {
    return (
        <div className="resume-container">
                                <h1>
                        {/* <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['R', 'e', 's', 'u', 'm', 'e']}
                            idx={15}
                        /> */}
                    </h1>
            <div className="social-links">
                <a href="https://github.com/JohnM89" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/john-macneil-981316203/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://instagram.com/itsjohn_m8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
            </div>
        </div>
    );
};

export default Resume;
