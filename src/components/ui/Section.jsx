import React from 'react';
import { motion } from 'framer-motion';

export default function Section({
  children,
  id,
  className = '',
  title,
  subtitle,
  darker = false,
  align = 'left'
}) {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 md:px-12 lg:px-24 ${darker ? 'bg-black/20' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-16 ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'}`}
          >
            {title && <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h2>}
            {subtitle && <p className={`text-lg text-slate-400 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
