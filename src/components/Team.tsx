import React from 'react';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';
import smvecCleanBuildingImg from '../assets/images/smvec_clean_building_grain_1792980554291.jpg';
import shieldImg from '../assets/images/roman_shield_grain_1792980006647.jpg';
import forumImg from '../assets/images/roman_forum_grain_1792980026977.jpg';

export const Team: React.FC = () => {
  const milestones = [
    {
      title: 'SMVEC',
      role: '+ B.Tech CSEBS • Class of 2029',
      description:
        'Computer Science and Engineering & Business Systems undergraduate at Sri Manakula Vinayagar Engineering College, combining computer science fundamentals with strategic business thinking.',
      image: smvecCleanBuildingImg,
      alt: 'Sri Manakula Vinayagar Engineering College building architecture in text-free cobalt blue halftone grain style.',
    },
    {
      title: 'CyberGuard',
      role: '+ SIH Internal Selection • Top 15',
      description:
        'Led technical innovation for Smart India Hackathon internal selection with PRAMAANX, architecting AI biometric document screening, ELA tampering analysis, and risk scoring pipelines.',
      image: shieldImg,
      alt: 'Classical Roman statue of an armored soldier with a legionary shield in cobalt blue film grain.',
    },
    {
      title: 'EVORIGEN',
      role: '+ Ignite Cohort • Venture Creation',
      description:
        'Startup venture focused on the digital preservation of cultural heritage and legacy knowledge, developed through customer discovery and problem definition in the Ignite Full Cohort.',
      image: forumImg,
      alt: 'Classical Roman Forum marble columns and triumphal archway in cobalt blue stipple texture.',
    },
  ];

  return (
    <section id="education" className="relative w-full pt-20 pb-28 border-t border-dashed border-[#0700ff]/40 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <MotionReveal direction="up" distance={25}>
          {/* Pre-heading Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
            <span className="text-[#0700ff] font-bold">+</span>
            <span className="uppercase tracking-[0.08em]">EDUCATION & VENTURE MILESTONES</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-instrument text-[54px] sm:text-[72px] md:text-[88px] leading-[0.98] tracking-[-0.025em] font-normal text-black mb-6">
            Milestones & Foundation.
          </h2>

          {/* Subtitle */}
          <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-black/70 mb-16 max-w-[660px]">
            Academic foundation at Sri Manakula Vinayagar Engineering College coupled with hackathon leadership and startup venture creation.
          </p>
        </MotionReveal>

        {/* 3 Milestone Cards Grid without hover lift or image zoom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="flex flex-col bg-[#0700ff] border-[10px] border-[#0700ff] overflow-hidden"
            >
              {/* Halftone Image Container */}
              <div className="w-full bg-[#f5f5f5] aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center select-none"
                />
              </div>

              {/* Bottom Information Block */}
              <div className="bg-[#0700ff] text-white p-6 sm:p-7 flex flex-col justify-end flex-1">
                <h3 className="font-serif-instrument text-[38px] sm:text-[44px] leading-[1.0] font-normal text-white mb-2">
                  {item.title}
                </h3>
                <div className="font-mono-geist text-[12px] sm:text-[13px] text-white/90 uppercase tracking-[0.06em] mb-3 font-medium">
                  {item.role}
                </div>
                <p className="font-mono-geist text-[12px] text-white/80 leading-[1.55]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
