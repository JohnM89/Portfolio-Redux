import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'; // Import your SCSS file for styling

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navigation-container ${isOpen ? 'open' : ''}`}>
      {/* <button className="toggle-button" onClick={toggleModal}>
        ☰
      </button> */}
      <nav className="navigation">
        <NavLink to="/about" onClick={toggleModal}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" onClick={toggleModal}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" onClick={toggleModal}>
          Contact
        </NavLink>
        <NavLink to="/resume" onClick={toggleModal}>
          Resume
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
