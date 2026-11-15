// Shared color palette for all sections (research and media)
// Both research and media sections reference these colors for consistency

export const sectionColors = {
  pink: {
    gradient: 'bg-pink-500',
    hoverGradient: 'hover:bg-pink-50',
    textColor: 'text-pink-500',
  },
  orange: {
    gradient: 'bg-orange-500',
    hoverGradient: 'hover:bg-orange-50',
    textColor: 'text-orange-500',
  },
  red: {
    gradient: 'bg-red-500',
    hoverGradient: 'hover:bg-red-50',
    textColor: 'text-red-500',
  },
  amber: {
    gradient: 'bg-amber-600',
    hoverGradient: 'hover:bg-amber-50',
    textColor: 'text-amber-600',
  },
  yellow: {
    gradient: 'bg-yellow-300',
    hoverGradient: 'hover:bg-yellow-50',
    textColor: 'text-yellow-500',
  },
  fuchsia: {
    gradient: 'bg-fuchsia-500',
    hoverGradient: 'hover:bg-fuchsia-50',
    textColor: 'text-fuchsia-500',
  },
  purple: {
    gradient: 'bg-purple-500',
    hoverGradient: 'hover:bg-purple-50',
    textColor: 'text-purple-500',
  },
} as const;

export type SectionColorName = keyof typeof sectionColors;
