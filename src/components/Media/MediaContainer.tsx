import { useState } from 'react';
import { MediaSection } from './MediaSection';
import { SectionTitle } from '../common/SectionTitle';

export const MediaContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <SectionTitle>media</SectionTitle>
      <MediaSection
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};