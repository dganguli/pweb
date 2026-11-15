import { Bot, Ruler, ScrollText, Brain, Wrench, Hammer, Landmark } from 'lucide-react';

export const categoryConfig = {
  alignment: {
    iconColor: 'text-pink-500',
    linkColor: 'text-pink-500 hover:text-pink-600',
    icon: Bot
  },
  evals: {
    iconColor: 'text-orange-500',
    linkColor: 'text-orange-500 hover:text-orange-600',
    icon: Ruler
  },
  labor: {
    iconColor: 'text-red-500',
    linkColor: 'text-red-500 hover:text-red-600',
    icon: Hammer
  },
  democracy: {
    iconColor: 'text-amber-600',
    linkColor: 'text-amber-600 hover:text-amber-700',
    icon: Landmark
  },
  policy: {
    iconColor: 'text-yellow-500',
    linkColor: 'text-yellow-500 hover:text-yellow-600',
    icon: ScrollText
  },
  neuroscience: {
    iconColor: 'text-fuchsia-500',
    linkColor: 'text-fuchsia-500 hover:text-fuchsia-600',
    icon: Brain
  },
  software: {
    iconColor: 'text-purple-500',
    linkColor: 'text-purple-500 hover:text-purple-600',
    icon: Wrench
  },
} as const;

export type CategoryId = keyof typeof categoryConfig;

export const getCategoryStyle = (category: string) => {
  const config = categoryConfig[category as CategoryId] || categoryConfig.alignment;
  const Icon = config.icon;
  return {
    Icon,
    iconColor: config.iconColor,
    linkColor: config.linkColor
  };
};

// Extract date from publication details (format: "Venue, Month Year")
export const extractDate = (details: string): string => {
  const parts = details.split(', ');
  return parts.length > 1 ? parts[1] : details;
};
