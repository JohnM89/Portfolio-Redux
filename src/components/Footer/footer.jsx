
import '../Footer/footer.css';
import FooterTaskbar from '../Taskbar/taskbar';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [opacity, setOpacity] = useState(1); // Start fully opaque

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
      // Adjust opacity based on scroll. Tweak the formula as needed.
      setOpacity(0 - scrollPercentage * 10); // Increase multiplier for quicker fade-out
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <footer style={{ opacity: opacity, transition: 'opacity 0.5s ease' }}>
      {/* <div className="tray-image"></div> */}
      {/* <p> &copy; 2024</p> */}
      <FooterTaskbar />
    </footer>
  );
}

export default Footer;
