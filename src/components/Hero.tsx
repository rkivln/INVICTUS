import React from 'react';
import { SlidingButton } from './SlidingButton';

interface HeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreProjects }) => {
  return (
    <section className="relative w-full overflow-hidden min-h-[640px] sm:min-h-[720px] lg:min-h-[830px] flex items-center">
      {/* Halftone Angel Sculpture Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="https://framerusercontent.com/images/0w0qwEFKa288EqQq2SBotntUpbE.png?width=1672&height=941"
          alt="A halftone angel sculpture representing intelligent systems and purposeful engineering."
          className="w-full h-full object-cover object-[88%_top] md:object-right-top"
        />
        {/* Subtle mobile readability gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/70 to-transparent md:hidden pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-8 py-10 sm:py-16 flex flex-col justify-center">
        {/* Monospace Pre-heading Tag */}
        <div className="inline-flex items-start sm:items-center gap-1.5 text-xs sm:text-xs md:text-sm font-mono-geist font-medium text-black mb-6 sm:mb-8">
          <span className="text-[#0700ff] font-bold">+</span>
          <span className="uppercase tracking-[0.08em] max-w-[280px] sm:max-w-none">
            OPEN SOURCE DEVELOPER & FULL STACK ENGINEER
          </span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="font-serif-instrument text-[52px] sm:text-[80px] md:text-[110px] leading-[0.91] tracking-[-2px] sm:tracking-[-3px] font-normal text-black mb-6 sm:mb-8 max-w-[700px]">
          Engineering,<br />
          built with intent.
        </h1>

        {/* Monospace Subtitle */}
        <p className="font-mono-geist text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] sm:leading-[28px] text-black/75 max-w-[600px] mb-8 sm:mb-10">
         Intersection of software engineering, generative AI,
          cybersecurity, and thoughtful interface design.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <SlidingButton
            label1="View Projects"
            label2="Explore Work"
            onClick={onExploreProjects}
            className="h-[44px] px-5 sm:px-6"
          />
          <SlidingButton
            label1="Contact Me"
            label2="Say Hello"
            variant="secondary"
            onClick={onOpenContact}
            className="h-[44px]"
          />
        </div>
      </div>
    </section>
  );
};
