import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../NavBar/navbar.scss'; // Make sure your CSS is adapted for sidebar styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faHtml5, faJsSquare, faReact, faNode, faSass, faBootstrap,
  faGithub, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import '../NavBar/navbar.scss';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const technologies = [
    faHtml5, faCss3, faJsSquare, faReact, faNode, faSass,
    faBootstrap, faGithub, faGitAlt,
  ];

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
  <img src="/images/windowsStart.PNG" alt="Menu" />
</div>
      <nav className={`sidebar ${isOpen ? 'show' : ''}`}>
        <Link smooth to="/#about" onClick={toggleSidebar}>About Me</Link>
        <Link smooth to="/#portfolio" onClick={toggleSidebar}>Portfolio</Link>
        <Link smooth to="/#contact" onClick={toggleSidebar}>Contact</Link>
        <Link smooth to="/#resume" onClick={toggleSidebar}>Resume</Link>
                <div className="nav-technologies">
          {technologies.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="lg" className="nav-tech-icon" />
          ))}
        </div>
      </nav>

      
    </div>
    
  );
}

export default Navigation;
