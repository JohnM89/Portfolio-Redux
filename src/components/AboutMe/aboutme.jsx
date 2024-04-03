import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faReact, faGitAlt, faNode, faGithub, faSass, } from '@fortawesome/free-brands-svg-icons';
import './AboutMe.scss';
import MonacoEditor from 'react-monaco-editor';

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
    const [showOverlay, setShowOverlay] = useState(true);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showScrollPrompt, setShowScrollPrompt] = useState(false)

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    const toggleScrollPrompt = () => {
        setShowScrollPrompt(!showScrollPrompt);
    };

    useEffect(() => {
        // Automatically show scroll prompt after a delay
        const timer = setTimeout(() => {
            setShowScrollPrompt(true);
        }, 3000); // 3 seconds after page load

        return () => clearTimeout(timer);
    }, []);



    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        const intervalId = setInterval(() => {
            setCurrentIcons(shuffleArray([...currentIcons]));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIcons]);

    const hideOverlay = () => {
        setShowOverlay(false);
    };

    const editorDidMount = (editor, monaco) => {
        editor.focus();
        // Example: Setting a custom theme
        monaco.editor.defineTheme('myCustomTheme', {
            base: 'vs-dark', // Use the dark base
            inherit: true, // Inherit from the base theme to get other properties
            rules: [
                { token: '', foreground: 'D4D4D4', background: '1E1E1E' }, // Default text and background
                { token: 'comment', foreground: '608B4E' }, // Greenish comments
                { token: 'keyword', foreground: '569CD6' }, // Blue keywords
                { token: 'identifier', foreground: '9CDCFE' }, // Variables, identifiers
                { token: 'string', foreground: 'CE9178' }, // String literals
            ],
            colors: {
                'editor.foreground': '#D4D4D4',
                'editor.background': '#1E1E1E',
                'editorCursor.foreground': '#FFFFFF',
                'editor.lineHighlightBackground': '#2B2B2B',
                'editorLineNumber.foreground': '#858585',
                'editor.selectionBackground': '#264F78',
                'editor.inactiveSelectionBackground': '#3A3D41',
            }
        });
        monaco.editor.setTheme('myCustomTheme');
        let targetLine = 23; // This is an example; adjust based on your actual content
        let targetColumn = 1; // This is an example; adjust based on your actual content

        editor.setPosition({ lineNumber: targetLine, column: targetColumn });

        // Example: Adding a custom command
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
            alert('Saving feature is not implemented.');
        });
        const aboutMeText = ` \n I'm a web developer with a passion for creating interesting and functional websites.
                                 I'm always on the lookout for new opportunities.
                                       Click & Scroll down to see more!...`; // Your full content
        let currentIndex = 0;

        const typeWriter = () => {
            if (currentIndex < aboutMeText.length) {
                const nextChar = aboutMeText.charAt(currentIndex);
                const position = editor.getPosition();
                const currentContent = editor.getValue();
                let newValue = currentContent.split('\n');

                if (nextChar === '\n') {
                    // Increment targetLine to move to the next line after a newline character
                    targetLine++;
                    //     targetColumn = 1; // Reset column to start at the beginning of the new line
                    // } else {
                    targetColumn++; // Increment column for each character added
                }

                // Insert the character at the specific line and column
                newValue[targetLine - 1] = (newValue[targetLine - 1] || '') + nextChar;
                editor.setValue(newValue.join('\n'));
                // Update the cursor position
                editor.setPosition({ lineNumber: targetLine, column: targetColumn });

                currentIndex++;
                setTimeout(typeWriter, 40); // Adjust typing speed
            }
        };

        typeWriter();


        // Prefill the editor with your "About Me" content
    };


    return (
        <>
            {showOverlay && (
                <div
                    className="overlay"
                    onClick={hideOverlay}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        display: 'fill',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#FFF',


                        // textAlign: 'center'
                    }}
                >

                    <MonacoEditor
                        className="monaco-editor-container"
                        width="100%"
                        height="100%"
                        language="javascript"
                        theme="vs-dark"
                        value={`
    import React from 'react';
    import './AboutMe.scss';

    // additional functional component for the About Me page will go here

    const AboutMe = () => {
    // placeholder content for the About Me page

    return (
        <div className="about-me-page">
        <header className="header">
            <h1>Welcome to My Portfolio</h1>
            // other header content here
        </header>
        <main className="main-content">
            <section className="introduction-section">
            <h2>Introduction</h2>
            <p>This is a brief introduction. More content to come.</p>
            </section>
            <section className="about-me-section">
            
            <h2>About Me</h2>
            <p>
            </p>
            </section>
            // additional sections to be added here
        </main>
        <footer className="footer">
            // footer content here
        </footer>
        </div>
    );
    };

    export default AboutMe;
                    `}
                        options={{
                            selectOnLineNumbers: true,
                            padding: { top: 0, bottom: 0, left: 0 },
                            readOnly: true, // Make it read-only if you just want to display code
                            fontFamily: '"Fira Code", monospace', // Example font family
                            fontSize: 16, // Example font size
                            fontWeight: 'normal', // Can be 'bold', 'normal', etc.
                            lineNumbers: 'on', // Hide line numbers if desired
                            lineNumbersMinChars: 3,
                            lineDecorationsWidth: 0,
                            lineNumbersWidth: 0,
                            minimap: { enabled: false }, // Disable minimap
                            scrollbar: { vertical: 'hidden', horizontal: 'hidden' }, // Hide scrollbars
                            wordWrap: 'off', // Enable word wrap
                            scrollBeyondLastLine: false, // Stop scrolling beyond the last line
                            renderLineHighlight: 'none', // Disable line highlight
                        }}
                        editorDidMount={editorDidMount}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#FFF',
                        }}
                    ></div>
                    <div>



                    </div>
                    <div className="cmd-container">
                        <div className="cmd-title-bar">
                            <span className="cmd-title">Select Command Prompt</span>
                            <div className="cmd-controls">
                                <button className="cmd-control">&#x2212;</button> {/* Minimize */}
                                <button className="cmd-control">&#9744;</button>  {/* Maximize */}
                                <button className="cmd-control">&#10005;</button> {/* Close */}
                            </div>
                        </div>
                        <div className="cmd-content">
                            Click here to interrupt<span className="cmd-cursor">_</span>
                        </div>
                    </div>
                </div>

            )}
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!',
                            ]}
                            idx={15}
                        />
                    </h1>
                </div>
                <div id="about-section" className="popup-window">
                    <div className="window-title-bar">
                        <span className="window-title">About Me</span>
                        <div className="window-controls">
                            <button className="window-control">&#x2212;</button> {/* Minimize */}
                            <button className="window-control">&#9744;</button>  {/* Maximize */}
                            <button className="window-control">&#10005;</button> {/* Close */}
                        </div>
                    </div>
                    <div className="window-content">
                        <p>I'm a web developer with a passion for creating interesting and functional websites. I'm always on the lookout for new opportunities. Click & Scroll down to see more!</p>
                    </div>
                </div>
                <div className="popup-window profile-window">
                    <div className="window-title-bar">
                        <span className="window-title">Profile</span>
                        <div className="window-controls">
                            <button className="window-control">&#x2212;</button> {/* Minimize */}
                            <button className="window-control">&#9744;</button>  {/* Maximize */}
                            <button className="window-control">&#10005;</button> {/* Close */}
                        </div>
                    </div>
                    <div className="window-content">
                        <img src="/images/Okinawa.jpeg" alt="Me" className="profile-image" />
                    </div>
                </div>
                <>
                    {/* Existing elements */}

                    <div className="popup-window-language">
                        <div className="window-title-bar">
                            <span className="window-title">Languages</span>
                            <div className="window-controls">
                                <button className="window-control">&#x2212;</button> {/* Minimize */}
                                <button className="window-control">&#9744;</button>  {/* Maximize */}
                                <button className="window-control">&#10005;</button> {/* Close */}
                            </div>
                        </div>
                        <div className="window-content">
                            <div className="cube-container"> {/* Apply the new class here */}
                                <div className="stage-cube-cont left-cube">
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
                    </div>



                    {showScrollPrompt && (
                        <div className="popup-window-scroll">
                            <div className="window-title-bar">
                                <span className="window-title">Notice</span>
                                <button onClick={() => setShowScrollPrompt(false)} className="window-control">&#10005;</button>
                            </div>
                            <div className="window-content">
                                <p>Scroll down to continue</p>
                            </div>
                        </div>
                    )}
                </>

            </div>
            {/* <div className="cubes-container"> */}

            {/* <div className="stage-cube-cont right-cube">
                    <div className="cubespinner">
                        {currentIcons.map((icon, index) => (
                            <div className={`face${index + 1}`} key={icon.iconName}>
                                <FontAwesomeIcon icon={icon} color={iconColors[icon.iconName]} />
                            </div>
                        ))}
                    </div>
                </div> */}
            {/* </div> */}
        </>
    );
};

export default About;
