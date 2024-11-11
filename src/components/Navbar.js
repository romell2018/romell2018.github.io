import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../logo/0.jpg';
//NavigationBar with Hamburger Menu
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
 
  
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 50);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`nav-logo ${isScrolled ? 'logo-visible' : 'logo-hidden'}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Romell Mertis Logo" style={{height: '40px', width: 'auto' }} />
          </a>
        </div>
        <div className="nav-container"> {/* Ensure this div is added */}
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a> 
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;