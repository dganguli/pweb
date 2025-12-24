import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

// Curated highlights - the most significant media coverage
const highlights = [
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

export const MediaHighlights = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg rounded-xl overflow-hidden">
      <div className="h-0.5 bg-gradient-to-r from-pink-500 to-orange-400"></div>
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 text-xl mb-4">
          <Sparkles className="h-5 w-5 text-pink-500" />
          <span className="text-pink-500">highlights</span>
        </div>
        <CardContent className="p-0">
          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 transition-all duration-200 border border-pink-100 hover:shadow-md group"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-4">
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-700">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2 py-0.5 bg-gray-100 border rounded-full text-gray-600">
                        {item.outlet}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
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
