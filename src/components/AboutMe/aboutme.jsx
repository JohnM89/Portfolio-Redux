import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt, faNode, faGithub, faSass, faDatabase } from '@fortawesome/free-brands-svg-icons';
import './AboutMe.scss';

library.add(fas, fab); 

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

const iconColors = {
  faAngular: "#DD0031",
  faHtml5: "#F06529",
  faCss3: "#28A4D9",
  faReact: "#5ED4F4",
  faJsSquare: "#EFD81D",
  faGitAlt: "#EC4D28",
  faNode: "#68A063", 
  faGithub: "#181717", 
  faSass: "#CD6799", 
  faDatabase: "#F29111",
  faRobot: "#6A6A6A",
  faPaintBrush: "#F0A30A" 
};
const initialIcons = [faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt, faNode, faGithub, faSass, faDatabase];

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [currentIcons, setCurrentIcons] = useState([...initialIcons]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        const intervalId = setInterval(() => {
            setCurrentIcons(shuffleArray([...currentIcons]));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIcons]);

     return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>

                <div className="cubes-container">
                    <div className="stage-cube-cont left-cube">
                        <div className="cubespinner">
                            {currentIcons.map((icon, index) => (
                                <div className={`face${index + 1}`} key={icon.iconName}>
                                    <FontAwesomeIcon icon={icon} color={iconColors[icon.iconName]} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="stage-cube-cont right-cube">
                        <div className="cubespinner">
                            {currentIcons.map((icon, index) => (
                                <div className={`face${index + 1}`} key={icon.iconName}>
                                    <FontAwesomeIcon icon={icon} color={iconColors[icon.iconName]} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
