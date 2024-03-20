import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faReact, faJsSquare, faGitAlt, faNode, faGithub, faSass, } from '@fortawesome/free-brands-svg-icons';
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
    faHtml5: "#F06529",
    faCss3: "#28A4D9",
    faReact: "#5ED4F4",
    faJsSquare: "#EFD81D",
    faGitAlt: "#EC4D28",
    faNode: "#68A063",
    faGithub: "#181717",
    faSass: "#CD6799",
    faRobot: "#6A6A6A",
    faPaintBrush: "#F0A30A"
};
const initialIcons = [faHtml5, faReact, faGitAlt, faNode, faGithub, faSass,];

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
                            strArray={[
                                'H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!', ' ', 'I', '`', 'm', ' ', 'J', 'o', 'h', 'n', ' '
                            ]}
                            idx={15}
                        />
                    </h1>
                </div>
                <div id="about-section" class="cloud-container">
                    {/* <img src="/images/Capturecloud.PNG" alt="Background" class="background-image"/> */}
                    <div class="image-text-container">
                        <img src="/images/Capturecloud.PNG" alt="Background" class="background-image" />
                        <p class="text-over-image">


                            {/*                                                 
                <img src="/images/Okinawa.jpeg" alt="Me" className="portfolio-image" /> */}





                            I'm a web developer with a passion for creating interesting and functional websites. I'm always on the lookout for new opportunities. Scroll down to see more!

                        </p>
                    </div>
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
                        {/* <div className="portfolio-image-div">
                <img src="/images/IMG_2044.png" alt="Me" className="portfolio-image" />
            </div> */}
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
        </>
    );
};

export default About;
