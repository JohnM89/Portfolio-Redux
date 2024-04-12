import '../Footer/footer.css';
// import FooterTaskbar from '../Taskbar/taskbar';
import { useState, useEffect } from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import logoIMG from '../assets/images/logo.png';

const Footer = () => {
  const [open, setOpen] = useState(false);
  // const [opacity, setOpacity] = useState(1);
  const Wrapper = styled.div`

    // background: ${({ theme }) => theme.desktopBackground};
  `; // Start fully opaque

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate the scroll percentage
  //     const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  //     // Adjust opacity based on scroll. Tweak the formula as needed.
  //     setOpacity(0 - scrollPercentage * 10); // Increase multiplier for quicker fade-out
  //   };

  //   // Add scroll event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up event listener when the component unmounts
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []); // Empty dependency array means this effect runs once on mount

    //needed to override the default position of the header (which isnt even a header its a footer in this instance but the damn thing is still called header in the source code library)
  //   useEffect(() => {
  //   // Query the DOM for the header element
  //   const header = document.querySelector('header.sc-guDLey.fLjOTq');
  //   if (header) {
  //     header.style.position = ''; // Or 'absolute' and set bottom to '0'
  //     header.style.top = 'auto';
  //     header.style.bottom = '0'; // To move it to the bottom if that's what needed
  //   }
  // }, []);

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
            {/* <img
              src={logoIMG}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            /> */}
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
              <MenuListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </MenuListItem>
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
