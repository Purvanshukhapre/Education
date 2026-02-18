import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl shadow-card border border-border overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;