// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { GroupBox,  MenuList, MenuListItem, ScrollView, Toolbar, Separator, Button, TextInput, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';
import '../Resume/resume.scss';

const Resume = () => {
    return (
        <div className="resume-container">
            
            <div className="image-placeholders">
                <img src="/images/logo1.png" alt="Logo 1" className="placeholder" />
                <img src="/images/logo3.png" alt="Logo 2" className="placeholder" />
                <img src="./images/logo2.png" alt="Logo 3" className="placeholder" />
            </div>
            <div className="social-links">
                <a href="https://github.com/JohnM89" target="git" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                    
                </a>
                <a href="https://www.linkedin.com/in/john-macneil-981316203/" target="link" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="/pdf/John MToronto 1 (1).pdf" target="pdf" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} /> Resume PDF
                </a>
            </div>
        </div>
    );
};

export default Resume;
