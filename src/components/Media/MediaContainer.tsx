import { useState } from 'react';
import { MediaSection } from './MediaSection';
import { MediaHighlights } from './MediaHighlights';
import { SectionTitle } from '../common/SectionTitle';

export const MediaContainer = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <SectionTitle>media</SectionTitle>
      <div className="space-y-4">
        <MediaHighlights />
        <MediaSection
          isOpen={isArchiveOpen}
          onToggle={() => setIsArchiveOpen(!isArchiveOpen)}
        />
      </div>
    </div>
  );
};