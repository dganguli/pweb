import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ChevronDown } from 'lucide-react';

// Curated highlights - the most significant media coverage
export const highlights = [
  {
    title: "It's their job to keep AI from destroying everything",
    outlet: "The Verge",
    date: "Dec 2025",
    link: "https://www.theverge.com/ai-artificial-intelligence/836335/anthropic-societal-impacts-team-ai-claude-effects",
  },
  {
    title: "What if We Could All Control AI?",
    outlet: "The New York Times",
    date: "Oct 2023",
    link: "https://www.nytimes.com/2023/10/17/technology/ai-chatbot-control.html",
  },
  {
    title: "The 3 Most Important AI Innovations of 2023",
    outlet: "Time Magazine",
    date: "Dec 2023",
    link: "https://time.com/6547982/3-big-ai-innovations-from-2023/",
  },
  {
    title: "What if Dario Amodei is Right About AI?",
    outlet: "The Ezra Klein Show",
    date: "Apr 2024",
    link: "https://www.nytimes.com/2024/04/12/opinion/ezra-klein-podcast-dario-amodei.html",
  },
  {
    title: "The Unpredictable Abilities Emerging From Large AI Models",
    outlet: "Quanta Magazine",
    date: "Mar 2023",
    link: "https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/",
  },
];

interface MediaHighlightsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MediaHighlights = ({ isOpen, onToggle }: MediaHighlightsProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className="h-0.5 bg-pink-500"></div>
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-pink-500">highlights</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform text-pink-500 ${isOpen ? 'transform rotate-180' : ''}`} />
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
                  className="block p-4 rounded-lg hover:bg-pink-50 transition-all duration-200 border border-orange-100 hover:shadow-md group whitespace-normal"
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
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
};
