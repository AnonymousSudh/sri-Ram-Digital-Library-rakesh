
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Membership', path: '/membership' },
    { name: 'Resources', path: '#resources' },
    { name: 'About', path: '#about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Shriram Digital <span className="text-primary">Library</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path.startsWith('#') ? '/' : link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path) 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-slate-300 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2 text-sm font-semibold hover:bg-white/5 rounded-lg transition-colors text-slate-300">
            Sign In
          </button>
          <Link 
            to="/membership"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-dark border-b border-white/10 px-6 py-8 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path.startsWith('#') ? '/' : link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
