export interface Paper {
  title: string;
  details: string;
  link: string;
  role?: string;
}

export interface ResearchSection {
  id: string;
  title: string;
  icon: React.ComponentType;
  gradient: string;
  hoverGradient: string;
  textColor: string;
  papers: Paper[];
}

export interface MediaItem {
  title: string;
  outlet: string;
  date: string;
  link: string;
  description?: string;
}

export interface RoleBadgeProps {
  role: string | undefined;
}

export interface ResearchSectionProps extends ResearchSection {
  isOpen: boolean;
  onToggle: () => void;
}

export interface IconInfo {
  icon: React.ComponentType;
  color: string;
}