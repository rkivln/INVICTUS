import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerCrossBox } from './CornerCrossBox';
import { validateWaitlistEmail } from '../utils/navigation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Full Stack / Engineering Role');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateWaitlistEmail(email);
    if (!res.isValid) {
      setError(res.error || 'Please enter a valid email.');
      return;
    }
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('gokulan.rkivln@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[540px] bg-[#f5f5f5] text-black shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <CornerCrossBox
              dashed={true}
              borderColor="rgba(7, 0, 255, 0.4)"
              crossColor="#0700ff"
              className="p-6 sm:p-10"
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
                    <span className="uppercase tracking-[0.08em]">GET IN TOUCH WITH GOKULAN</span>
                  </div>

                  <h3
                    id="contact-title"
                    className="font-serif-instrument text-[36px] sm:text-[42px] leading-[1.0] font-normal text-black mb-3"
                  >
                    Initiate Conversation
                  </h3>

                  <p className="font-mono-geist text-[13px] sm:text-[14px] leading-[1.6] text-black/70 mb-6">
                    Open for full-stack engineering roles, open source initiatives, and venture collaborations.
                  </p>

                  {/* Direct Email quick copy bar */}
                  <div className="flex items-center justify-between p-3 mb-6 bg-white border border-black/15 font-mono-geist text-xs">
                    <div className="flex items-center gap-2 text-black/85 truncate">
                      <span className="text-[#0700ff]">✉</span>
                      <span className="truncate">gokulan.rkivln@gmail.com</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-2 px-2.5 py-1 text-xs border border-dashed border-[#0700ff] text-[#0700ff] hover:bg-[#0700ff]/10 transition-colors cursor-pointer flex-shrink-0"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono-geist text-sm">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="ada@domain.com"
                        className="w-full px-4 py-2.5 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                      />
                      {error && (
                        <p className="text-red-600 text-xs mt-1 font-mono-geist">{error}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-topic" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                        Inquiry Topic
                      </label>
                      <select
                        id="contact-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                      >
                        <option value="Full Stack / Engineering Role">Full-Stack / Engineering Role</option>
                        <option value="Open Source Collaboration">Open Source Collaboration</option>
                        <option value="Generative AI / Research">Generative AI / Applied Research</option>
                        <option value="Startup / Venture Discussion">Startup / Venture Discussion</option>
                        <option value="General Conversation">General Conversation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs uppercase text-black/75 mb-1.5 font-medium">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project, team, or opportunity..."
                        className="w-full px-4 py-2 bg-white border border-black/20 focus:border-[#0700ff] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-black hover:bg-[#111111] text-white font-mono-geist text-sm font-medium transition-colors cursor-pointer"
                      >
                        Send Message
                      </button>
                      <a
                        href="mailto:gokulan.rkivln@gmail.com"
                        className="w-full py-2.5 text-center border border-dashed border-[#0700ff]/50 text-[#0700ff] hover:bg-[#0700ff]/5 font-mono-geist text-xs transition-colors"
                      >
                        Open directly in email client →
                      </a>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#0700ff] text-white flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 10l4 4L16 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif-instrument text-[36px] leading-[1.1] mb-2">
                    Message Dispatched.
                  </h3>
                  <p className="font-mono-geist text-[14px] text-black/70 mb-6 max-w-[360px] mx-auto">
                    Thank you, {name}. Your note regarding "{topic}" has been logged for Gokulan ({email}).
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-black text-white font-mono-geist text-sm cursor-pointer hover:bg-black/90"
                  >
                    Close
                  </button>
                </div>
              )}
            </CornerCrossBox>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
