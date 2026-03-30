import React from 'react';
import { Link } from 'react-router-dom';
import { Code, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">O</span>
              </div>
              OptiSignal
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              We design and develop high-performance websites, mobile apps, and secure digital solutions for growing businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white glass-hover"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white glass-hover"><Briefcase size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white glass-hover"><Code size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Shopify & E-Commerce</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} OptiSignal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
