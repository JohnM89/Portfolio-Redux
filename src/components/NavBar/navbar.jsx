import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../NavBar/navbar.scss';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navigation-container ${isOpen ? 'open' : ''}`}>
      <nav className="navigation">
        <Link smooth to="/#about" onClick={toggleModal}>
          About Me
        </Link>
        <Link smooth to="/#portfolio" onClick={toggleModal}>
          Portfolio
        </Link>
        <Link smooth to="/#contact" onClick={toggleModal}>
          Contact
        </Link>
        <Link smooth to="/#resume" onClick={toggleModal}>
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
