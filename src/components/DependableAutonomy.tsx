import React from 'react';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

export const DependableAutonomy: React.FC = () => {
  const points = [
    '— ARCHITECT FOR RELIABILITY.',
    '— EXPLAIN EVERY DECISION.',
    '— BUILD FOR REAL-WORLD UTILITY.',
  ];

  return (
    <section className="relative w-full bg-[#0700ff] text-white py-24 sm:py-32 overflow-hidden min-h-[640px] flex items-center">
      {/* Halftone Arc / Vortex Image across the full background with right-heavy alignment */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="https://framerusercontent.com/images/FcaoF9uIayDlJXIXgnjb7h8GY.png?width=2944&height=1394"
          alt="Halftone particle wave curvature"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-8">
        <div className="max-w-[700px]">
          <MotionReveal direction="up" distance={25}>
            {/* Pre-heading Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-white mb-6">
              <span className="font-bold">+</span>
              <span className="uppercase tracking-[0.08em]">ENGINEERING DISCIPLINE</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-instrument text-[54px] sm:text-[72px] md:text-[88px] leading-[0.98] tracking-[-0.025em] font-normal text-white mb-8">
              Software built without the black box.
            </h2>

            {/* Description */}
            <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-white/85 mb-14 max-w-[560px]">
              Every architectural decision matters: rigorous input validation, explainable AI risk indicators, offline-first reliability, and clean component systems.
            </p>
          </MotionReveal>

          {/* 3 Action Statements with Stagger */}
          <div className="space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.12,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="font-serif-instrument text-[24px] sm:text-[28px] md:text-[34px] tracking-tight font-normal text-white"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
