import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../NavBar/navbar.scss'; // Your existing sidebar styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faHtml5, faJsSquare, faReact, faNode, faSass, faBootstrap,
  faGithub, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { MenuList, MenuListItem } from 'react95';

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
      {/* <div className="toggle-button" onClick={toggleSidebar}>
        <img src="/images/windowsStart.PNG" alt="Menu" />
      </div> */}
              {/* <div className="nav-technologies">
          {technologies.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="lg" className="nav-tech-icon" />
          ))}
        </div> */}
      <nav className={`sidebar ${isOpen ? 'show' : ''}`}>
        <MenuList>
                        <div className="nav-technologies">
          {technologies.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="lg" className="nav-tech-icon" />
          ))}
        </div>
          <Link smooth to="/#about" onClick={toggleSidebar}>
            <MenuListItem>About Me</MenuListItem>
          </Link>
          <Link smooth to="/#portfolio" onClick={toggleSidebar}>
            <MenuListItem>Portfolio</MenuListItem>
          </Link>
          <Link smooth to="/#contact" onClick={toggleSidebar}>
            <MenuListItem>Contact</MenuListItem>
          </Link>
          <Link smooth to="/#resume" onClick={toggleSidebar}>
            <MenuListItem>Resume</MenuListItem>
          </Link>
        </MenuList>
      </nav>
    </div>
  );
}

export default Navigation;
