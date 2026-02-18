import React from 'react';
import { Zap } from 'lucide-react';

export const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignment[align]} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center bg-[#F2F4F7] rounded-full px-4 py-1.5 mb-4 border-none">
          <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
            <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
          </div>
          <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none uppercase">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-[42px] font-semibold text-[#162726] leading-tight mt-2">
        {title}
      </h2>
    </div>
  );
};

