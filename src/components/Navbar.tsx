import React, { useState } from 'react';
import { CornerCrossBox } from './CornerCrossBox';
import { SlidingButton } from './SlidingButton';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Process', href: '#process' },
    { label: 'Education', href: '#education' },
    { label: 'Stack', href: '#stack' },
  ];

  return (
    <div className="w-full pt-4 sm:pt-7 px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto z-40 relative">
      <div className="w-full max-w-[840px]">
        <CornerCrossBox
          dashed={true}
          borderColor="rgba(7, 0, 255, 0.4)"
          crossColor="#0700ff"
          className="w-full relative overflow-hidden bg-[#f5f5f5]/90 backdrop-blur-sm"
        >
          {/* Subtle Halftone Texture in Navbar */}
          <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
            <img
              src="https://framerusercontent.com/images/n4STjhWHOOxqhRFoDbwTho74OCM.png?width=1089&height=214"
              alt=""
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-2 h-[54px] sm:h-[58px]">
            {/* Logo */}
            <a
              href="#"
              className="text-[17px] sm:text-[19px] font-bold font-sans-inter tracking-tight text-black hover:opacity-85 transition-opacity"
              aria-label="Gokulan Portfolio Home"
            >
              GOKULAN
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 md:gap-7 text-[14px] font-mono-geist text-black">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#0700ff] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action: Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <SlidingButton
                label1="Contact"
                label2="Say Hello"
                onClick={onOpenContact}
                className="h-[38px] px-3.5 sm:px-5 text-xs"
              />

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-black transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="relative z-20 md:hidden border-t border-dashed border-[#0700ff]/30 px-6 py-4 flex flex-col gap-3 font-mono-geist bg-[#f5f5f5]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-black text-sm hover:text-[#0700ff] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </CornerCrossBox>
      </div>
    </div>
  );
};
