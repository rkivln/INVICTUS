import React from 'react';
import { motion } from 'framer-motion';
import { CornerCrossBox } from './CornerCrossBox';
import { MotionReveal } from './MotionReveal';

export const AutonomousEra: React.FC = () => {
  return (
    <section id="philosophy" className="relative w-full py-28 overflow-hidden bg-[#f5f5f5]">
      {/* Side particle halftone backgrounds */}
      <div className="absolute left-0 top-0 bottom-0 w-[240px] pointer-events-none opacity-20 overflow-hidden hidden md:block">
        <img
          src="https://framerusercontent.com/images/P1GhJhxUrWiZsU9jGn1L1ovees0.png?width=349&height=941"
          alt=""
          className="w-full h-full object-cover object-left"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-[240px] pointer-events-none opacity-20 overflow-hidden hidden md:block">
        <img
          src="https://framerusercontent.com/images/zDuqYBwiwIZtairk3UsgSYAUydU.png?width=349&height=941"
          alt=""
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <MotionReveal direction="up" distance={25}>
          {/* Pre-heading Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
            <span className="text-[#0700ff] font-bold">+</span>
            <span className="uppercase tracking-[0.08em]">THE DEVELOPER ETHOS</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-instrument text-[48px] sm:text-[64px] md:text-[80px] leading-[1.0] tracking-[-0.025em] font-normal text-black mb-16 max-w-[950px]">
            The next generation of software will not wait for instructions.
          </h2>
        </MotionReveal>

        {/* Big Cobalt Blue Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full max-w-[720px] shadow-2xl relative"
        >
          <div className="bg-[#0700ff] p-8 sm:p-12 text-white relative">
            <CornerCrossBox
              dashed={true}
              borderColor="rgba(255, 255, 255, 0.4)"
              crossColor="#ffffff"
              className="p-8 sm:p-10 flex flex-col items-center text-center"
            >
              {/* Double quotation glyph */}
              <div className="text-white text-5xl font-serif-instrument mb-6 leading-none select-none">
                ”
              </div>

              {/* Quote body in italic serif */}
              <p className="font-serif-instrument italic text-[24px] sm:text-[30px] md:text-[34px] leading-[1.25] text-white font-normal mb-8 max-w-[560px]">
                I don't just write code—I architect systems. From offline-first biometric
                fraud screening to geolocation community platforms, software should be
                observable, resilient, and built to solve genuine problems.
              </p>

              {/* Author */}
              <div className="font-mono-geist text-sm sm:text-base tracking-[0.1em] text-white/90">
                — GOKULAN.
              </div>
            </CornerCrossBox>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
