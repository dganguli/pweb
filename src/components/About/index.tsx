import { getRecentPublications, getPublicationById } from '../../data/researchContent';
import { Bot, Ruler, ScrollText, Brain, Wrench, ChevronDown, ChevronUp, Youtube } from 'lucide-react';
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
            className="text-red-400 hover:text-red-500 transition-colors inline-flex items-center gap-1"
          >
            societal impacts team
            <Youtube className="w-4 h-4" />
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
                switch (category) {
                  case 'alignment':
                    return {
                      icon: <Bot className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                  case 'evals':
                    return {
                      icon: <Ruler className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-orange-500 hover:text-orange-600"
                    };
                  case 'policy':
                    return {
                      icon: <ScrollText className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />,
                      linkColor: "text-yellow-600 hover:text-yellow-700"
                    };
                  case 'neuroscience':
                    return {
                      icon: <Brain className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                  case 'software':
                    return {
                      icon: <Wrench className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-purple-500 hover:text-purple-600"
                    };
                  default:
                    return {
                      icon: <Bot className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                }
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
                switch (category) {
                  case 'alignment':
                    return {
                      icon: <Bot className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                  case 'evals':
                    return {
                      icon: <Ruler className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-orange-500 hover:text-orange-600"
                    };
                  case 'policy':
                    return {
                      icon: <ScrollText className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />,
                      linkColor: "text-yellow-600 hover:text-yellow-700"
                    };
                  case 'neuroscience':
                    return {
                      icon: <Brain className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                  case 'software':
                    return {
                      icon: <Wrench className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-purple-500 hover:text-purple-600"
                    };
                  default:
                    return {
                      icon: <Bot className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" />,
                      linkColor: "text-pink-500 hover:text-pink-600"
                    };
                }
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