import React from 'react';
import smvecImg from '../assets/images/smvec_education_halftone_1792935010581.jpg';
import cyberguardImg from '../assets/images/cyberguard_sih_halftone_1792935036180.jpg';
import evorigenImg from '../assets/images/evorigen_heritage_halftone_1792935057834.jpg';

export const Team: React.FC = () => {
  const milestones = [
    {
      title: 'SMVEC',
      role: '+ B.Tech CSEBS • Class of 2029',
      description:
        'Computer Science and Engineering & Business Systems undergraduate at Sri Manakula Vinayagar Engineering College, combining computer science fundamentals with strategic business thinking.',
      image: smvecImg,
      alt: 'Classical halftone engraving of university academy building and computer logic grid.',
    },
    {
      title: 'CyberGuard',
      role: '+ SIH Internal Selection • Top 15',
      description:
        'Led technical innovation for Smart India Hackathon internal selection with PRAMAANX, architecting AI biometric document screening, ELA tampering analysis, and risk scoring pipelines.',
      image: cyberguardImg,
      alt: 'Halftone cobalt blue classical shield with biometric fingerprint circuit emblem.',
    },
    {
      title: 'EVORIGEN',
      role: '+ Ignite Cohort • Venture Creation',
      description:
        'Startup venture focused on the digital preservation of cultural heritage and legacy knowledge, developed through customer discovery and problem definition in the Ignite Full Cohort.',
      image: evorigenImg,
      alt: 'Halftone cobalt blue ionic pillars framing an ancient scroll with digital data streams.',
    },
  ];

  return (
    <section id="education" className="relative w-full pt-20 pb-28 border-t border-dashed border-[#0700ff]/40 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
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

        {/* 3 Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item) => (
            <div
              key={item.title}
              className="flex flex-col bg-[#0700ff] border-[10px] border-[#0700ff] overflow-hidden group"
            >
              {/* Halftone Image Container */}
              <div className="w-full bg-[#f5f5f5] aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
