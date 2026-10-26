import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        animate={{ y: isHovered ? -18 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-[18px] flex items-center justify-center font-mono-geist text-[13px] font-medium leading-[18px] whitespace-nowrap text-center">
          {label1}
        </div>
        <div className="h-[18px] flex items-center justify-center font-mono-geist text-[13px] font-medium leading-[18px] whitespace-nowrap text-center text-[#0700ff] group-hover:text-inherit">
          {label2}
        </div>
      </motion.div>
    </div>
  );

  if (variant === 'secondary') {
    return (
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.97 }}
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
      </motion.button>
    );
  }

  // Primary: solid black button
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      aria-label={ariaLabel || label1}
      className={`group relative cursor-pointer inline-flex items-center justify-center px-6 h-[45px] bg-black text-white hover:bg-[#111111] transition-all duration-200 ${className}`}
    >
      {innerContent}
    </motion.button>
  );
};
