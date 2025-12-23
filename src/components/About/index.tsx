import { getRecentPublications, getPublicationById } from '../../data/researchContent';
import { Bot, Ruler, ScrollText, Brain, Wrench, Hammer, Landmark, ChevronDown, ChevronUp, Youtube, Newspaper } from 'lucide-react';

// Shared color config for category styling
const categoryColors = {
  alignment: { iconColor: 'text-pink-500', linkColor: 'text-pink-500 hover:text-pink-600' },
  evals: { iconColor: 'text-orange-500', linkColor: 'text-orange-500 hover:text-orange-600' },
  labor: { iconColor: 'text-red-500', linkColor: 'text-red-500 hover:text-red-600' },
  democracy: { iconColor: 'text-amber-600', linkColor: 'text-amber-600 hover:text-amber-700' },
  policy: { iconColor: 'text-yellow-500', linkColor: 'text-yellow-500 hover:text-yellow-600' },
  neuroscience: { iconColor: 'text-fuchsia-500', linkColor: 'text-fuchsia-500 hover:text-fuchsia-600' },
  software: { iconColor: 'text-purple-500', linkColor: 'text-purple-500 hover:text-purple-600' },
} as const;
import { useState } from 'react';

export const About = () => {
  const recentPublications = getRecentPublications(3);
  const [isRecentWorkExpanded, setIsRecentWorkExpanded] = useState(false);
  const [isFavoriteWorkExpanded, setIsFavoriteWorkExpanded] = useState(false);
  
  // Favorite papers based on the images provided
  const favoritePublications = [
    getPublicationById('neural-perceptual-signatures'),
    getPublicationById('capabilities-limitations-societal'),
    getPublicationById('collective-constitutional-ai')
  ].filter(pub => pub !== undefined);
  
  return (
    <div className="container max-w-4xl mx-auto px-4 -mt-4 relative z-10">
      <div className="bg-white/50 backdrop-blur rounded-xl py-12 px-4 shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
            about me
          </h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          I am a research scientist at Anthropic, where I started and lead the{' '}
          <a
            href="https://www.youtube.com/watch?v=02nFRuEo0bc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 transition-colors inline-flex items-center gap-0.5"
          >
            societal
            <Youtube className="w-4 h-4" />
          </a>
          {' '}
          <a
            href="https://www.theverge.com/ai-artificial-intelligence/836335/anthropic-societal-impacts-team-ai-claude-effects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 transition-colors inline-flex items-center gap-0.5"
          >
            impacts team
            <Newspaper className="w-4 h-4" />
          </a>
          . Prior to that, I was the founding research director at the Stanford Institute for Human 
          Centered AI (HAI). I did my PhD in Computational Neuroscience at NYU and obtained my BS 
          in Electrical Engineering and Computer Science (EECS) from Berkeley. For fun, I surf, play 
          bass with my band, and read widely across the humanities and social sciences. Here's some of my{' '}
          <button
            onClick={() => {
              setIsRecentWorkExpanded(!isRecentWorkExpanded);
              if (!isRecentWorkExpanded) {
                setIsFavoriteWorkExpanded(false);
              }
            }}
            className="text-red-400 hover:text-red-500 transition-colors inline-flex items-center gap-1"
          >
            recent work
            {isRecentWorkExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {' '}and some{' '}
          <button
            onClick={() => {
              setIsFavoriteWorkExpanded(!isFavoriteWorkExpanded);
              if (!isFavoriteWorkExpanded) {
                setIsRecentWorkExpanded(false);
              }
            }}
            className="text-red-400 hover:text-red-500 transition-colors inline-flex items-center gap-1"
          >
            favorites
            {isFavoriteWorkExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </p>
        
        {isRecentWorkExpanded && (
          <div className="mt-4 ml-2 sm:ml-4 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50/30 to-orange-50/30 p-4">
            <h4 className="text-sm font-medium text-gray-500 mb-3">recent work</h4>
            <ul className="text-gray-600 text-sm leading-relaxed">
              {recentPublications.map((pub) => {
              // Map category to icon and color (matching research section colors)
              const getCategoryStyle = (category: string) => {
                const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors.alignment;
                const icons: Record<string, JSX.Element> = {
                  alignment: <Bot className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  evals: <Ruler className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  labor: <Hammer className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  democracy: <Landmark className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  policy: <ScrollText className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  neuroscience: <Brain className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  software: <Wrench className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                };
                return {
                  icon: icons[category] || icons.alignment,
                  linkColor: colors.linkColor
                };
              };
              
              // Extract date from details (format: "Venue, Month Year")
              const extractDate = (details: string) => {
                const parts = details.split(', ');
                return parts.length > 1 ? parts[1] : details;
              };
              
              const categoryStyle = getCategoryStyle(pub.category);
              
              return (
                <li key={pub.id} className="mb-1 flex items-start">
                  {categoryStyle.icon}
                  <div>
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${categoryStyle.linkColor} transition-colors`}
                    >
                      {pub.title}
                    </a>
                    <span className="text-gray-500 ml-1">({extractDate(pub.details)})</span>
                  </div>
                </li>
              );
            })}
            </ul>
          </div>
        )}
        
        {isFavoriteWorkExpanded && (
          <div className="mt-4 ml-2 sm:ml-4 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50/30 to-orange-50/30 p-4">
            <h4 className="text-sm font-medium text-gray-500 mb-3">favorites</h4>
            <ul className="text-gray-600 text-sm leading-relaxed">
              {favoritePublications.map((pub) => {
              // Map category to icon and color (matching research section colors)
              const getCategoryStyle = (category: string) => {
                const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors.alignment;
                const icons: Record<string, JSX.Element> = {
                  alignment: <Bot className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  evals: <Ruler className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  labor: <Hammer className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  democracy: <Landmark className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  policy: <ScrollText className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  neuroscience: <Brain className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                  software: <Wrench className={`w-5 h-5 ${colors.iconColor} mr-2 flex-shrink-0`} />,
                };
                return {
                  icon: icons[category] || icons.alignment,
                  linkColor: colors.linkColor
                };
              };
              
              // Extract date from details (format: "Venue, Month Year")
              const extractDate = (details: string) => {
                const parts = details.split(', ');
                return parts.length > 1 ? parts[1] : details;
              };
              
              const categoryStyle = getCategoryStyle(pub.category);
              
              return (
                <li key={pub.id} className="mb-1 flex items-start">
                  {categoryStyle.icon}
                  <div>
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${categoryStyle.linkColor} transition-colors`}
                    >
                      {pub.title}
                    </a>
                    <span className="text-gray-500 ml-1">({extractDate(pub.details)})</span>
                  </div>
                </li>
              );
            })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};