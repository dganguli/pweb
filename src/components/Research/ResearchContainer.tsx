import { useState, useEffect } from 'react';
import { ResearchSection } from './ResearchSection';
import { researchSections } from '../../data/researchContent';
import { SectionTitle } from '../common/SectionTitle';

export const ResearchContainer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    // Check for hash in URL on mount
    const hash = window.location.hash.replace('#', '');
    if (hash && researchSections.some(s => s.id === hash)) {
      setOpenSection(hash);
    }

    // Listen for nav dropdown category clicks
    const handleCategoryOpen = (event: CustomEvent<string>) => {
      setOpenSection(event.detail);
    };

    // Listen for close all sections
    const handleCloseAll = () => {
      setOpenSection(null);
    };

    window.addEventListener('openResearchCategory', handleCategoryOpen as EventListener);
    window.addEventListener('closeResearchSections', handleCloseAll);
    return () => {
      window.removeEventListener('openResearchCategory', handleCategoryOpen as EventListener);
      window.removeEventListener('closeResearchSections', handleCloseAll);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-12">
      <SectionTitle>research</SectionTitle>

      <div className="space-y-4 min-w-0">
        {researchSections.map((section) => (
          <div key={section.id} id={`research-${section.id}`} className="scroll-mt-20">
            <ResearchSection
              {...section}
              isOpen={openSection === section.id}
              onToggle={() => setOpenSection(openSection === section.id ? null : section.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};