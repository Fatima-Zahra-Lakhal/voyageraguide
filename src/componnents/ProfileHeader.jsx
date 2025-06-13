import React from 'react';
import './ProfileHeader.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import NavbarHome from './NvbarHome';
import ExperienceCards from './ExprienceCards';
import BottomNav from './BottomNav';


const ProfileHeader = () => {
  return (
    <div className="app-container">
      {/* Navbar fixe */}
      <div className="navbar-fixed">
        <NavbarHome />
      </div>
      
      {/* Contenu défilant */}
      <div className="content-with-scroll">
        <div className="profile-container">
          <div className="profile-content">
            {/* Ligne d'aéroport avec icône */}
            <div className="location-container right-aligned">
              <FaMapMarkerAlt className="location-icon blue-icon" />
              <span className="location-text">MEDVI Casablanca Airport</span>
              <IoIosArrowDown className="dropdown-icon blue-icon" />
            </div>
            
            {/* Salutation */}
            <div className="greeting">HELLO CHAYMAE!</div>

            {/* Carte de membre */}
            <div className="membership-card">
              <div className="membership-id">
                <span className="membership-label">Safar Flyer</span>
                <span className="membership-number">N° 678908451</span>
              </div>
              <div className="miles-balance">10 000 Award miles = 10 000 Beyond the Map </div>
            </div>

            {/* Texte d'information */}
            <div className="airport-notice">
              <p>We noticed you are at the <b>MEDVI</b> Casablanca Airport.</p>
              <p>Check out <b>activities</b> nearby and <b>gift options to be delivered to you</b>.Only available to <span style={{ color: '#e0115f' }}>Safar Flyers</span> members. </p>
            </div>
            <nav className="categories-nav">
              <ul className="categories-list">
                <li><a href="" className="nav-link active">Experiences</a></li>
                <li><a href="" className="nav-link">Gifts</a></li>
                <li><a href="" className="nav-link">Shopping</a></li>
                <li><a href="" className="nav-link">Food</a></li>
                <li><a href="" className="nav-link">Night life</a></li>
              </ul>
            </nav>
            
            <h3 className="section-title">To see in Casablanca</h3>
            <ExperienceCards />
          </div>
        </div>
      </div>
  
      <BottomNav/>
    </div>
  );
};

export default ProfileHeader;