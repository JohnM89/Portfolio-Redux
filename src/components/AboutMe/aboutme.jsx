import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
import XTerminal from '../Xterminal/xterm';
import { gsap } from 'gsap';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faReact, faGitAlt, faNode, faGithub, faSass, } from '@fortawesome/free-brands-svg-icons';
import './AboutMe.scss';
import MonacoEditor from 'react-monaco-editor';
import { GroupBox, Toolbar, Button, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';
// import { render } from "react-dom";
import { Rnd } from "react-rnd";


library.add(fas, fab);



const Wrapper = styled.div`
  padding: 5rem;
  // background: ${({ theme }) => theme.desktopBackground};
    #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
    #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

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
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isXterminalOpen, setIsXterminalOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isScrollOpen, setIsScrollOpen] = useState(false);


    const toggleXterminalWindow = () => {
        setIsXterminalOpen(!isXterminalOpen);
    };

    const toggleAboutWindow = () => {
        setIsAboutOpen(!isAboutOpen);

    };

    const toggleLanguageWindow = () => {
        setIsLanguageOpen(!isLanguageOpen);

    };

    const toggleScrollWindow = () => {
        setIsScrollOpen(!isScrollOpen);

    };

    


    const toggleProfileWindow = () => {
        setIsProfileOpen(!isProfileOpen);

    };

    const handleIconClick = (iconName) => {
        console.log(`${iconName} clicked`);
        if (iconName === 'Icon 1') { // Assuming Icon 7 is meant for XTerminal
            toggleXterminalWindow();
        }
        if (iconName === 'Folder') {
            toggleAboutWindow();
        }
        if (iconName === 'Recycle Bin') {
            toggleLanguageWindow();
        }
        if (iconName === 'Search') {
            toggleScrollWindow();
        }
        if (iconName === 'My Computer') {
            toggleProfileWindow();
        }
        
        // Extend with more conditions if other icons have specific actions
    };

    // useEffect(() => {
    //     document.body.style.overflow = isProfileOpen ? 'unset' : 'hidden';
    //     // No cleanup function needed here since we want the effect of this
    //     // styling to persist as long as the component is mounted and its
    //     // state changes.
    // }, [isProfileOpen]);







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
    const clippy = document.querySelector("#clippy");

    // Bounce animation
    const bounce = () => {
        gsap.to(clippy, {
            y: -20, // Adjust the bounce height as needed
            repeat: -1, // Infinite loop
            yoyo: true, // Go back and forth
            ease: "power1.inOut",
            duration: 0.5, // Adjust timing as needed
        });
    };

    bounce();

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
        const aboutMeText = ` \n Oh hi I'm there a developer with a passion for creating interesting and functional applications 
                & I'm always on the lookout for new opportunities.
                Why not take a look at my portfolio?
                All you have to do is click to see more!... </p>`; // Your full content
        let currentIndex = 0;

        const typeWriter = () => {
            if (currentIndex < aboutMeText.length) {
                const nextChar = aboutMeText.charAt(currentIndex);
                // const position = editor.getPosition();
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

            <div className="tray-image">
                {/* <img src="/images/Documents Folder.ico" alt="Open Profile" onClick={toggleProfileWindow} className="profile-icon" /> */}
                {showOverlay && (
                    <div
                        className="overlay"
                        onClick={hideOverlay}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 10,
                            display: 'fill',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#FFF',



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
                                    'C', 'l', 'i', 'c', 'k', ' ', 'A', 'r', 'o','u', 'n', 'd', '!',
                                ]}
                                idx={15}
                            />
                        </h1>
                    </div>
                    {/* <div className="desktop"> */}

                    <Rnd
                        default={{
                            x: 20,
                            y: 50,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('Recycle Bin')}>
                            <img src="/images/Recycle Bin with folder and document.ico" alt="Recycle Bin" />
                            <div className="icon-label">Recycle Bin</div>
                        </div>
                    </Rnd>
                    <Rnd
                        default={{
                            x: 20,
                            y: 150,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('Folder')}>
                            <img src="/images/Folder.ico" alt="Folder" />
                            <div className="icon-label">Folder</div>
                        </div>
                    </Rnd>
                    <Rnd
                        default={{
                            x: 20,
                            y: 250,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('Folder')}>
                            <img src="/images/Folder.ico" alt="Folder" />
                            <div className="icon-label">Folder</div>
                        </div>
                    </Rnd>
                    <Rnd
                        default={{
                            x: 20,
                            y: 350,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('Icon 1')}>
                            <img src="/images/Network Drive.ico" alt="Network Drive" />
                            <div className="icon-label">Network Drive</div>
                        </div>
                    </Rnd>
                    <Rnd
                        default={{
                            x: 20,
                            y: 450,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('Search')}>
                            <img src="/images/Search on Earth.ico" alt="Search on Earth" />
                            <div className="icon-label">Search</div>
                        </div>
                    </Rnd>
                    <Rnd
                        default={{
                            x: 20,
                            y: 550,
                            width: 70,
                            height: 80
                        }}
                        enableResizing={{
                            bottom: false,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false
                        }}
                    >
                        <div className="icon-container" onClick={() => handleIconClick('My Computer')}>
                            <img src="/images/My Computer.ico" alt="My Computer" />
                            <div className="icon-label">My Computer</div>
                        </div>
                    </Rnd>


                    {/* </div> */}

                    <Wrapper>
                        <div id="about-section" className={`popup-window ${isAboutOpen ? "" : "hidden"}`}>
                            <Rnd

                                default={{
                                    x: 320,
                                    y: -50,
                                    width: 320,
                                    height: 200
                                }}>
                                <Window>
                                    <WindowHeader className="window-title-bar">
                                        <span className="window-title">About Me</span>


                                        <div className="window-controls">
                                            <Button className="window-control">&#x2212;</Button> {/* Minimize */}
                                            <Button className="window-control">&#9744;</Button>  {/* Maximize */}
                                            <Button className="window-control">&#10005;</Button> {/* Close */}
                                        </div>
                                    </WindowHeader>
                                    <Toolbar>
                                        <Button variant='menu' size='sm'>File</Button>
                                        <Button variant='menu' size='sm'>Edit</Button>
                                        <Button variant='menu' size='sm' disabled>Save</Button>
                                    </Toolbar>
                                    <WindowContent>
                                        <GroupBox>
                                            {/* <div className="window-content"> */}
                                            <p>Hi there, Im John, a full stack developer, a coder and a problem solver. I love to build things, websites, applications, devices, you name it. This portfolio is a work in progress but also a showcase of my abilities. Scroll down to see more! </p>
                                            {/* </div> */}
                                        </GroupBox>
                                    </WindowContent>

                                </Window>
                            </Rnd>

                        </div>

                    </Wrapper>


                    <Wrapper>

                        <div className={`popup-window profile-window ${isProfileOpen ? "" : "hidden"}`}>
                            <Rnd

                                default={{
                                    x: 0,
                                    y: -100,
                                    width: 320,
                                    height: 200
                                }}>

                                <Window>
                                    <WindowHeader className="window-title-bar">
                                        <span className="window-title">Profile</span>
                                        <div className="window-controls">
                                            <Button className="window-control">&#x2212;</Button> {/* Minimize */}
                                            <Button className="window-control">&#9744;</Button> {/* Maximize */}
                                            <Button className="window-control" >&#10005;</Button> {/* Close */}
                                        </div>
                                    </WindowHeader>
                                    <Toolbar>

                                        <Button variant='menu' size='sm'>File</Button>
                                        <Button variant='menu' size='sm'>Edit</Button>
                                        <Button variant='menu' size='sm' disabled>Save</Button>
                                    </Toolbar>
                                    <WindowContent>
                                        <img src="/images/Okinawa.jpeg" alt="Me" className="profile-image" />
                                    </WindowContent>
                                </Window>
                            </Rnd>
                        </div>

                    </Wrapper>


                    <>

                        <Wrapper>
                            <Rnd

                                default={{
                                    x: 420,
                                    y: -240,
                                    width: 320,
                                    height: 200
                                }}>
                                <div className='language-container'>

                                    <Window className={`popup-window-language ${isLanguageOpen ? "" : "hidden"}`}>
                                        <WindowHeader className="window-title-bar">
                                            <span className="window-title">Languages</span>
                                            <div className="window-controls">
                                                <Button className="window-control">&#x2212;</Button> {/* Minimize */}
                                                <Button className="window-control">&#9744;</Button> {/* Maximize */}
                                                <Button className="window-control">&#10005;</Button> {/* Close */}
                                            </div>
                                        </WindowHeader>
                                        {/* <Toolbar>

                                            <Button variant='menu' size='sm'>File</Button>
                                            <Button variant='menu' size='sm'>Edit</Button>
                                            <Button variant='menu' size='sm' disabled>Save</Button>
                                        </Toolbar> */}
                                        <WindowContent>
                                            {/* Assuming you replace this part with a suitable React95 element or keep it as is if it matches the style */}
                                            {/* <div className="cube-container-languages"></div> */}
                                            <div className="cube-container">
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
                                        </WindowContent>

                                    </Window>
                                </div>
                            </Rnd>

                        </Wrapper>



                        <Wrapper    >
                            <Rnd

                                default={{
                                    x: 500,
                                    y: -100,
                                    width: 320,
                                    height: 200
                                }}>
                                <div className={`popup-window-scroll ${isScrollOpen ? "" : "hidden"}`}>
                                    <Window>
                                        <WindowHeader className="window-title-bar">
                                            <span className="window-title">Notice</span>
                                            <div className="window-controls">
                                                <Button className="window-control" disabled>&#x2212;</Button> {/* Minimize */}
                                                <Button className="window-control" disabled>&#9744;</Button>  {/* Maximize */}
                                                <Button className="window-control" disabled>&#10005;</Button> {/* Close */}
                                            </div>
                                        </WindowHeader>
                                        {/* <Toolbar>

                                            <Button variant='menu' size='sm'>File</Button>
                                            <Button variant='menu' size='sm'>Edit</Button>
                                            <Button variant='menu' size='sm' disabled>Save</Button>
                                        </Toolbar> */}
                                        <WindowContent className="window-content">
                                            <p>Scroll down to continue<span className="cmd-cursor">_</span></p>
                                        </WindowContent>
                                    </Window>
                                </div>
                            </Rnd>
                        </Wrapper>
                        <Rnd

                            default={{
                                x: 0,
                                y: 0,
                                width: 700,
                                height: 200
                            }}>


                            <div className={`popup-window-Xterminal ${isXterminalOpen ? "" : "hidden"}`}>
                                <div className="window-title-bar">
                                    <span className="window-title">Terminal</span>
                                    <div className="window-controls">
                                        <button className="window-control">&#x2212;</button> {/* Minimize */}
                                        <button className="window-control">&#9744;</button>  {/* Maximize */}
                                        <button className="window-control">&#10005;</button> {/* Close */}
                                    </div>
                                </div>
                                <div className="window-content">
                                    <XTerminal />
                                </div>
                            </div>
                        </Rnd>

                    </>

                </div>

                <img src="/images/clippy.png" className="clippy" id="clippy" />


            </div>

        </>

    );
};


export default About;
