import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import './AboutMe.css';

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
};
const initialIcons = [faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt];

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

                <div className="stage-cube-cont">
                     <div className="cubespinner">
                    {currentIcons.map((icon, index) => (
                        <div className={`face${index + 1}`} key={icon.iconName}>
                            <FontAwesomeIcon icon={icon} color={iconColors[icon.iconName]} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
