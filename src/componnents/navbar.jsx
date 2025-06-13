import React from 'react';
import './Navbar.css'; // Nous créerons ce fichier CSS ensuite

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Icône de menu hamburger */}
      <div className="menu-icon">&#9776;</div>
      
      {/* Partie droite avec profil et notification */}
      <div className="navbar-right">
        {/* Image de profil */}
        <img 
          src="https://randomuser.me/api/portraits/women/68.jpg" 
          alt="Profile" 
          className="profile-img" 
        />
        
        {/* Notification avec point d'alerte */}
        <div className="notification">
          <span className="dot"></span>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png" 
            alt="Notifications" 
            className="bell-icon" 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;