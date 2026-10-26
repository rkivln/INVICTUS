import React from 'react';
import { CornerCrossBox } from './CornerCrossBox';

export const PartnersAndRelief: React.FC = () => {
  const domains = [
    { title: 'Full-Stack', tech: 'React • TypeScript • Tailwind' },
    { title: 'Backend & APIs', tech: 'Node.js • Express • Supabase' },
    { title: 'Generative AI', tech: 'LLMs • OCR • Fast Inference' },
    { title: 'Computer Vision', tech: 'OpenCV • PyTorch • ONNX' },
    { title: 'Cybersecurity', tech: 'Biometrics • Fraud Analysis' },
    { title: 'Open Source', tech: 'Git • Linux/WSL • Community' },
  ];

  return (
    <section id="stack" className="relative w-full pt-12 pb-0 overflow-hidden bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 mb-8">
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-5">
          <span className="text-[#0700ff] font-bold">+</span>
          <span className="uppercase tracking-[0.08em]">CORE DOMAINS & TECHNICAL STACK</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-instrument text-[44px] sm:text-[56px] md:text-[68px] leading-[1.02] tracking-[-0.02em] font-normal text-black mb-8 max-w-[880px]">
          From software engineering to applied AI systems.
        </h2>

        {/* 6 Technology / Domain Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {domains.map((item) => (
            <CornerCrossBox
              key={item.title}
              dashed={true}
              borderColor="rgba(7, 0, 255, 0.4)"
              crossColor="#0700ff"
              className="h-[76px] flex flex-col items-center justify-center px-3 py-2 text-center hover:border-[#0700ff] transition-all bg-[#f5f5f5]"
            >
              <span className="font-serif-instrument text-[18px] sm:text-[20px] font-normal text-black leading-tight">
                {item.title}
              </span>
              <span className="font-mono-geist text-[10px] text-black/60 tracking-tight mt-1 line-clamp-1">
                {item.tech}
              </span>
            </CornerCrossBox>
          ))}
        </div>
      </div>

      {/* Atlas Relief Sculpture Banner */}
      <div className="relative w-full border-t border-dashed border-[#0700ff]/40 overflow-hidden bg-[#f5f5f5]">
        <div className="w-full max-w-[1440px] mx-auto relative min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[500px] flex items-end">
          <img
            src="https://framerusercontent.com/images/9ASpNibqqpwmGO6LIMll9Ti7fk.png?width=1672&height=941"
            alt="Halftone classical architectural relief"
            className="w-full h-auto object-cover object-bottom select-none"
          />

          {/* Statement overlaid on the top-left blank whitespace */}
          <div className="absolute top-8 left-6 md:left-8 max-w-[660px] z-10">
            <p className="font-mono-geist text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-black/80 backdrop-blur-[1px]">
              Gokulan combines computer science fundamentals with business systems thinking, designing applications that are observable, resilient, and human-centered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
