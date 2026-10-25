import React, { useState } from 'react';
import { CornerCrossBox } from './CornerCrossBox';

interface SlidingButtonProps {
  label1: string;
  label2: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  ariaLabel?: string;
}

export const SlidingButton: React.FC<SlidingButtonProps> = ({
  label1,
  label2,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const innerContent = (
    <div className="relative overflow-hidden h-[18px] w-full block select-none">
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: isHovered ? 'translateY(-18px)' : 'translateY(0px)',
        }}
      >
        <div className="h-[18px] flex items-center justify-center font-mono-geist text-[13px] font-medium leading-[18px] whitespace-nowrap text-center">
          {label1}
        </div>
        <div className="h-[18px] flex items-center justify-center font-mono-geist text-[13px] font-medium leading-[18px] whitespace-nowrap text-center text-[#0700ff] group-hover:text-inherit">
          {label2}
        </div>
      </div>
    </div>
  );

  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel || label1}
        className={`group relative cursor-pointer inline-flex items-center justify-center ${className}`}
      >
        <CornerCrossBox
          dashed={true}
          borderColor="rgba(7, 0, 255, 0.4)"
          crossColor="#0700ff"
          className="px-6 py-2.5 h-[45px] flex items-center justify-center bg-transparent text-black transition-colors duration-200"
        >
          {innerContent}
        </CornerCrossBox>
      </button>
    );
  }

  // Primary: solid black button
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel || label1}
      className={`group relative cursor-pointer inline-flex items-center justify-center px-6 h-[45px] bg-black text-white hover:bg-[#111111] transition-all duration-200 active:scale-[0.99] ${className}`}
    >
      {innerContent}
    </button>
  );
};
