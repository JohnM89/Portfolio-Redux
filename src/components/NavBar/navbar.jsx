import React, { useState } from 'react';
import '../NavBar/navbar.scss'; 

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
        <a href="#about" onClick={toggleModal}>
          About Me
        </a>
        <a href="#portfolio" onClick={toggleModal}>
          Portfolio
        </a>
        <a href="#contact" onClick={toggleModal}>
          Contact
        </a>
        <a href="#resume" onClick={toggleModal}>
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
