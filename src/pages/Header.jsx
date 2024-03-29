import React, { useState } from "react";
import './Heading.css';
import { AiOutlineArrowUp } from "react-icons/ai";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="header">
      <div className="top">
        <div className="header__brand">Abuubakar</div>
        <nav className={`header__nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#Bio">Bio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <div className={`header__menu-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </button>
    </header>
  );
};

export default Header;
