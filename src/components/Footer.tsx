import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-dashed border-[#0700ff]/40 bg-[#f5f5f5] pt-14 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left column */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-2xl font-bold font-sans-inter tracking-tight text-black mb-4">
              GOKULAN
            </div>
            <p className="font-mono-geist text-[13px] text-black/60 max-w-[280px] mb-8">
              Open Source Developer & Full Stack Engineer • Computer Science and Business Systems student at SMVEC.
            </p>
          </div>
          <div className="font-mono-geist text-[13px] text-black/65">
            © 2026 Gokulan. All rights reserved.
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 font-mono-geist text-[14px]">
          {/* Navigation */}
          <div className="flex flex-col gap-3 text-black/85">
            <span className="text-xs uppercase text-[#0700ff] font-semibold mb-1">Navigation</span>
            <a href="#projects" className="hover:text-[#0700ff] transition-colors">
              Projects
            </a>
            <a href="#philosophy" className="hover:text-[#0700ff] transition-colors">
              Philosophy
            </a>
            <a href="#process" className="hover:text-[#0700ff] transition-colors">
              Process
            </a>
            <a href="#education" className="hover:text-[#0700ff] transition-colors">
              Education
            </a>
            <a href="#stack" className="hover:text-[#0700ff] transition-colors">
              Stack
            </a>
          </div>

          {/* Online Presence */}
          <div className="flex flex-col gap-3 text-black/85">
            <span className="text-xs uppercase text-[#0700ff] font-semibold mb-1">Presence</span>
            <a
              href="https://github.com/rkivln"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0700ff] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/a-gokulan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0700ff] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/in/rkivln"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0700ff] transition-colors"
            >
              X
            </a>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-3 text-black/85">
            <span className="text-xs uppercase text-[#0700ff] font-semibold mb-1">Direct</span>
            <a
              href="https://gokulanx.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0700ff] transition-colors break-all"
            >
              gokulanx.vercel.app
            </a>
            <a
              href="mailto:gokulan.rkivln@gmail.com"
              className="hover:text-[#0700ff] transition-colors break-all text-[13px]"
            >
              gokulan.rkivln@gmail.com
            </a>
            <span className="text-xs text-black/50 mt-2">Puducherry, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
