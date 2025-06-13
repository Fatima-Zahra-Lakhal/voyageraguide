import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TicketPage.css';
import Navbar from './navbar';

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ride } = location.state || {};

  // ─────────────────────────────────────────────────────────────────────────────
  // Hooks à déclarer avant tout return conditionnel
  const [qtyUnder4, setQtyUnder4] = useState(0);
  const [qty4to12, setQty4to12] = useState(0);
  const [qtyMoroccans, setQtyMoroccans] = useState(0);
  const [qtyForeignAdults, setQtyForeignAdults] = useState(1);


  const handleConfirm = () => {
    navigate("/payment");
  };
  const handleCancel = () => {
    navigate("/home");
  };
  // Fonctions génériques d’incrément / décrément
  const handleIncrement = (setter, currentValue) => {
    setter(currentValue + 1);
  };
  const handleDecrement = (setter, currentValue) => {
    if (currentValue > 0) {
      setter(currentValue - 1);
    }
  };

    const handleClick = (e) => {
    e.preventDefault();
    navigate('/home');
    // Ou pour revenir à la page précédente : navigate(-1);
  };

  if (!ride) {
    return <div>No ride selected</div>;
  }

  return (
    <div className="booking-page">
      <Navbar />
      
      <div className="booking-container">
           <button 
      className="back-link" 
      onClick={handleClick}
      aria-label="Back to homepage"
    >
      ← Go Back 
    </button>

        
        <div className="booking-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-title">Select your ride</div>
          </div>
          
          <div className="step active">
            <div className="step-number">2</div>
            <div className="step-title">Your ticket</div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-title">Pay</div>
          </div>
        </div>
        
        <div className="ticket-content">
          <div className="ticket-header">
            <h2>Ride to Hassan II Mosque</h2>
          </div>
          <div className="ticket-card">
            <div className="ticket-section">
              <div className="ticket-icon-container">
                <img src={ride.icon} alt={ride.name} className="ticket-icon" />
                <span className="ride-type">{ride.name}</span>
              </div>
              
              <div className="ticket-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Departure Time</span>
                  <span className="detail-value">{ride.time}</span>
                </div>
                
                <div className="detail-item price-item">
                  <span className="detail-label">Price</span>
                  <div className="price-container">
                    <span className="detail-value">{ride.price}</span>
                    <button
                      className="edit-button"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ticket-description">
          <h2>Book your ticket</h2>
          <h3>Hassan II Mosque</h3>
          <p>You are about to book an entry ticket to visit Hassan II Mosque.</p>
        </div>

        {/* Section des prix ajoutée ici */}
        <div className="pricing-section">
          <h3 className="pricing-title">Ticket Categories</h3>
          <div className="pricing-table">
            
            {/* Adultes étrangers */}
            <div className="pricing-row">
              <span className="pricing-category">Foreign adults</span>
              <span className="pricing-price">70 MAD</span>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    handleDecrement(setQtyForeignAdults, qtyForeignAdults)
                  }
                >
                  −
                </button>
                <span className="quantity-value">{qtyForeignAdults}</span>
                <button
                  className="quantity-btn"
                  onClick={() =>
                    handleIncrement(setQtyForeignAdults, qtyForeignAdults)
                  }
                >
                  +
                </button>
              </div>
            </div>
                    {/* Marocains, résidents & étudiants étrangers */}
            <div className="pricing-row">
              <span className="pricing-category">
                Moroccans, residents & foreign students
              </span>
              <span className="pricing-price">30 MAD</span>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecrement(setQtyMoroccans, qtyMoroccans)}
                >
                  −
                </button>
                <span className="quantity-value">{qtyMoroccans}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncrement(setQtyMoroccans, qtyMoroccans)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Enfants de moins de 4 ans */}
            <div className="pricing-row">
              <span className="pricing-category">
                Children under 4 years (with parents)
              </span>
              <span className="pricing-price">Free</span>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecrement(setQtyUnder4, qtyUnder4)}
                >
                  −
                </button>
                <span className="quantity-value">{qtyUnder4}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncrement(setQtyUnder4, qtyUnder4)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Enfants 4-12 ans & étudiants marocains */}
            <div className="pricing-row">
              <span className="pricing-category">
                Children 4-12 years & Moroccan students
              </span>
              <span className="pricing-price">Free</span>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecrement(setQty4to12, qty4to12)}
                >
                  −
                </button>
                <span className="quantity-value">{qty4to12}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncrement(setQty4to12, qty4to12)}
                >
                  +
                </button>
              </div>
            </div>

    

          </div>
        </div>
        {/* Fin de la section des prix */}


      </div>
            <div className="button-grid">
  <button className="confirm-button" onClick={handleConfirm}>
    Select This Option
  </button>
  <button className="cancel-button" onClick={handleCancel}>
    Cancel
  </button>
</div>

    </div>
  );
};

export default TicketPage;
