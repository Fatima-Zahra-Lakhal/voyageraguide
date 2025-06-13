import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";
import { FaHome, FaTicketAlt, FaHeart, FaMapMarkedAlt, FaCube } from "react-icons/fa";

const NavItem = ({ icon, active = false, onClick }) => {
  return (
    <div 
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <div className="bottom-nav">
      <NavItem 
        icon={<FaHome />} 
        active={activeTab === '/home'} 
        onClick={() => handleNavigation('/home')} 
      />
      <NavItem 
        icon={<FaTicketAlt />} 
        active={activeTab === '/booking'} 
        onClick={() => handleNavigation('/booking')} 
      />
      <NavItem 
        icon={<FaHeart />} 
        active={activeTab === '/favorites'} 
        onClick={() => handleNavigation('/favorites')} 
      />
      <NavItem 
        icon={<FaMapMarkedAlt />} 
        active={activeTab === '/map'} 
        onClick={() => handleNavigation('/map')} 
      />
      <NavItem 
        icon={<FaCube />} 
        active={activeTab === '/more'} 
        onClick={() => handleNavigation('/more')} 
      />
    </div>
  );
};

export default BottomNav;