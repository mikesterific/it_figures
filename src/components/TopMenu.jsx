import React, { useState, useEffect, useRef } from 'react';

const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="top-menu" ref={menuRef}>
      <h1 className="open-sans-light">It Figures ACCOUNTING</h1>
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#value" onClick={closeMenu}>
            Value
          </a>
        </li>
        <li>
          <a href="#our-services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#our-approach" onClick={closeMenu}>
            Our Approach
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
