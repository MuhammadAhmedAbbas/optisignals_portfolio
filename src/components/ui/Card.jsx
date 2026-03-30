import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, delay = 0, interactiveGlow = false }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={interactiveGlow ? handleMouseMove : undefined}
      onMouseEnter={() => interactiveGlow && setIsHovered(true)}
      onMouseLeave={() => interactiveGlow && setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-[2rem] p-8 relative overflow-hidden group ${hover ? 'glass-hover cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 transition-all duration-300' : ''} ${className}`}
    >
      {/* Interactive Glow Effect Layer */}
      {interactiveGlow && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.12), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
