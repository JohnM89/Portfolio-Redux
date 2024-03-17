import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './AboutMe.css';

library.add(fas, fab); // This adds all solid and brand icons to the library

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

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
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
                    {/* Paragraphs omitted for brevity */}
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        {Object.entries(iconColors).map(([icon, color]) => (
                            <div className={`face${icon}`} key={icon}>
                                <FontAwesomeIcon icon={['fab', icon]} color={color} />
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
