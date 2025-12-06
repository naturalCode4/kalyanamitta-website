import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Offerings from './pages/Offerings';
import EnergyWork from './pages/EnergyWork';
import LifeCoaching from './pages/LifeCoaching';
import SpiritualPractice from './pages/SpiritualPractice';
import EmotionalProcessing from './pages/EmotionalProcessing';
import Rates from './pages/Rates';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/energy-work" element={<EnergyWork />} />
            <Route path="/life-coaching" element={<LifeCoaching />} />
            <Route path="/spiritual-practice" element={<SpiritualPractice />} />
            <Route path="/emotional-processing" element={<EmotionalProcessing />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
