import React from 'react';
import './NavbarHome.css';
// Importez vos images
import logo3 from '../assets/image.png';
import logo1 from '../assets/royal-air-maroc.png';
import logo2 from '../assets/oneworld.jpg';

const NavbarHome = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logos-container">
          <img src={logo1} alt="Logo 1" className="nav-logo" />
          <img src={logo2} alt="Logo 2" className="nav-logo" />
          <img src={logo3} alt="Logo 3" className="nav-logo" />
        </div>
   </div>
      
      <div className="navbar-right">
        <div className="notification-circle">C</div>
        <div className="menu-icon">&#9776;</div>
      </div>
         
    </nav>
  );
};

export default NavbarHome;