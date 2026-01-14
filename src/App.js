import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoToTopPage from './components/GoToTopPage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EnergyWork from './pages/EnergyWork';
import SpiritualPractice from './pages/SpiritualPractice';
import EFT from './pages/EFT';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Devportfolio from './pages/Devportfolio';

function App() {
  return (
    <Router>
      <GoToTopPage />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/energy-work" element={<EnergyWork />} />
            <Route path="/spiritual-practice" element={<SpiritualPractice />} />
            <Route path="/EFT-emotional-freedom-techniques" element={<EFT />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devportfolio" element={<Devportfolio />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
