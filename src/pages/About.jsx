import React from 'react';
import { motion } from 'framer-motion';
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import bgImage from '../assets/background.jpg';
import ahmedImg from '../assets/founders/ahmed-profile.png';
import abdullahImg from '../assets/founders/abdullah-profile.png';

export default function About() {
  const team = [
    { 
      name: 'Abdullah Arif', 
      role: 'CEO', 
      bio: 'Digital marketer helping businesses grow through innovative strategies and data-driven results.',
      image: abdullahImg,
      linkedin: 'https://www.linkedin.com/in/abdullah-arif-a13502202/'
    },
    { 
      name: 'Muhammad Ahmed Abbas', 
      role: 'Co-Founder & Full Stack Developer', 
      bio: 'Full-Stack Developer specializing in building scalable, high-performance web applications and intelligent digital ecosystems with relentless precision.',
      image: ahmedImg,
      linkedin: 'https://www.linkedin.com/in/ahmed-abbas-a4092a384/'
    }
  ];

  return (
    <div 
      className="pt-24 min-h-screen relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020617]/80 pointer-events-none" />

      <Section className="relative z-10 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 mb-16">
          
          {/* Left Side: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">About <br className="hidden md:block" />OptiSignals</h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
              We are a modern digital agency driven by engineering excellence and relentless precision.
            </p>
          </motion.div>

          {/* Right Side: Detailed Glass Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 glass rounded-[3rem] p-10 md:p-14 text-left text-lg text-slate-300 leading-relaxed shadow-2xl border-white/10"
          >
            <p className="mb-8">
              As a new-generation engineering team, we combine boundless creativity with technical expertise to deliver high-performance digital solutions tailored to complex business needs.
            </p>
            <p>
              We focus heavily on performance, robust scalability, and measurable outcomes—building intelligent platforms that not only look breathtaking but execute flawlessly under immense scale.
            </p>
          </motion.div>

        </div>
      </Section>

      <Section title="Meet the Founders" className="relative z-10" darker>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <Card key={idx} delay={idx * 0.2} className="text-left flex flex-col items-start h-full">
              <div className="w-full h-[400px] bg-slate-800/50 rounded-2xl mb-8 overflow-hidden relative group border border-white/10 shadow-lg">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-500 font-medium">IMAGE PREVIEW</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
              </div>
              <div className="flex flex-row items-center justify-between w-full mb-3 gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight break-words">{member.name}</h3>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 shrink-0 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white glass-hover transition-colors"
                    aria-label={`LinkedIn Profile of ${member.name}`}
                  >
                    <LinkedinIcon />
                  </a>
                )}
              </div>
              <p className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-5">{member.role}</p>
              <p className="text-slate-400 text-lg leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
