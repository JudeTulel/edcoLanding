import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Service from './Pages/Services';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Team from './Pages/Team';

import './App.css';
import Testimonies from './Pages/Testimonies';

Modal.setAppElement('#root'); // Required for accessibility

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:serviceId" element={<Service />} />
          <Route path="/testimony" element={<Testimonies />} />
          <Route path="/team" element={<Team />} />
          
        </Routes>
        <Footer />
        
      </BrowserRouter>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        className="Toastify__toast-container--center"
        toastClassName="Toastify__toast--custom"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
