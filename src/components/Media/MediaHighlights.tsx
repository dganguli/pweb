import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ChevronDown } from 'lucide-react';
import { useIconForPaper } from '../../hooks/useIconForPaper';

// Curated highlights - the most significant media coverage
export const highlights = [
  {
    title: "It's their job to keep AI from destroying everything",
    outlet: "The Verge",
    date: "Dec 2025",
    link: "https://www.theverge.com/ai-artificial-intelligence/836335/anthropic-societal-impacts-team-ai-claude-effects",
    description: "Societal Impacts Team",
  },
  {
    title: "What if We Could All Control AI?",
    outlet: "The New York Times",
    date: "Oct 2023",
    link: "https://www.nytimes.com/2023/10/17/technology/ai-chatbot-control.html",
    description: "Collective Constitutional AI: Aligning a Language Model with Public Input",
  },
  {
    title: "The 3 Most Important AI Innovations of 2023",
    outlet: "Time Magazine",
    date: "Dec 2023",
    link: "https://time.com/6547982/3-big-ai-innovations-from-2023/",
    description: "Collective Constitutional AI: Aligning a Language Model with Public Input",
  },
  {
    title: "What if Dario Amodei is Right About AI?",
    outlet: "The Ezra Klein Show",
    date: "Apr 2024",
    link: "https://www.nytimes.com/2024/04/12/opinion/ezra-klein-podcast-dario-amodei.html",
    description: "Measuring the Persuasiveness of Language Models",
  },
  {
    title: "The Unpredictable Abilities Emerging From Large AI Models",
    outlet: "Quanta Magazine",
    date: "Mar 2023",
    link: "https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/",
    description: "Predictability and Surprise in Large Generative Models",
  },
];

interface MediaHighlightsProps {
  isOpen: boolean;
  onToggle: () => void;
  gradient: string;
  hoverGradient: string;
  textColor: string;
}

export const MediaHighlights = ({ isOpen, onToggle, gradient, hoverGradient, textColor }: MediaHighlightsProps) => {
  const getIconForPaper = useIconForPaper();

  return (
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className={`h-0.5 ${gradient}`}></div>
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Sparkles className={`h-6 w-6 ${textColor}`} />
            <span className={textColor}>highlights</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${textColor} ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <CardContent>
          <ul className="space-y-4">
            {highlights.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg ${hoverGradient} transition-all duration-200 border border-orange-100 hover:shadow-md group whitespace-normal`}
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 break-words">{item.title}</h4>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <p className="text-gray-600 text-xs flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-gray-100 rounded-full border text-gray-500 font-light">
                        {item.outlet}
                      </span>
                    </p>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 leading-relaxed flex items-start gap-2 mt-2">
                      {(() => {
                        const iconInfo = getIconForPaper(item.description);
                        return iconInfo ? <iconInfo.icon className={`w-4 h-4 ${iconInfo.color} flex-shrink-0 mt-1`} /> : null;
                      })()}
                      <span className="flex-1">{item.description}</span>
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
};
