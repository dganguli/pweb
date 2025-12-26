import { useState, useEffect, useRef } from 'react';
import { ResearchSection } from './ResearchSection';
import { researchSections } from '../../data/researchContent';
import { SectionTitle } from '../common/SectionTitle';

// Track open section at module level so nav can check it
let currentOpenResearchSection: string | null = null;
export const getOpenResearchSection = () => currentOpenResearchSection;

export const ResearchContainer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const prevOpenSection = useRef<string | null>(null);

  // Keep module-level variable in sync
  useEffect(() => {
    currentOpenResearchSection = openSection;
  }, [openSection]);

  useEffect(() => {
    // Handle hash in URL (both on mount and when hash changes)
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && researchSections.some(s => s.id === hash)) {
        // Close any open media sections first
        window.dispatchEvent(new CustomEvent('closeMediaSections'));
        prevOpenSection.current = 'from-hash';
        setOpenSection(hash);
      }
    };

    // Small delay on mount ensures component is fully ready
    const hashTimer = setTimeout(handleHash, 100);

    // Listen for hash changes (user edits URL)
    window.addEventListener('hashchange', handleHash);

    // Listen for nav dropdown category clicks
    const handleCategoryOpen = (event: CustomEvent<string>) => {
      // Coming from nav - need to wait for expand animation
      prevOpenSection.current = 'from-nav';
      setOpenSection(event.detail);
    };

    // Listen for close all sections
    const handleCloseAll = () => {
      setOpenSection(null);
    };

    window.addEventListener('openResearchCategory', handleCategoryOpen as EventListener);
    window.addEventListener('closeResearchSections', handleCloseAll);
    return () => {
      clearTimeout(hashTimer);
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('openResearchCategory', handleCategoryOpen as EventListener);
      window.removeEventListener('closeResearchSections', handleCloseAll);
    };
  }, []);

  // Scroll to section when it opens
  useEffect(() => {
    if (openSection) {
      // If switching from another section, wait for collapse animation (300ms)
      const delay = prevOpenSection.current ? 350 : 50;
      setTimeout(() => {
        const element = document.getElementById(`research-${openSection}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, delay);
    }
    prevOpenSection.current = openSection;
  }, [openSection]);

  const handleToggle = (sectionId: string) => {
    const isClosing = openSection === sectionId;
    if (isClosing) {
      setOpenSection(null);
    } else {
      // Opening a section - close any open media sections first
      window.dispatchEvent(new CustomEvent('closeMediaSections'));
      // Mark that we're switching from another container (for scroll timing)
      prevOpenSection.current = 'cross-container';
      setOpenSection(sectionId);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-12">
      <SectionTitle>research</SectionTitle>

      <div className="space-y-4 min-w-0">
        {researchSections.map((section) => (
          <div key={section.id} id={`research-${section.id}`} className="scroll-mt-20">
            <ResearchSection
              {...section}
              isOpen={openSection === section.id}
              onToggle={() => handleToggle(section.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};