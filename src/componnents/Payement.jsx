import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketPage.css';
import './Payement.css';
import Navbar from './navbar';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cardNumber, expiryDate, cvv, cardHolder });
    // navigate('/confirmation');
  };
    const handleClick = (e) => {
    e.preventDefault();
    navigate('/booking');
    // Ou pour revenir à la page précédente : navigate(-1);
  };
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
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-title">Your ticket</div>
          </div>
          <div className="step active">
            <div className="step-number">3</div>
            <div className="step-title">Pay</div>
          </div>
        </div>

        <div className="payment-header">
          <h1>Payment</h1>
          <h2>Hassan II Mosque</h2>
          <p>You are about to book an entry ticket to visit Hassan II Mosque.</p>
        </div>

        {/* Formulaire de paiement */}
        <div className="payment-card">
          <div className="card-front">
            <div className="card-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              <img src="https://tse2.mm.bing.net/th?id=OIP.EudoPK_Ka4eKz55fLOBkEwAAAA&pid=Api&P=0&h=180" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
            </div>

            <div className="card-number">
              <input
                type="text"
                placeholder="Numéro"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength="16"
              />
            </div>
            <div className="card-details">
              <div className="card-expiry">
                <input
                  type="text"
                  placeholder="MM/AA"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  maxLength="5"
                />
              </div>
              <div className="card-cvv">
                <input
                  type="text"
                  placeholder="CW"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength="3"
                />
              </div>
            </div>
            <div className="card-holder">
              <input
                type="text"
                placeholder="Titulaire de la carte"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="confirm-button" onClick={handleSubmit}>
          Payer
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
