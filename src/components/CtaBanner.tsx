import React from 'react';
import { SlidingButton } from './SlidingButton';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full pt-24 pb-20 overflow-hidden bg-[#f5f5f5] border-t border-dashed border-[#0700ff]/40">
      {/* Right side Halftone Stairway Image */}
      <div className="absolute right-0 bottom-0 top-0 w-[55%] md:w-[50%] lg:w-[48%] max-w-[850px] pointer-events-none select-none flex items-end justify-end">
        <img
          src="https://framerusercontent.com/images/Gin5w9Fy7PmtsSiAcRhgvL7X3T4.png?width=1672&height=941"
          alt="Halftone classical ascending staircase"
          className="w-full h-auto max-h-full object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="max-w-[700px]">
          {/* Pre-heading Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
            <span className="text-[#0700ff] font-bold">+</span>
            <span className="uppercase tracking-[0.08em]">INITIATE CONTACT</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-instrument text-[60px] sm:text-[80px] md:text-[96px] leading-[0.92] tracking-[-0.03em] font-normal text-black mb-8">
            Put ideas<br />
            into motion.
          </h2>

          {/* Subtitle */}
          <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-black/70 mb-10 max-w-[560px]">
            Open for software engineering opportunities, open-source collaborations,
            and high-impact digital ventures.
          </p>

          {/* Button */}
          <div>
            <SlidingButton
              label1="Get in Touch"
              label2="gokulan.rkivln@gmail.com"
              onClick={onOpenContact}
              className="h-[45px] px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
