import { useState, useEffect, useRef } from 'react';
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

// Track open section at module level so nav can check it
let currentOpenMediaSection: string | null = null;
export const getOpenMediaSection = () => currentOpenMediaSection;

export const MediaContainer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const prevOpenSection = useRef<string | null>(null);

  // Keep module-level variable in sync
  useEffect(() => {
    currentOpenMediaSection = openSection;
  }, [openSection]);

  useEffect(() => {
    // Listen for nav dropdown clicks
    const handleMediaOpen = (event: CustomEvent<string>) => {
      // Coming from nav - need to wait for expand animation
      prevOpenSection.current = 'from-nav';
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

  // Scroll to section when it opens
  useEffect(() => {
    if (openSection) {
      // If switching from another section, wait for collapse animation (300ms)
      const delay = prevOpenSection.current ? 350 : 50;
      setTimeout(() => {
        const element = document.getElementById(`media-${openSection}`);
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
      // Close any open research sections
      window.dispatchEvent(new CustomEvent('closeResearchSections'));
      // Only mark cross-container if research actually has something open
      // (imported getOpenResearchSection check happens via the event)
      // Don't override prevOpenSection if switching within this container
      if (!openSection) {
        prevOpenSection.current = 'cross-container';
      }
      setOpenSection(sectionId);
    }
  };

  const highlightsConfig = mediaSections[0];
  const allCoverageConfig = mediaSections[1];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <SectionTitle>media</SectionTitle>
      <div className="space-y-4">
        <div id="media-highlights" className="scroll-mt-20">
          <MediaHighlights
            isOpen={openSection === 'highlights'}
            onToggle={() => handleToggle('highlights')}
            gradient={highlightsConfig.gradient}
            hoverGradient={highlightsConfig.hoverGradient}
            textColor={highlightsConfig.textColor}
          />
        </div>
        <div id="media-all-coverage" className="scroll-mt-20">
          <MediaSection
            isOpen={openSection === 'all-coverage'}
            onToggle={() => handleToggle('all-coverage')}
            gradient={allCoverageConfig.gradient}
            hoverGradient={allCoverageConfig.hoverGradient}
            textColor={allCoverageConfig.textColor}
          />
        </div>
      </div>
    </div>
  );
};