import React, { useState } from 'react';
import './Navbar.scss';
import image from './stethoscpe.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={image} alt="Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />  
        ProVital
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Doctors</li>
          <li>List your practice</li>
          <li>For Employers</li>
          <li>Courses</li>
          <li>Books</li>
          <li>Speakers</li>
        </ul>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown} style={{backgroundColor:'#ffffff',color:'black'}}>
           Login / SignUp
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/your-valid-url">Doctor</a> <span>Login / Signup</span></li>
              <li><a href="/your-valid-url">Patient</a> <span>Login / Signup</span></li>
            </ul>
          )}
        </div>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
