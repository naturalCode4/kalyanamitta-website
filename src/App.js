import React from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GoToTopPage from './components/GoToTopPage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FreedomDojo from './pages/FreedomDojo';
import About from './pages/About';
import EnergyWork from './pages/EnergyWork';
import SpiritualPractice from './pages/SpiritualPractice';
import EFT from './pages/EFT';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Devportfolio from './pages/Devportfolio';
import AlignmentForm from './pages/AlignmentForm';
import JEWS from './pages/JEWS';
import ThePractitionersCompanion from './pages/ThePractitionersCompanion';
import GYPBSTEIP from './pages/GYPBSTEIP';

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/devportfolio';

  return (
    <div className="App">
      <GoToTopPage />
      {!hideHeader && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/freedom-dojo" element={<FreedomDojo />} />
          {/* Old program name/URL — redirect so existing links/bookmarks keep working */}
          <Route path="/tap-into-freedom" element={<Navigate to="/freedom-dojo" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/energy-work" element={<EnergyWork />} />
          <Route path="/spiritual-practice" element={<SpiritualPractice />} />
          <Route path="/EFT-emotional-freedom-techniques" element={<EFT />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devportfolio" element={<Devportfolio />} />
          <Route path="/alignment-form" element={<AlignmentForm />} />
          <Route path="/jews" element={<JEWS />} />
          <Route path="/the-practitioners-companion" element={<ThePractitionersCompanion />} />
          <Route path="/gypbsteip" element={<GYPBSTEIP />} />
          <Route path="/gypabteip" element={<Navigate to="/gypbsteip" replace />} />
          <Route path="/raise-yourself-up" element={<Navigate to="/gypbsteip" replace />} />
          <Route path="/coming-home-to-yourself" element={<Navigate to="/gypbsteip" replace />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;