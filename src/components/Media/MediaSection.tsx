import { Card, CardContent } from '@/components/ui/card';
import { Archive, ChevronDown } from 'lucide-react';
import { getAllMediaItems } from '../../data/researchContent';
import { useIconForPaper } from '../../hooks/useIconForPaper';

// Titles of highlighted items to filter out
const highlightedTitles = [
  "It's their job to keep AI from destroying everything",
  "What if We Could All Control AI?",
  "The 3 Most Important AI Innovations of 2023",
  "What if Dario Amodei is Right About AI?",
  "The Unpredictable Abilities Emerging From Large AI Models",
];

interface MediaSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  gradient: string;
  hoverGradient: string;
  textColor: string;
}

export const MediaSection = ({ isOpen, onToggle, gradient, hoverGradient, textColor }: MediaSectionProps) => {
  const getIconForPaper = useIconForPaper();
  const allMediaItems = getAllMediaItems();
  // Filter out highlighted items
  const mediaItems = allMediaItems.filter(item => !highlightedTitles.includes(item.title));

  return (
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className={`h-0.5 ${gradient}`}></div>
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Archive className={`h-6 w-6 ${textColor}`} />
            <span className={textColor}>all coverage ({mediaItems.length})</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${textColor} ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <CardContent>
          <ul className="space-y-4">
            {mediaItems.map((item, i) => (
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
                        const iconInfo = item.description ? getIconForPaper(item.description) : null;
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