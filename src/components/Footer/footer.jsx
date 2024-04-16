import '../Footer/footer.css';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  faCss3, faHtml5, faJsSquare, faReact, faNode, faSass, faBootstrap,
  faGithub, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FooterTaskbar from '../Taskbar/taskbar';

import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoIMG from '/images/win95.png';


const Footer = () => {
  const [open, setOpen] = useState(false);

  const Wrapper = styled.div`

    background: ${({ theme }) => theme.desktopBackground};
  `; 

    const technologies = [
    faHtml5, faCss3, faJsSquare, faReact, faNode, faSass,
    faBootstrap, faGithub, faGitAlt,
  ];



  return (
    <footer >
     
      <Wrapper>
    <AppBar style={{ position: 'relative' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
<Button
  onClick={() => setOpen(!open)}
  active={open}
  style={{ fontWeight: 'bold' }}
>
              <img
              src={logoIMG}
             alt='react95 logo'
             style={{ height: '20px', marginRight: 4 }}
           />
  Start
</Button>
{open && (
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
        <Separator />
    <Link smooth to="/#about">
      <MenuListItem>
        <span role='img' aria-label='👨‍💻'>
          👨‍💻
        </span>
        About Me
      </MenuListItem>
    </Link>
    <Link smooth to="/home#portfolio">
      <MenuListItem>
        <span role='img' aria-label='📁'>
          📁
        </span>
        Portfolio
      </MenuListItem>
    </Link>
    <Link smooth to="/home#contact">
      <MenuListItem>
        <span role='img' aria-label='📁'>
          📁
        </span>
        Contact
      </MenuListItem>
    </Link>
    <Link smooth to="/home#resume">
      <MenuListItem>
        <span role='img' aria-label='📁'>
          📁
        </span>
        Resume
      </MenuListItem>
    </Link>

    {/* <MenuListItem>
      <span role='img' aria-label='📁'>
        📁
      </span>
      My account
    </MenuListItem> */}
    <Separator />
    <MenuListItem disabled>
      <span role='img' aria-label='🔙'>
        🔙
      </span>
      Logout
    </MenuListItem>
  </MenuList>
)}
        </div>

        <TextInput placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>

</Wrapper>
    </footer>
  );
}

//prop handling
 Footer.propTypes = {
  children: PropTypes.node,
 };

export default Footer;
