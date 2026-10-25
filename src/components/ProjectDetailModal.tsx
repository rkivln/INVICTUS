import React from 'react';
import { CornerCrossBox } from './CornerCrossBox';

export interface ProjectDetail {
  title: string;
  category: string;
  tagline: string;
  overview: string;
  features: string[];
  stack: string[];
  role: string;
  status: string;
}

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
  PRAMAANX: {
    title: 'PRAMAANX',
    category: 'AI • Cybersecurity • Computer Vision • SIH 2026',
    tagline: 'AI-Based Fake Identity & Document Screening System',
    overview:
      'An edge-first identity verification and document fraud screening workstation designed for border checkpoint environments where network connectivity may be intermittent or constrained.',
    features: [
      'OCR-based document data extraction and metadata parsing.',
      'Face detection and biometric embedding-based similarity verification.',
      'Document tampering analysis using Error Level Analysis (ELA) and edge noise modeling.',
      'Risk scoring with explainable indicators and transparent decision logging.',
      'Offline-first processing architecture with authorized sync to central clusters.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'PyTorch',
      'ONNX Runtime',
      'OpenCV',
      'Tauri / Electron',
    ],
    role: 'Project developer and core technical contributor; led architecture of verification pipelines and user interface.',
    status: 'Developed for Smart India Hackathon internal evaluation (Top 15 Selection).',
  },
  NearGrid: {
    title: 'NearGrid',
    category: 'Mobile App • Geolocation • Community Technology',
    tagline: 'Location-Based Neighborhood Connection Platform',
    overview:
      'A community-oriented platform concept designed to bridge geographical isolation by connecting nearby residents using coordinate-based neighborhood discovery.',
    features: [
      'Location-based neighborhood discovery and geographic clustering.',
      'Community and mutual-aid group management.',
      'Local event coordination and real-time neighborhood participation.',
      'Dedicated installation landing page and open source release structure.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Geolocation APIs',
      'Tailwind CSS',
      'Node.js',
      'Supabase',
    ],
    role: 'Product designer and frontend engineer.',
    status: 'Product concept and web landing page designed; architectural specs documented.',
  },
  AltusMATE: {
    title: 'AltusMATE & Attendifier',
    category: 'EdTech • Campus Technology • Authentication',
    tagline: 'Campus Digital Hub & Attendance Verification System',
    overview:
      'An education-oriented platform focused on centralizing campus workflows alongside Attendifier, an attendance system with seven-digit security-code verification.',
    features: [
      'Student-centric digital experience for campus resources and schedules.',
      'Authorized teacher and single-admin attendance management workflows.',
      'Seven-digit dynamic security code verification replacing fragile IP/Wi-Fi matching.',
      'Structured attendance logs and administrative reporting views.',
    ],
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB / Supabase',
      'REST APIs',
      'Custom Auth Logic',
    ],
    role: 'Full-stack developer and database designer.',
    status: 'Iterative development with prototype test modules completed.',
  },
};

interface ProjectDetailModalProps {
  projectTitle: string | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  projectTitle,
  onClose,
}) => {
  if (!projectTitle) return null;
  const project = PROJECTS_DATA[projectTitle] || PROJECTS_DATA['PRAMAANX'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-[620px] bg-[#f5f5f5] text-black shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <CornerCrossBox
          dashed={true}
          borderColor="rgba(7, 0, 255, 0.4)"
          crossColor="#0700ff"
          className="p-6 sm:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-black/60 hover:text-black cursor-pointer w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono-geist font-medium text-[#0700ff] mb-2">
            <span>+</span>
            <span className="uppercase tracking-[0.08em]">{project.category}</span>
          </div>

          <h3
            id="project-modal-title"
            className="font-serif-instrument text-[36px] sm:text-[46px] leading-[1.0] font-normal text-black mb-1"
          >
            {project.title}
          </h3>

          <div className="font-mono-geist text-[13px] text-black/60 mb-5 font-medium">
            {project.tagline}
          </div>

          <p className="font-mono-geist text-[13px] sm:text-[14px] leading-[1.65] text-black/80 mb-6 pb-4 border-b border-dashed border-[#0700ff]/30">
            {project.overview}
          </p>

          <div className="mb-6">
            <h4 className="font-mono-geist text-xs uppercase font-semibold text-black tracking-wider mb-2.5">
              Key Capabilities & Innovations
            </h4>
            <ul className="space-y-1.5 font-mono-geist text-[12px] sm:text-[13px] text-black/75">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#0700ff] mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-mono-geist text-xs uppercase font-semibold text-black tracking-wider mb-2">
              Architectural Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white border border-black/10 font-mono-geist text-[11px] text-black/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-dashed border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-geist text-xs">
            <div className="text-black/60">
              <span className="text-black font-medium">Status: </span>
              {project.status}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-black text-white hover:bg-[#111111] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </CornerCrossBox>
      </div>
    </div>
  );
};
