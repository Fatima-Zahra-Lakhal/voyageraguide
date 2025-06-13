import React from 'react';
import './ExperienceCards.css';
import { FaClock, FaMapMarkerAlt, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import { FaCar } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { useNavigate, } from 'react-router-dom';
// Dans ton JSX :
<FaCar className="icon" />

const ExperienceCards = () => {
  
  const navigate = useNavigate();
  const experiences = [
  {
    id: 1,
    title: "Hassan II Mosque",
    price: "From 80 MAD",
    guidedTour: "Guided tour from MAD 400",
    distance: "32km from Mohammed V Airport",
    times: ["40 min", "7 h"],
    image: "https://1.bp.blogspot.com/-4oL1Rf1g2EU/VcTlz4fMgcI/AAAAAAAADmk/FxSKNCvS6Ew/s1600/1Hassan2.jpg",
    history: "Inaugurated in 1993, the Hassan II Mosque is an architectural masterpiece designed by Michel Pinseau. Its 210-meter minaret is the tallest in the world. Partially built over the sea, it can accommodate 25,000 worshippers inside and 80,000 on the esplanade. Materials come from all regions of Morocco (marble from Agadir, cedar from the Middle Atlas, granite from Tafraoute).",
    mustKnow: [
      "Modest attire required",
      "Tours suspended during prayers",
      "Shoes must be removed in prayer areas",
      "Photography allowed except during services"
    ],
    highlights: [
      "Prayer hall with retractable roof",
      "Glass floor over the sea",
      "Traditional artisanal decor",
      "Panoramic views of the Atlantic"
    ],
    openingTimes: {
      days: "Every day except Friday",
      hours: "9:00 AM - 2:00 PM (hours vary by season)",
      closed: "Closed to non-Muslims during Ramadan"
    }
  },
  {
    id: 2,
    title: "La Corniche",
    price: "Free",
    guidedTour: "Guided tour from MAD 200",
    distance: "32km from Mohammed V Airport",
    times: ["45 min", "7 h"],
    image: "https://c2.staticflickr.com/4/3626/3394201151_0109305e1b_b.jpg",
    history: "Casablanca’s Corniche, developed in the 1920s, became the favorite resort area for locals. This 5km seaside promenade blends Art Deco architecture and modernity, featuring iconic beach clubs (Miami, Tahiti) and new luxury residences. Filming location for several movies including 'Casablanca' (1942).",
    mustKnow: [
      "Best visited in late afternoon",
      "Bring cash for small shops",
      "Very sunny – sunscreen is essential",
      "Avoid unsupervised beaches"
    ],
    highlights: [
      "Spectacular sunsets",
      "Gourmet restaurants by the sea",
      "Natural pools at low tide",
      "Artisan market at Ain Diab"
    ],
    openingTimes: {
      days: "Open access",
      hours: "Venues open 10:00 AM - midnight",
      closed: "Some clubs closed in winter"
    }
  },
  {
    id: 3,
    title: "Old Medina",
    price: "Free",
    guidedTour: "Guided tour from MAD 400",
    distance: "34km from Mohammed V Airport",
    times: ["42 min", "7 h"],
    image: "https://live.staticflickr.com/3492/3928703559_fe80b3fd4e_b.jpg",
    history: "Founded in the 19th century, Casablanca’s Old Medina contrasts with the modern city. Surrounded by walls, it hosts a maze of colorful alleys filled with traditional artisans and authentic shops. Partially destroyed by the 1755 earthquake, it was rebuilt during the French protectorate.",
    mustKnow: [
      "Haggling is a must in the souks",
      "Use the Great Mosque as a central landmark",
      "Avoid fake guides",
      "Best visited in the morning"
    ],
    highlights: [
      "Spice and carpet souks",
      "United Nations Square",
      "Portuguese defensive walls",
      "View of the port from Bab Marrakech"
    ],
    openingTimes: {
      days: "Every day",
      hours: "8:00 AM - 8:00 PM (shops)",
      closed: "Some souks closed on Sundays"
    }
  },
  {
    id: 4,
    title: "Habous District",
    price: "Free",
    guidedTour: "Guided tour from MAD 200",
    distance: "31km from Mohammed V Airport",
    times: ["38 min", "6 h"],
    image: "https://live.staticflickr.com/3488/3929488332_bbe868537e_b.jpg",
    history: "Built in the 1920s under Lyautey, the Habous District is a modern medina blending Moroccan tradition and French urban planning. Nicknamed the 'New Medina', it was designed to house rural migrants coming to Casablanca. Its neo-Moorish architecture makes it a unique spot.",
    mustKnow: [
      "Shops close between 12 PM - 2 PM",
      "Try traditional pastries",
      "Paid parking at Place de la Fontaine",
      "Custom tailoring workshops"
    ],
    highlights: [
      "Royal market (luxury crafts)",
      "Grande Rue des Consuls",
      "Mahkama du Pacha (Palace of Justice)",
      "Historic Colonnes Bookstore"
    ],
    openingTimes: {
      days: "Monday to Saturday",
      hours: "9:00 AM - 7:00 PM (shops)",
      closed: "Closed on some Muslim holidays"
    }
  },
  {
    id: 5,
    title: "Church of Notre Dame of Lourdes",
    price: "Free",
    guidedTour: "Guided tour from MAD 200",
    distance: "31km from Mohammed V Airport",
    times: ["39 min", "6 h"],
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/f4/87/e7/notre-dame-de-lourdes.jpg",
    history: "Built in 1956 by architect Achille Dangleterre, this Catholic church is a remarkable example of modernist architecture, featuring stained glass by Gabriel Loire. It is one of the last major Christian religious buildings erected in Morocco before independence.",
    mustKnow: [
      "Proper attire required",
      "Photos allowed without flash",
      "Masses in French and Arabic",
      "Guided visits by reservation"
    ],
    highlights: [
      "Stained glass depicting biblical scenes",
      "50-meter-high bell tower",
      "Historic pipe organ",
      "Panoramic view from the forecourt"
    ],
    openingTimes: {
      days: "Tuesday to Sunday",
      hours: "9:00 AM - 6:00 PM",
      closed: "Closed on Mondays and Christian holidays"
    }
  },
  {
    id: 6,
    title: "Central Market",
    price: "Free",
    guidedTour: "Guided tour from MAD 200",
    distance: "32km from Mohammed V Airport",
    times: ["44 min", "7 h"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Casa_didier55_009.jpg/1280px-Casa_didier55_009.jpg",
    history: "Inaugurated in 1925 during the French protectorate, this covered market is an Art Deco gem. Designed by architect Marius Boyer, it combines metal structure with traditional zellige tiles. A historic meeting place for Casablanca’s diverse communities.",
    mustKnow: [
      "Best time: 8 AM - 11 AM",
      "Pay with small bills",
      "Try the fresh seafood",
      "Haggling accepted except in supermarkets"
    ],
    highlights: [
      "Giant fish market",
      "Exotic fruit stalls",
      "Aromatic spice shops",
      "Historic 'La Cigale' café"
    ],
    openingTimes: {
      days: "Every day",
      hours: "7:00 AM - 8:00 PM (food stalls until 10:00 PM)",
      closed: "Some stands close on Sunday afternoons"
    }
  },
  {
    id: 7,
    title: "Rick's Cafe",
    price: "Free (food & drinks charged)",
    guidedTour: "No guided tour available",
    distance: "33km from Mohammed V Airport",
    times: ["33 min", "7 h"],
    image: "https://klexikon.zum.de/images/thumb/6/6a/Rick%C2%B4s_Cafe_01.jpg/600px-Rick%C2%B4s_Cafe_01.jpg",
    history: "Inspired by the movie 'Casablanca' (1942), this legendary cafe was created in 2004 by former U.S. diplomat Kathy Kriger. Though the film wasn’t shot in Morocco, the venue faithfully recreates the movie's atmosphere with its piano bar, Moorish arches, and 1940s vibe.",
    mustKnow: [
      "Reservation highly recommended",
      "Smart casual dress code",
      "Happy hour from 6 PM to 7 PM",
      "Live piano every night from 8:30 PM"
    ],
    highlights: [
      "Replica of the film’s decor",
      "Terrace overlooking the port",
      "Signature cocktails (Try 'As Time Goes By')",
      "Vintage movie poster collection"
    ],
    openingTimes: {
      days: "Monday to Sunday",
      hours: "12:00 PM - 1:00 AM (last entry at midnight)",
      closed: "January 1st and December 25th"
    },
    menu: {
      averagePrice: "150-300 MAD for a cocktail",
      specialties: [
        "Pigeon pastilla",
        "Fish tagine",
        "Moroccan mojito (with local mint)"
      ]
    }
  }
];


  const handleLearnMore = (experience) => {
    navigate(`/experience/${experience.id}`, { state: { experience } });
  };
   return (
    <div className="experiences-container">
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-card">
          <div className="card-image-container">
            <div 
              className="card-image"
              style={{ backgroundImage: `url(${exp.image})` }}
            >
              <h3 className="card-title">{exp.title}</h3>
            </div>
          </div>
          
          <div className="card-content">
            <div className="price-info">
              <span className="price">{exp.price}</span>
              <div className="info-row">
                <FaInfoCircle className="icon" />
                <span>{exp.guidedTour}</span>
              </div>
              <div className="info-row">
                <FaMapMarkerAlt className="icon" />
                <span>{exp.distance}</span>
              </div>
            </div>
            
            <div className="time-info">
              <div className="time">
                <FaCar className="icon" />
                <span>{exp.times[0]}</span>
              </div>
              <div className="time">
                <FaWalking className="icon" />
                <span>{exp.times[1]}</span>
              </div>
            </div>
            
            <div className="card-actions">
              <button 
                className="action-btn learn-more"
                onClick={() => handleLearnMore(exp)}
              >
                <FaInfoCircle className="action-icon" />
                Learn more
              </button>
              <button className="action-btn buy">
                <FaShoppingCart className="action-icon" />
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCards;