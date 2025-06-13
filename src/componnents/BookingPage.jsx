import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar'; // Importez votre composant Navbar
import './BookingPage.css'; // Style spécifique à cette page
import rideImage from './image.png';
import RideOptions from './RadioOption';
import BottomNav from './BottomNav';
const DurationSelector = () => {
  const [duration, setDuration] = useState(300); // 300 minutes = 5h00
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}h${mins.toString().padStart(2, '0')}`;
  };

  const handleIncrement = () => {
    setDuration(prev => prev + 15);
  };

  const handleDecrement = () => {
    if (duration > 15) { // Minimum 15 minutes
      setDuration(prev => prev - 15);
    }
  };
  return (
    <div className="duration-selector">
      <div className="duration-label">Transit duration:</div>
      <div className="duration-controls">
        <button onClick={handleDecrement} className="duration-button">-</button>
        <div className="duration-value">{formatDuration(duration)}</div>
        <button onClick={handleIncrement} className="duration-button">+</button>
      </div>
    </div>
  );
};
const BookingPage = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
    e.preventDefault();
    navigate('/home');
    // Ou pour revenir à la page précédente : navigate(-1);
  };
  return (
    <div className="booking-page">
      <Navbar /> {/* La navbar que nous avons créée */}
      
      <div className="booking-container">
           <button 
      className="back-link" 
      onClick={handleClick}
      aria-label="Back to homepage"
    >
      ← Back to homepage
    </button>
{/*         
        <h1 className="booking-title">Book Your Trip</h1> */}
        
        <div className="booking-steps">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-title">Select your ride</div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-title">Select your ticket</div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-title">Pay</div>
          </div>
        </div>
        
        {/* Contenu spécifique à l'étape 1 */}
        <div className="step-content">
          {/* <h2>Available Rides</h2> */}
          {/* Ici vous ajouteriez la liste des trajets disponibles */}
              <img 
            src={rideImage} 
            alt="Available rides" 
            className="ride-image"
          />
             <DurationSelector />
            <RideOptions />
        </div>
      </div>
      <BottomNav/>
    </div>
  );
};

export default BookingPage;