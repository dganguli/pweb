import { useMemo } from 'react';
import { researchSections } from '../data/researchContent';
import { IconInfo } from '../types';

export const useIconForPaper = () => {
  return useMemo(() => (paperTitle: string): IconInfo | null => {
    for (const section of researchSections) {
      if (section.papers.some(paper => 
        paper.title.toLowerCase().includes(paperTitle.toLowerCase())
      )) {
        return {
          icon: section.icon,
          color: section.textColor
        };
      }
    }
    return null;
  }, []);
};