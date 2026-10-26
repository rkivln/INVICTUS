import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CornerCrossBoxProps {
  children: React.ReactNode;
  className?: string;
  dashed?: boolean;
  borderColor?: string;
  crossColor?: string;
  crossSize?: number;
  hoverEffect?: boolean;
}

export const CornerCrossBox: React.FC<CornerCrossBoxProps> = ({
  children,
  className = '',
  dashed = true,
  borderColor = 'rgba(7, 0, 255, 0.4)',
  crossColor = '#0700ff',
  crossSize = 8,
  hoverEffect = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderStyle: React.CSSProperties = {
    borderWidth: '1px',
    borderStyle: dashed ? 'dashed' : 'solid',
    borderColor: isHovered && hoverEffect ? '#0700ff' : borderColor,
    transition: 'border-color 0.25s ease-out',
  };

  const renderCornerCross = (position: string) => {
    let positionClasses = '';
    switch (position) {
      case 'top-left':
        positionClasses = '-top-[4px] -left-[4px]';
        break;
      case 'top-right':
        positionClasses = '-top-[4px] -right-[4px]';
        break;
      case 'bottom-left':
        positionClasses = '-bottom-[4px] -left-[4px]';
        break;
      case 'bottom-right':
        positionClasses = '-bottom-[4px] -right-[4px]';
        break;
    }

    return (
      <motion.div
        aria-hidden="true"
        className={`absolute ${positionClasses} pointer-events-none z-20 flex items-center justify-center`}
        style={{ width: `${crossSize}px`, height: `${crossSize}px` }}
        animate={{
          rotate: isHovered && hoverEffect ? 90 : 0,
          scale: isHovered && hoverEffect ? 1.15 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Horizontal bar */}
        <div
          className="absolute bg-current"
          style={{
            width: '100%',
            height: '1.5px',
            backgroundColor: isHovered && hoverEffect ? '#0700ff' : crossColor,
          }}
        />
        {/* Vertical bar */}
        <div
          className="absolute bg-current"
          style={{
            height: '100%',
            width: '1.5px',
            backgroundColor: isHovered && hoverEffect ? '#0700ff' : crossColor,
          }}
        />
      </motion.div>
    );
  };

  return (
    <div
      className={`relative ${className}`}
      style={borderStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderCornerCross('top-left')}
      {renderCornerCross('top-right')}
      {renderCornerCross('bottom-left')}
      {renderCornerCross('bottom-right')}
      {children}
    </div>
  );
};
