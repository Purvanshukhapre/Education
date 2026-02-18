import React from 'react';
import { Search } from 'lucide-react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300';
  
  if (icon) {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon === 'search' && <Search className="h-5 w-5 text-text-muted" />}
        </div>
        <input
          type={type}
          className={`${baseClasses} pl-10 ${className}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;