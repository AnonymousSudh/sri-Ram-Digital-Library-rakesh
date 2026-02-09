
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Membership from './pages/Membership.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-background-dark">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Floating Action Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 border border-white/10"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      </div>
    </HashRouter>
  );
};

export default App;
