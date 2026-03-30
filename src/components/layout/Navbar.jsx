import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Projects', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-lg border-white/10 py-4 shadow-lg' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-lg font-bold">O</span>
          </div>
          OptiSignal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A] border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium ${location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
