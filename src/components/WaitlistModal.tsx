import React, { useState } from 'react';
import { CornerCrossBox } from './CornerCrossBox';
import { validateWaitlistEmail } from '../utils/navigation';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Engineering');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateWaitlistEmail(email);
    if (!res.isValid) {
      setError(res.error || 'Invalid email');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setEmail('');
    setSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div className="relative w-full max-w-[500px] bg-[#f5f5f5] text-black shadow-2xl overflow-hidden">
        <CornerCrossBox
          dashed={true}
          borderColor="rgba(7, 0, 255, 0.4)"
          crossColor="#0700ff"
          className="p-8 sm:p-10"
        >
          {/* Close button with clean SVG */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-black/60 hover:text-black cursor-pointer w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {!submitted ? (
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono-geist font-medium text-black mb-3">
                <span className="text-[#0700ff] font-bold">+</span>
                <span className="uppercase tracking-[0.08em]">EARLY ACCESS PROGRAM</span>
              </div>

              <h3
                id="waitlist-title"
                className="font-serif-instrument text-[36px] sm:text-[42px] leading-[1.0] font-normal text-black mb-3"
              >
                Join the Waitlist
              </h3>

              <p className="font-mono-geist text-[14px] leading-[1.6] text-black/70 mb-6">
                Be among the first engineering and product teams to deploy dependable autonomous AI agents.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono-geist text-sm">
                <div>
                  <label htmlFor="waitlist-email" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                    Work Email
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                  />
                  {error && (
                    <p className="text-red-600 text-xs mt-1 font-mono-geist">{error}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="waitlist-role" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                    Role / Focus
                  </label>
                  <select
                    id="waitlist-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                  >
                    <option value="Engineering">Engineering / Infrastructure</option>
                    <option value="Product">Product Management</option>
                    <option value="AI Research">AI Research / Modeling</option>
                    <option value="Founder">Founder / Executive</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-black hover:bg-[#111111] text-white font-mono-geist text-sm font-medium transition-colors cursor-pointer"
                  >
                    Submit Request
                  </button>
                  <a
                    href="https://cal.com/gabetog/15min-introduction-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-center border border-dashed border-[#0700ff]/50 text-[#0700ff] hover:bg-[#0700ff]/5 font-mono-geist text-xs transition-colors"
                  >
                    Or book a 15-min introduction call →
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0700ff] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 10l4 4L16 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif-instrument text-[36px] leading-[1.1] mb-2">
                You're on the list.
              </h3>
              <p className="font-mono-geist text-[14px] text-black/70 mb-6 max-w-[340px] mx-auto">
                We have recorded your email ({email}) for early platform onboarding.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-black text-white font-mono-geist text-sm cursor-pointer hover:bg-black/90"
              >
                Done
              </button>
            </div>
          )}
        </CornerCrossBox>
      </div>
    </div>
  );
};
