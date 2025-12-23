export interface Paper {
  title: string;
  details: string;
  link: string;
  role?: string;
}

export interface MediaItem {
  title: string;
  outlet: string;
  date: string;
  link: string;
  description?: string;
}

export interface PublicationWithMedia {
  id: string;
  title: string;
  details: string;
  link: string;
  role?: string;
  category: 'alignment' | 'evals' | 'labor' | 'policy' | 'neuroscience' | 'software';
  mediaCoverage: Omit<MediaItem, 'description'>[];
}

export interface ResearchSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  hoverGradient: string;
  textColor: string;
  papers: Paper[];
}

export interface RoleBadgeProps {
  role: string | undefined;
}

export interface ResearchSectionProps extends ResearchSection {
  isOpen: boolean;
  onToggle: () => void;
}

export interface IconInfo {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}