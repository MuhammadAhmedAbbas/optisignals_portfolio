import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  onClick,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020617]";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30",
    secondary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/30",
    outline: "border border-white/20 text-slate-200 hover:bg-white/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
