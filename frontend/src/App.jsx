import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Chatbot from './pages/Chatbot'; // fix typo: chatbot -> Chatbot
import Appointment from './pages/Appointment'; // fix typo: Appoinment -> Appointment
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments'; // fix typo: MyAppoinments -> MyAppointments
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 // fix typo: chatbot -> Chatbot
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatbot" element={<Chatbot />} /> {/* fixed typo */}
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} /> {/* fixed spelling */}
        <Route path="/appointment/:docId" element={<Appointment />} /> {/* fixed spelling */}
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
