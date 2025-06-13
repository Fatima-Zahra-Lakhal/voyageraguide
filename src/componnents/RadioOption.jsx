import React, { useState } from 'react';
import './RideOptions.css';
import { useNavigate } from 'react-router-dom';
const RideOptions = () => {
 const [selectedRideIndex, setSelectedRideIndex] = useState(null);
 const navigate = useNavigate();
  const handleConfirm = () => {
    if (selectedRideIndex !== null) {
      navigate('/ticket', { state: { ride: rides[selectedRideIndex] } });
    }
  };
  const rides = [
    // {
    //   name: "UberX",
    //   time: "8:31am",
    //   price: "510DH",
    //   type: "standard",
    //   eta: "",
    //   icon: "/image.png"
    // },
    {
      name: "Berlin",
      time: "8:36am",
      price: "510DH",
      type: "electric",
      eta: "5 min away",
      icon: "/comfort_header.jpg"
    },
    {
      name: "Black",
      time: "8:38am",
      price: "720DH",
      type: "premium",
      eta: "",
      icon: "https://tse3.mm.bing.net/th?id=OIP._acU7XIIbdHkNPlQtE3FZwAAAA&pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="ride-options-container">
      <div className="rides-list">
        {rides.map((ride, index) => (
           <div 
            key={index} 
            className={`ride-card ${ride.type} ${selectedRideIndex === index ? 'selected' : ''}`}
            onClick={() => setSelectedRideIndex(selectedRideIndex === index ? null : index)}
          >
            <div className="ride-icon">
              <img src={ride.icon} alt={ride.name} className="ride-image-icon" />
            </div>
            
            <div className="ride-info">
              <div className="ride-name-time">
                <span className="ride-name">{ride.name}</span>
                <span className="ride-time">
                  {ride.time}
                  {ride.eta && <span className="ride-eta"> - {ride.eta}</span>}
                </span>
              </div>
            </div>
            
            <div className="ride-price">{ride.price}</div>
          </div>
        ))}
      </div>
     <button 
        className={`confirm-button ${ selectedRideIndex === null ? 'disabled' : ''}`}
        onClick={handleConfirm}
        disabled={selectedRideIndex === null}
      >
        Confirm and View Ticket
      </button>
    </div>
  );
};

export default RideOptions;