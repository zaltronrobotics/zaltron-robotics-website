import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Styling
import './styles/main.css';

// Layout & UI Components
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { AskZaltronModal } from './components/ui/AskZaltronModal';

// Pages
import { Home } from './pages/Home';
import { Robots } from './pages/Robots';
import { ZaltronV1 } from './pages/ZaltronV1';
import { RobotDetail } from './pages/RobotDetail';
import { Technology } from './pages/Technology';
import { Research } from './pages/Research';
import { Solutions } from './pages/Solutions';
import { Roadmap } from './pages/Roadmap';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [askOpen, setAskOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Global Navigation */}
      <Navbar 
        onOpenAsk={() => setAskOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Global Mobile Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenAsk={() => setAskOpen(true)}
      />

      {/* Global Interactive Ask ZALTRON Knowledge Console */}
      <AskZaltronModal 
        isOpen={askOpen}
        onClose={() => setAskOpen(false)}
      />

      {/* Application Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Product Catalog & System Routes */}
        <Route path="/robots" element={<Robots />} />
        <Route path="/robots/zaltron-v1" element={<ZaltronV1 />} />
        <Route path="/robots/v1" element={<ZaltronV1 />} />
        <Route path="/robots/:slug" element={<RobotDetail />} />

        {/* Systems, Research & Solutions */}
        <Route path="/technology" element={<Technology />} />
        <Route path="/research" element={<Research />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/roadmap" element={<Roadmap />} />
        
        {/* Company & Editorial */}
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/blog" element={<Journal />} />
        <Route path="/projects" element={<Research />} />
        
        {/* Contact & Legal */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal type="privacy" />} />
        <Route path="/terms" element={<Legal type="terms" />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Multi-Column Footer */}
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
