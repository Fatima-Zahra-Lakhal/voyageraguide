import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componnents/navbar';
import BookingPage from './componnents/BookingPage';
import TicketPage from './componnents/TicketPage';
import PaymentPage from './componnents/Payement';
import NavbarHome from './componnents/NvbarHome';
import BottomNav from './componnents/BottomNav';
import ProfileHeader from './componnents/ProfileHeader';
import ExperienceCards from './componnents/ExprienceCards';
import ExperienceDetails from './componnents/ExperienceDetails';
import Facilities from './componnents/Facilities';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<ProfileHeader />} />
        <Route path="/booking" element={<BookingPage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/navbarhome" element={<NavbarHome/>} />
          <Route path="/navbabottom" element={<BottomNav/>} />
          <Route path="/home" element={<ProfileHeader/>} />
          <Route path="/experiences" element={<ExperienceCards/>} />
            
        <Route path="/experience/:id" element={<ExperienceDetails />} />
        <Route path="/facitilies" element={<Facilities />} />
          
      </Routes>
    </Router>
  );
}

export default App;
