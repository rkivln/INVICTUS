import React from 'react';

interface CornerCrossBoxProps {
  children?: React.ReactNode;
  className?: string;
  crossColor?: string; // default blue '#0700ff'
  borderColor?: string; // default 'rgba(7, 0, 255, 0.4)'
  dashed?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  as?: keyof JSX.IntrinsicElements;
}

export const CornerCrossBox: React.FC<CornerCrossBoxProps> = ({
  children,
  className = '',
  crossColor = '#0700ff',
  borderColor = 'rgba(7, 0, 255, 0.4)',
  dashed = true,
  style = {},
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderWidth: '1px',
        borderStyle: dashed ? 'dashed' : 'solid',
        borderColor: borderColor,
        ...style,
      }}
      className={`relative ${className}`}
    >
      {/* Top Left Cross */}
      <div
        className="pointer-events-none absolute -top-[3px] -left-[3px] w-[5px] h-[5px]"
        aria-hidden="true"
      >
        <span
          className="absolute top-[2px] left-0 w-[5px] h-[1px]"
          style={{ backgroundColor: crossColor }}
        />
        <span
          className="absolute top-0 left-[2px] w-[1px] h-[5px]"
          style={{ backgroundColor: crossColor }}
        />
      </div>

      {/* Top Right Cross */}
      <div
        className="pointer-events-none absolute -top-[3px] -right-[3px] w-[5px] h-[5px]"
        aria-hidden="true"
      >
        <span
          className="absolute top-[2px] left-0 w-[5px] h-[1px]"
          style={{ backgroundColor: crossColor }}
        />
        <span
          className="absolute top-0 left-[2px] w-[1px] h-[5px]"
          style={{ backgroundColor: crossColor }}
        />
      </div>

      {/* Bottom Left Cross */}
      <div
        className="pointer-events-none absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px]"
        aria-hidden="true"
      >
        <span
          className="absolute top-[2px] left-0 w-[5px] h-[1px]"
          style={{ backgroundColor: crossColor }}
        />
        <span
          className="absolute top-0 left-[2px] w-[1px] h-[5px]"
          style={{ backgroundColor: crossColor }}
        />
      </div>

      {/* Bottom Right Cross */}
      <div
        className="pointer-events-none absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px]"
        aria-hidden="true"
      >
        <span
          className="absolute top-[2px] left-0 w-[5px] h-[1px]"
          style={{ backgroundColor: crossColor }}
        />
        <span
          className="absolute top-0 left-[2px] w-[1px] h-[5px]"
          style={{ backgroundColor: crossColor }}
        />
      </div>

      {children}
    </div>
  );
};
