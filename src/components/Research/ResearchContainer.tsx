import { useState } from 'react';
import { ResearchSection } from './ResearchSection';
import { researchSections } from '../../data/researchData';
import { SectionTitle } from '../common/SectionTitle';

export const ResearchContainer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle>research</SectionTitle>
      <div className="space-y-4">
        {researchSections.map((section) => (
          <ResearchSection
            key={section.id}
            {...section}
            isOpen={openSection === section.id}
            onToggle={() => setOpenSection(openSection === section.id ? null : section.id)}
          />
        ))}
      </div>
    </div>
  );
};