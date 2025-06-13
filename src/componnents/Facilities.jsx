import React from 'react';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    { 
      name: 'Outdoor Pool', 
      icon: 'https://c2.staticflickr.com/4/3615/3542698956_fa09679efe_b.jpg' 
    },
    { 
      name: '1 Bathtub', 
      icon: 'https://c1.staticflickr.com/7/6078/6042864560_1abf4edf5e.jpg' 
    },
    { 
      name: 'Free Wi-Fi', 
      icon: 'https://live.staticflickr.com/8583/16608219558_e7f0b50ce1_b.jpg' 
    },
    { 
      name: 'Free Breakfast', 
      icon: 'https://c2.staticflickr.com/4/3315/3241926435_cb6ec2c588_b.jpg' 
    },
    { 
      name: 'Beach Accessible', 
      icon: 'https://tse1.mm.bing.net/th?id=OIP.xHFHYLHIdhOcQepQ0mGRtgHaD-&pid=Api&P=0&h=180' 
    }
  ];

  return (
    <div className="facilities-container">
      <h3 className="facilities-title">FACILITIES</h3>
      <div className="facilities-scroll">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <img 
              src={facility.icon} 
              alt={facility.name}
              className="facility-icon" 
            />
            <p className="facility-name">{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;