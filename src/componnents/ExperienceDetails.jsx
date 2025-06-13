import React, { useState } from 'react';
import { FaHeart, FaShare, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import {FaRegCalendarAlt, FaRegLightbulb } from 'react-icons/fa';
import './ExperienceDetails.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Facilities from './Facilities';
import maps from '../assets/maps.jpg'

const ExperienceDetails = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [showOpeningTimes, setShowOpeningTimes] = useState(false);
  const [showMustKnow, setShowMustKnow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { experience } = location.state || {};
    const handleConfirm = () => {
    navigate("/home");
  };
     const handlebooking  = () => {
    navigate("/booking");
  };
  // Données par défaut si aucune n'est passée
  const defaultExperience = {
    title: "Ancienne Médina",
    image: "https://example.com/medina.jpg",
    history: "Default history text...",
    openingTimes: {
      days: "Monday to Sunday",
      hours: "8:00 AM - 6:00 PM",
      closed: "Closed on public holidays"
    },
    mustKnow: [
      "Wear comfortable shoes",
      "Bargaining is expected in souks",
      "Respect prayer areas"
    ]
  };

  const currentExperience = experience || defaultExperience;
  const fullHistory = currentExperience.history;
  const shortHistory = fullHistory.split('.')[0] + '.';
  const displayText = showFullHistory ? fullHistory : shortHistory;

  if (!currentExperience) {
    return <div className="not-found">No experience data found</div>;
  }

  return (
    <div className="experience-detail-container">
   <div className="detail-header">
  <div className="detail-image" style={{ backgroundImage: `url(${currentExperience.image})` }}>
    {/* Bouton retour */}
    <button 
      className="icon-button back-button"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft />
    </button>
    
    {/* Boutons d'actions */}
    <div className="image-actions">
      <button className="icon-button">
        <FaShare />
      </button>
      <button className="icon-button">
        <FaHeart />
      </button>
    </div>
    
    <h1 className="detail-title">{currentExperience.title}</h1>
  </div>
</div>

      <div className="detail-body">
        <div className="detail-highlight">
          <p>
            {displayText}
            {fullHistory.length > shortHistory.length && (
              <button 
                onClick={() => setShowFullHistory(!showFullHistory)} 
                className="read-more-btn"
              >
                {showFullHistory ? (
                  <>
                    <FaChevronUp /> Show less
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Learn more
                  </>
                )}
              </button>
            )}
          </p>
        </div>

        {/* Section OPENING TIMES - Dépliable */}
        <div className="info-section">
          <div 
            className="section-header" 
            onClick={() => setShowOpeningTimes(!showOpeningTimes)}
            style={{ cursor: 'pointer' }}
          >
            <FaRegCalendarAlt className="section-icon" />
            <h4>OPENING TIMES</h4>
            {showOpeningTimes ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          
          {showOpeningTimes && (
            <div className="section-content">
              <p>{currentExperience.openingTimes.days}</p>
              <p>{currentExperience.openingTimes.hours}</p>
              <p className="closed-info">{currentExperience.openingTimes.closed}</p>
            </div>
          )}
        </div>
<hr style={{ border: 'none', height: '0.5px', backgroundColor: 'lch(62.8% 25.25 251.98)' }} />

        {/* Section MUST KNOW AND MANNERS - Dépliable */}
        <div className="info-section">
          <div 
            className="section-header" 
            onClick={() => setShowMustKnow(!showMustKnow)}
            style={{ cursor: 'pointer' }}
          >
            <FaRegLightbulb className="section-icon" />
            <h4>MUST KNOW AND MANNERS</h4>
            {showMustKnow ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          
          {showMustKnow && (
            <ul className="section-content">
              {currentExperience.mustKnow.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Facilities/>
 <img src={maps} className='maps' alt='map'/>
  <h4 style={{ paddingLeft: '20px' }}>HOW DOES IT WORK</h4>
<div className="booking-container">
  <div style={{
    display: 'flex',
    marginTop: '2rem',
    position: 'relative'
  }}>
    {/* Ligne verticale */}
    <div style={{
      position: 'absolute',
      left: '25px',
      top: '35px',
      bottom: '35px',
      width: '2px',
      backgroundColor: '#E2E8F0',
      zIndex: 1
    }}></div>
    
    {/* Colonne des cercles numérotés (gauche) */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '7rem',
      width: '50px',
      paddingRight: '1rem',
      position: 'relative',
      zIndex: 2,
      alignItems: 'center'
    }}>
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: ' #C2002F',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>1</div>
      
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: ' rgba(194, 0, 47, 0.2)',
        color: '#64748B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>2</div>
      
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: ' rgba(194, 0, 47, 0.2)',
        color: '#64748B',
        display: 'flex',
        marginTop:'-40px',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>3</div>
    </div>
    
    {/* Colonne du contenu (droite) */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      flex: 1
    }}>
      {/* Étape 1 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          fontWeight: 'bold', 
          marginBottom: '0.05rem'
        }}>
          Select your ride
        </div>
        <p style={{ 
          margin: 0,
          color: '#64748B',
          lineHeight: '1.6'
        }}>
          In order to be back on time for your trip, you need to first book a private chauffeur to take you there and wait for you to finish the visit before bringing you back to the MEDVI airport for your connecting flight.
        </p>
      </div>
      
      {/* Étape 2 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          fontWeight: 'bold', 
          marginBottom: '0.05rem'
        }}>
          Select your ticket
        </div>
        <p style={{ 
          margin: 0,
          color: '#64748B',
          lineHeight: '1.6'
        }}>
          Select the type of ticket you would like to access Hassan II Mosque
        </p>
      </div>
      
      {/* Étape 3 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          fontWeight: 'bold', 
          marginBottom: '0.05rem'
        }}>
          Pay
        </div>
        <p style={{ 
          margin: 0,
          color: '#64748B',
          lineHeight: '1.6'
        }}>
          Securely make your payment using a debit/credit card or your miles.
        </p>
      </div>
    </div>
  </div>
</div>
    <div className="button-grid">
 <button className="confirm-button" onClick={handlebooking}>
    Book a visit
    </button>
        <button className="cancel-button" onClick={handleConfirm}>Back to homepage</button>
        </div>
      </div>
      

  );
};

export default ExperienceDetails;