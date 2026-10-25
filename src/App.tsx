import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersAndRelief } from './components/PartnersAndRelief';
import { AutonomousEra } from './components/AutonomousEra';
import { DependableAutonomy } from './components/DependableAutonomy';
import { Architecture } from './components/Architecture';
import { Sequence } from './components/Sequence';
import { Team } from './components/Team';
import { InquiryFAQ } from './components/InquiryFAQ';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (title: string) => {
    setSelectedProject(title);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-mono-geist selection:bg-[#0700ff] selection:text-white flex flex-col relative">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Halftone Angel Sculpture */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. Core Domains & Working Stack with Classical Atlas Relief Sculpture */}
        <PartnersAndRelief />

        {/* 3. The Developer Ethos / Manifesto Quote Box */}
        <AutonomousEra />

        {/* 4. Engineering Discipline Cobalt Blue Section with Particle Arc */}
        <DependableAutonomy />

        {/* 5. Featured Work / Projects (PRAMAANX, NearGrid, AltusMATE) */}
        <Architecture onSelectProject={handleSelectProject} />

        {/* 6. The Sequence: Product Methodology */}
        <Sequence />

        {/* 7. Education, SMVEC, and Startup Milestones */}
        <Team />

        {/* 8. The Inquiry: Technical Stack, AI, and Certifications */}
        <InquiryFAQ />

        {/* 9. Initiate Contact Banner with Stairway Halftone */}
        <CtaBanner onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />

      {/* Project Deep Dive Modal */}
      <ProjectDetailModal
        projectTitle={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
}
