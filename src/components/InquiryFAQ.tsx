import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerCrossBox } from './CornerCrossBox';
import { MotionReveal } from './MotionReveal';
import { toggleFAQ } from '../utils/navigation';

export const InquiryFAQ: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>('faq-0');

  const faqs = [
    {
      id: 'faq-0',
      question: 'What is in your core development stack?',
      answer:
        'Frontend: HTML5, CSS3, JavaScript, React, TypeScript, Vite, Tailwind CSS. Backend: Node.js, Express.js, MongoDB, Supabase, and REST API design. Developer Tools: Git/GitHub, Linux/Ubuntu via WSL, VS Code, and Electron/Tauri.',
    },
    {
      id: 'faq-1',
      question: 'What are your AI, Computer Vision, and Cybersecurity skills?',
      answer:
        'Hands-on experience with Generative AI workflows, LLM concepts, OCR document data extraction, OpenCV, PyTorch, and ONNX Runtime for face detection, embedding-based similarity, and document tampering analysis using Error Level Analysis (ELA).',
    },
    {
      id: 'faq-2',
      question: 'What certifications and learning programs have you completed?',
      answer:
        'Completed credentials include Google Generative AI / LLM coursework, Gemini Enterprise Agent Ready, Anthropic Education, HCL × GUVI Analytics, Brand Monk UI/UX design, Deloitte Cyber Simulation, and LinkedIn Learning Cybersecurity.',
    },
    {
      id: 'faq-3',
      question: 'What is your academic timeline and degree focus?',
      answer:
        'Pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering and Business Systems (CSEBS) at Sri Manakula Vinayagar Engineering College (SMVEC), with an expected graduation year of 2029.',
    },
    {
      id: 'faq-4',
      question: 'What languages do you communicate in?',
      answer:
        'Fluent in Tamil (Native language), professional working proficiency in English, and elementary German (actively learning through Duolingo).',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId((prev) => toggleFAQ(prev, id));
  };

  return (
    <section className="relative w-full pt-20 pb-28 border-t border-dashed border-[#0700ff]/40 bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <MotionReveal direction="up" distance={25}>
          {/* Pre-heading Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono-geist font-medium text-black mb-6">
            <span className="text-[#0700ff] font-bold">+</span>
            <span className="uppercase tracking-[0.08em]">TECHNICAL STACK & CERTIFICATIONS</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-instrument text-[56px] sm:text-[76px] md:text-[96px] leading-[0.96] tracking-[-0.03em] font-normal text-black mb-6">
            The Inquiry
          </h2>

          {/* Subtitle */}
          <p className="font-mono-geist text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-black/70 mb-14 max-w-[620px]">
            Answers to practical questions regarding technical stack, AI models, certifications, and collaboration.
          </p>
        </MotionReveal>

        {/* Accordion Container in solid cobalt blue */}
        <MotionReveal direction="up" distance={30} delay={0.15}>
          <div className="w-full bg-[#0700ff] text-white">
            <CornerCrossBox
              dashed={true}
              borderColor="rgba(255, 255, 255, 0.4)"
              crossColor="#ffffff"
              className="p-6 sm:p-10"
            >
              <div className="divide-y divide-white/20">
                {faqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div key={faq.id} className="py-6 first:pt-0 last:pb-0">
                      <button
                        onClick={() => handleToggle(faq.id)}
                        className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif-instrument text-[24px] sm:text-[28px] md:text-[32px] font-normal text-white flex items-center gap-2 group-hover:text-white/90">
                          <span className="opacity-80">+</span> {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="text-2xl text-white ml-4 flex-shrink-0 font-serif-instrument"
                        >
                          {isOpen ? '—' : '+'}
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 font-mono-geist text-[14px] sm:text-[15px] leading-[1.65] text-white/85 max-w-[760px] pl-5 sm:pl-6">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </CornerCrossBox>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
