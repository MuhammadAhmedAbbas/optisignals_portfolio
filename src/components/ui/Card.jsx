import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Card({ children, className = '', hover = true, delay = 0, interactiveGlow = false, to }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Use CSS variables for hardware-accelerated updates without React re-renders
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      as={to ? Link : 'div'}
      to={to}
      onMouseMove={interactiveGlow ? handleMouseMove : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-[2rem] p-8 relative overflow-hidden group gpu ${hover ? 'glass-hover cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 transition-all duration-300' : ''} ${className}`}
    >
      {/* Interactive Glow Effect Layer using CSS Variables */}
      {interactiveGlow && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 z-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.08), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}

