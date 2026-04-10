import React from 'react';
import { ExternalLink, CheckCircle, Activity, ShieldCheck, MapPin, Globe, CreditCard, Home, Trophy, Play, Target, Gauge } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Import Lab Linker screenshots
import lab1 from '../assets/lablinker/Screenshot 2026-03-30 091231.png';
import lab2 from '../assets/lablinker/Screenshot 2026-03-30 091250.png';
import lab3 from '../assets/lablinker/Screenshot 2026-03-30 091304.png';

// Import StaySpot screenshots
import stay1 from '../assets/stayspot/Screenshot 2026-03-30 092321.png';
import stay2 from '../assets/stayspot/Screenshot 2026-03-30 092338.png';

// Import ZeroToPro screenshots
import zero1 from '../assets/zerotopro/Screenshot 2026-03-30 094730.png';
import zero2 from '../assets/zerotopro/Screenshot 2026-03-30 094741.png';
import zero3 from '../assets/zerotopro/Screenshot 2026-03-30 094753.png';
import zero4 from '../assets/zerotopro/Screenshot 2026-03-30 094800.png';

export default function Portfolio() {
  return (
    <div className="pt-24 min-h-screen">
      
      {/* Featured Startup Section */}
      <Section title="Some of our Projects" subtitle="Our most ambitious and revolutionary digital products." darker>
        
        {/* Lab Linker Card */}
        <Card className="p-8 md:p-12 mb-16 glass overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/10">
          <div className="flex flex-col xl:flex-row gap-12 items-center">
            
            {/* Left side: Images */}
            <div className="xl:w-1/2 w-full space-y-4">
              <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={lab1} alt="Lab Linker Patient Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative group border border-white/10 shadow-lg">
                   <img src={lab2} alt="Lab Linker Lab Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative group border border-white/10 shadow-lg">
                   <img src={lab3} alt="Lab Linker Admin Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Right side: Explanation */}
            <div className="xl:w-1/2 w-full flex flex-col justify-center">
              <span className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-3 block">Internal Startup Idea</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight break-words">Lab Linker</h3>
              
              <div className="space-y-5 text-slate-400 text-lg leading-relaxed mb-10">
                <p>
                  <strong className="text-slate-200 block mb-1">The Idea</strong>
                  A digital bridge connecting medical labs and patients in Pakistan. Lab Linker centralizes patient reports into a lifetime digital record and digitizes lab operations, eliminating lost paper reports entirely.
                </p>
                <p>
                  <strong className="text-slate-200 block mb-1">The Solution & Agentic Mode</strong>
                  Through distinct portals for patients, labs, and admins, the platform enables home sample bookings and pending result tracking. What makes it unique is the <strong>AI-Powered Agent</strong>—a smart assistant that explains medical terms, answers health queries (e.g., "Do I need to fast for this test?"), and predicts busy lab hours to optimize workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3"><CheckCircle className="text-emerald-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Lifetime Health Records</span></div>
                <div className="flex items-center gap-3"><Activity className="text-blue-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">AI-Powered Assistant</span></div>
                <div className="flex items-center gap-3"><MapPin className="text-orange-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Home Sample Booking</span></div>
                <div className="flex items-center gap-3"><ShieldCheck className="text-purple-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Smarter Lab Workflows</span></div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://lab-on-phone.infinityfreeapp.com/?i=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:-translate-y-1 text-white font-bold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  View Live Prototype
                  <ExternalLink size={20} className="ml-1" />
                </a>
              </div>

            </div>
          </div>
        </Card>

        {/* StaySpot Card */}
        <Card className="p-8 md:p-12 mb-16 glass overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/10">
          <div className="flex flex-col xl:flex-row gap-12 items-center">
            
            {/* Left side: Explanation (Reversed for visual rhythm) */}
            <div className="xl:w-1/2 w-full flex flex-col justify-center order-2 xl:order-1">
              <span className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-3 block">Platform Engineering</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight break-words">StaySpot</h3>
              
              <div className="space-y-5 text-slate-400 text-lg leading-relaxed mb-10">
                <p>
                  <strong className="text-slate-200 block mb-1">The Idea</strong>
                  A seamless property booking and hosting platform built for the modern traveler. Whether you're looking for a cozy cottage in the mountains or a luxury flat in the city, StaySpot makes finding your next destination effortless.
                </p>
                <p>
                  <strong className="text-slate-200 block mb-1">The Engineering Solution</strong>
                  We engineered a highly scalable architecture mirroring the core capabilities of Airbnb. It features an intuitive, hyper-fast search engine, dynamic listing filters, secure payment gateways, and a comprehensive host dashboard to manage properties and reservations in real-time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3"><Globe className="text-blue-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Global Booking Engine</span></div>
                <div className="flex items-center gap-3"><Home className="text-emerald-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Host Management Dashboard</span></div>
                <div className="flex items-center gap-3"><MapPin className="text-orange-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Interactive Map Search</span></div>
                <div className="flex items-center gap-3"><CreditCard className="text-rose-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Secure Global Payments</span></div>
              </div>
            </div>

            {/* Right side: Images */}
            <div className="xl:w-1/2 w-full space-y-4 order-1 xl:order-2">
              <div className="aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={stay1} alt="StaySpot Homepage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="aspect-[21/9] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={stay2} alt="StaySpot Listings Browser" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

          </div>
        </Card>

        {/* ZeroToPro Card */}
        <Card className="p-8 md:p-12 mb-8 glass overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-900/10">
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            
            {/* Left side: Images */}
            <div className="xl:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={zero1} alt="ZeroToPro Home Screen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={zero2} alt="ZeroToPro AI Coach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={zero3} alt="ZeroToPro Tutorials" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
                 <img src={zero4} alt="ZeroToPro Progress Report" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

            {/* Right side: Explanation */}
            <div className="xl:w-1/2 w-full flex flex-col">
              <span className="text-emerald-400 text-sm font-bold tracking-wider uppercase mb-3 block">Mobile App Engineering</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight break-words">ZeroToPro</h3>
              
              <div className="space-y-5 text-slate-400 text-lg leading-relaxed mb-10">
                <p>
                  <strong className="text-slate-200 block mb-1">The Idea</strong>
                  Your personal football academy in your pocket. ZeroToPro is an AI-powered football assistant app designed to take players from grassroots to elite levels through personalized coaching and professional-grade training.
                </p>
                <p>
                  <strong className="text-slate-200 block mb-1">The Engineering Solution</strong>
                  We built an intelligent mobile platform featuring a real-time <strong>AI Coach</strong> that analyzes your performance, high-definition training tutorials from professional coaches, and comprehensive progress reports that track every dribble, pass, and goal.
                </p>
                <p>
                  <strong className="text-slate-200 block mb-1">The Training Ecosystem</strong>
                  Beyond just drills, the platform fosters a competitive environment with global leaderboards, social challenges, and a <strong>Smart Camera</strong> integration that uses computer vision to correct your posture and technique in real-time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3"><Trophy className="text-emerald-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Elite AI Coaching</span></div>
                <div className="flex items-center gap-3"><Play className="text-blue-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">500+ HD Drills</span></div>
                <div className="flex items-center gap-3"><Gauge className="text-orange-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Computer Vision AI</span></div>
                <div className="flex items-center gap-3"><Target className="text-purple-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Personalized Goals</span></div>
                <div className="flex items-center gap-3"><Globe className="text-sky-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Global Leaderboards</span></div>
                <div className="flex items-center gap-3"><ShieldCheck className="text-indigo-400 shrink-0" size={22} /><span className="text-slate-300 font-medium tracking-wide">Offline Training Mode</span></div>
              </div>
            </div>

          </div>
        </Card>
        
        <div className="flex justify-center mt-12 mb-8">
          <Button to="/contact" variant="primary" className="px-10 py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
