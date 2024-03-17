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

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [iconSetIndex, setIconSetIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconSetIndex((current) => (current + 1) % iconSets.length);
        }, 5000);

        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

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
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color={iconColors[faAngular.iconName]} />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color={iconColors[faHtml5.iconName]} />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color={iconColors[faCss3.iconName]} />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color={iconColors[faReact.iconName]} />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color={iconColors[faJsSquare.iconName]} />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color={iconColors[faGitAlt.iconName]} />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
