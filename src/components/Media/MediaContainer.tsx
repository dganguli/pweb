import { useState, useEffect } from 'react';
import { Sparkles, Archive } from 'lucide-react';
import { MediaSection } from './MediaSection';
import { MediaHighlights } from './MediaHighlights';
import { SectionTitle } from '../common/SectionTitle';
import { sectionColors } from '../../lib/sectionColors';

// Media sections use the shared color palette
export const mediaSections = [
  {
    id: 'highlights',
    title: 'highlights',
    icon: Sparkles,
    ...sectionColors.pink,
  },
  {
    id: 'all-coverage',
    title: 'all coverage',
    icon: Archive,
    ...sectionColors.orange,
  },
];

export const MediaContainer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    // Listen for nav dropdown clicks
    const handleMediaOpen = (event: CustomEvent<string>) => {
      setOpenSection(event.detail);
    };

    const handleCloseAll = () => {
      setOpenSection(null);
    };

    window.addEventListener('openMediaSection', handleMediaOpen as EventListener);
    window.addEventListener('closeMediaSections', handleCloseAll);
    return () => {
      window.removeEventListener('openMediaSection', handleMediaOpen as EventListener);
      window.removeEventListener('closeMediaSections', handleCloseAll);
    };
  }, []);

  const highlightsConfig = mediaSections[0];
  const allCoverageConfig = mediaSections[1];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <SectionTitle>media</SectionTitle>
      <div className="space-y-4">
        <div id="media-highlights" className="scroll-mt-20">
          <MediaHighlights
            isOpen={openSection === 'highlights'}
            onToggle={() => setOpenSection(openSection === 'highlights' ? null : 'highlights')}
            gradient={highlightsConfig.gradient}
            hoverGradient={highlightsConfig.hoverGradient}
            textColor={highlightsConfig.textColor}
          />
        </div>
        <div id="media-all-coverage" className="scroll-mt-20">
          <MediaSection
            isOpen={openSection === 'all-coverage'}
            onToggle={() => setOpenSection(openSection === 'all-coverage' ? null : 'all-coverage')}
            gradient={allCoverageConfig.gradient}
            hoverGradient={allCoverageConfig.hoverGradient}
            textColor={allCoverageConfig.textColor}
          />
        </div>
      </div>
    </div>
  );
};