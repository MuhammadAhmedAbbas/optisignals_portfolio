import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, Globe, Clock, ChevronDown, Check } from 'lucide-react';
import Section from '../components/ui/Section';

export default function Contact() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    'Mobile App',
    'Web',
    'WordPress',
    'Shopify',
    'Full Stack',
    'UX/UI'
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#020617]">
      <Section className="!py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[55%] glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background decoration */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">softwares</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Share your requirements and we will build the right solution.
              </p>

              <form 
                action="https://formspree.io/f/mykbpdaw" 
                method="POST"
                className="space-y-6"
              >
                {/* Hidden inputs for selected categories to work with form submission */}
                {selectedCategories.map((cat, idx) => (
                  <input key={idx} type="hidden" name="category" value={cat} />
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Julian Montgomery"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="name@company.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Contact Number</label>
                  <div className="flex gap-0 group">
                    <div className="bg-white/5 border border-white/10 rounded-l-2xl px-4 flex items-center justify-center text-slate-200 border-r-0">
                      <span className="font-semibold text-sm">PK</span>
                      <span className="text-emerald-400 ml-2 text-sm font-bold">+92</span>
                      <ChevronDown size={14} className="ml-2 text-slate-500" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Enter your number"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-r-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Preferred Booking Date & Time</label>
                  <input 
                    type="datetime-local" 
                    name="booking_time" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all [color-scheme:dark]"
                  />
                  <p className="text-[10px] text-slate-500 ml-1 italic">* Business hours: Mon - Fri, 9:00 AM - 6:00 PM (PKT)</p>
                </div>

                {/* Multi-select Dropdown for Category */}
                <div className="space-y-2 text-left relative" ref={dropdownRef}>
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">How can we help? (Select multiple)</label>
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 min-h-[58px] cursor-pointer flex items-center justify-between group hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.length === 0 ? (
                        <span className="text-slate-600">Pick a category...</span>
                      ) : (
                        selectedCategories.map((cat, i) => (
                          <span key={i} className="text-xs font-bold px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                            {cat}
                          </span>
                        ))
                      )}
                    </div>
                    <ChevronDown size={18} className={`text-slate-500 group-hover:text-blue-400 transition-all ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 left-0 right-0 top-full mt-2 bg-[#020617] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
                      >
                        {categories.map((cat, i) => (
                          <div 
                            key={i}
                            onClick={() => toggleCategory(cat)}
                            className="px-6 py-3 hover:bg-white/5 flex items-center justify-between cursor-pointer transition-colors group"
                          >
                            <span className={`text-sm font-medium transition-colors ${selectedCategories.includes(cat) ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                              {cat}
                            </span>
                            {selectedCategories.includes(cat) && <Check size={16} className="text-blue-400" />}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Tell us more</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    placeholder="Briefly explain what you have in mind..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-900/20 transform transition-all active:scale-[0.98] mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Contact Info */}
          <div className="lg:w-[45%] flex flex-col justify-center text-left space-y-12">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Start your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">project</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Tell us what you need. We will get back to you shortly.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400/30 transition-all">
                  <Mail size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Drop an email</p>
                  <a href="mailto:optisignalspark@gmail.com" className="text-base lg:text-xl font-semibold text-white hover:text-blue-400 transition-colors break-all sm:break-normal">
                    optisignalspark@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/10 group-hover:border-emerald-400/30 transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/923208805439" target="_blank" rel="noreferrer" className="text-xl font-semibold text-white hover:text-emerald-400 transition-colors">
                    03208805439
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400/30 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Phone</p>
                  <a href="tel:03208805439" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                    03208805439
                  </a>
                </div>
              </motion.div>

              {/* Timing */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Timing</p>
                  <p className="text-xl font-semibold text-white">
                    Mon – Fri, 9:00 AM – 6:00 PM (PK)
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}

