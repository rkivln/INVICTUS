import React from 'react';
import { CornerCrossBox } from './CornerCrossBox';

interface ArchitectureProps {
  onSelectProject?: (title: string) => void;
}

export const Architecture: React.FC<ArchitectureProps> = ({ onSelectProject }) => {
  const projects = [
    {
      title: 'PRAMAANX',
      tag: 'AI • CYBERSECURITY • COMPUTER VISION',
      subtitle: 'Fake Identity & Document Screening System',
      description:
        'An edge-first identity verification and document fraud screening workstation featuring OCR extraction, Error Level Analysis (ELA) tampering detection, and biometric similarity.',
      tech: 'FastAPI • PyTorch • ONNX • OpenCV • React • Tauri',
      image:
        'https://framerusercontent.com/images/5AfgoreYcZ3FeuirOmYM6tK4A.png?width=1672&height=941',
      alt: 'Halftone laurel wreath symbolizing verified identity and security evaluation.',
    },
    {
      title: 'NearGrid',
      tag: 'GEOLOCATION • COMMUNITY • MOBILE',
      subtitle: 'Neighborhood Connection Platform',
      description:
        'Location-based neighborhood discovery platform connecting local communities and nearby residents through geographic coordinates, group management, and local participation.',
      tech: 'React • TypeScript • Geolocation APIs • Tailwind CSS',
      image:
        'https://framerusercontent.com/images/FMBnew3JYdSNa05DhSP49gG51Yg.png?width=834&height=469',
      alt: 'Halftone monumental architectural portal representing community and discovery.',
    },
    {
      title: 'AltusMATE',
      tag: 'EDTECH • CAMPUS TECHNOLOGY • AUTH',
      subtitle: 'Student Hub & Attendifier System',
      description:
        'Campus-focused digital hub and student attendance management application utilizing seven-digit security code access logic and structured administrative views.',
      tech: 'React • Node.js • Supabase • REST APIs • Security Auth',
      image:
        'https://framerusercontent.com/images/JADFdcxbz48BnZzsgn2XAqvvYoE.png?width=1672&height=941',
      alt: 'Halftone classical wing extending into open space representing campus innovation.',
    },
  ];

  return (
    <section id="projects" className="relative w-full pt-20 pb-28 border-t border-dashed border-[#0700ff]/40 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Pre-heading Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
          <span className="text-[#0700ff] font-bold">+</span>
          <span className="uppercase tracking-[0.08em]">FEATURED ENGINEERING WORK</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-instrument text-[56px] sm:text-[76px] md:text-[96px] leading-[0.96] tracking-[-0.03em] font-normal text-black mb-6">
          Selected Projects
        </h2>

        {/* Description */}
        <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-black/70 mb-16 max-w-[660px]">
          Flagship applications and system concepts developed across AI, cybersecurity, geolocation, and campus technology.
        </p>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col group cursor-pointer"
              onClick={() => onSelectProject?.(proj.title)}
            >
              {/* Image Box with Corner Crosses */}
              <CornerCrossBox
                dashed={true}
                borderColor="rgba(7, 0, 255, 0.4)"
                crossColor="#0700ff"
                className="w-full aspect-square bg-[#f5f5f5] p-2 flex items-center justify-center overflow-hidden mb-6 group-hover:border-[#0700ff] transition-colors"
              >
                <img
                  src={proj.image}
                  alt={proj.alt}
                  className="w-full h-full object-contain select-none group-hover:scale-105 transition-transform duration-300"
                />
              </CornerCrossBox>

              {/* Tag & Subtitle */}
              <div className="font-mono-geist text-[11px] text-[#0700ff] font-medium tracking-wide uppercase mb-1">
                {proj.tag}
              </div>

              {/* Project Title */}
              <h3 className="font-serif-instrument text-[38px] sm:text-[44px] leading-[1.0] font-normal text-black mb-2 flex items-center justify-between">
                <span>{proj.title}</span>
                <span className="text-xl text-[#0700ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </h3>

              {/* Project Description */}
              <p className="font-mono-geist text-[13px] sm:text-[14px] leading-[1.6] text-black/70 mb-4">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-auto pt-2 font-mono-geist text-[11px] text-black/60 border-t border-dashed border-black/10">
                {proj.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
