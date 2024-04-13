import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../NavBar/navbar.scss'; // Your existing sidebar styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faHtml5, faJsSquare, faReact, faNode, faSass, faBootstrap,
  faGithub, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { MenuList, MenuListItem } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  // background: ${({ theme }) => theme.desktopBackground};
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const technologies = [
    faHtml5, faCss3, faJsSquare, faReact, faNode, faSass,
    faBootstrap, faGithub, faGitAlt,
  ];

  return (
    <Wrapper>
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      {/* <div className="toggle-button" onClick={toggleSidebar}>
        <img src="/images/windowsStart.PNG" alt="Menu" />
      </div> */}
              {/* <div className="nav-technologies">
          {technologies.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="lg" className="nav-tech-icon" />
          ))}
        </div> */}
      {/* <nav className={`sidebar ${isOpen ? 'show' : ''}`}> */}
        <MenuList
                      style={{
                position: 'absolute',
                left: '0',
                bottom: '100%'
              }}
              onClick={() => setOpen(false)}
        >
                        <div className="nav-technologies">
          {technologies.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="lg" className="nav-tech-icon" />
          ))}
        </div>
          <Link smooth to="/#about" onClick={toggleSidebar}>
            <MenuListItem>                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                About Me</MenuListItem>
          </Link>
          <Link smooth to="/#portfolio" onClick={toggleSidebar}>
            <MenuListItem>                <span role='img' aria-label='📁'>
                  📁
                </span>
                Portfolio</MenuListItem>
          </Link>
          <Link smooth to="/#contact" onClick={toggleSidebar}>
            <MenuListItem>                <span role='img' aria-label='📁'>
                  📁
                </span>
                Contact</MenuListItem>
          </Link>
          <Link smooth to="/#resume" onClick={toggleSidebar}>
            <MenuListItem>                <span role='img' aria-label='📁'>
                  📁
                </span>
                Resume</MenuListItem>
                              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </MenuListItem>
          </Link>
        </MenuList>
      {/* </nav> */}
    </div>
  </Wrapper>
  );
}

export default Navigation;
