import React from 'react';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

export const Sequence: React.FC = () => {
  const phases = [
    {
      number: 'Phase I',
      title: 'Problem & Threat Modeling',
      description:
        'Define user workflows, expected outcomes, security threat vectors, offline requirements, and operational limits of the system.',
    },
    {
      number: 'Phase II',
      title: 'Architecture & Prototype',
      description:
        'Connect the appropriate models, web frameworks, local embeddings, databases, and automated validation tests.',
    },
    {
      number: 'Phase III',
      title: 'Deployment & Validation',
      description:
        'Deploy in controlled environments, monitor reliability across edge cases, polish every responsive breakpoint, and scale with confidence.',
    },
  ];

  return (
    <section id="process" className="relative w-full py-28 overflow-hidden bg-[#f5f5f5]">
      {/* Left Halftone Grid Border Strip */}
      <div className="absolute left-0 top-0 bottom-0 w-[60px] sm:w-[90px] md:w-[130px] pointer-events-none select-none overflow-hidden">
        <img
          src="https://framerusercontent.com/images/jlmiucTNtCRDOX8ajUfLn3hFc3Y.png?width=1648&height=2944"
          alt=""
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Right Halftone Grid Border Strip */}
      <div className="absolute right-0 top-0 bottom-0 w-[60px] sm:w-[90px] md:w-[130px] pointer-events-none select-none overflow-hidden">
        <img
          src="https://framerusercontent.com/images/jlmiucTNtCRDOX8ajUfLn3hFc3Y.png?width=1648&height=2944"
          alt=""
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <MotionReveal direction="up" distance={25}>
          {/* Pre-heading Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
            <span className="text-[#0700ff] font-bold">+</span>
            <span className="uppercase tracking-[0.08em]">PRODUCT METHODOLOGY</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-instrument text-[54px] sm:text-[72px] md:text-[88px] leading-[0.98] tracking-[-0.025em] font-normal text-black mb-6">
            The Sequence
          </h2>

          {/* Subtitle */}
          <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-black/70 mb-16 max-w-[640px]">
            Moving from early problem definition to dependable, production-ready software.
          </p>
        </MotionReveal>

        {/* Central Sequence Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full max-w-[640px] bg-[#f0f0f0]/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 p-10 sm:p-14 flex flex-col gap-12 text-center"
        >
          {phases.map((phase) => (
            <div key={phase.number} className="flex flex-col items-center">
              <h3 className="font-serif-instrument text-[38px] sm:text-[46px] leading-[1.0] font-normal text-black mb-2">
                {phase.number}
              </h3>
              <div className="font-mono-geist text-[12px] uppercase tracking-[0.1em] text-[#0700ff] font-medium mb-3">
                {phase.title}
              </div>
              <p className="font-mono-geist text-[14px] sm:text-[15px] leading-[1.65] text-black/75 max-w-[440px]">
                {phase.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
