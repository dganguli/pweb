import { Card, CardContent } from '@/components/ui/card';
import { Newspaper, ChevronDown } from 'lucide-react';
import { getAllMediaItems } from '../../data/researchContent';
import { useIconForPaper } from '../../hooks/useIconForPaper';

interface MediaSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MediaSection = ({ isOpen, onToggle }: MediaSectionProps) => {
  const getIconForPaper = useIconForPaper();
  const mediaItems = getAllMediaItems();

  return (
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-pink-500 to-orange-400"></div>
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Newspaper className="h-6 w-6 text-pink-500" />
            <span className="text-pink-500">selected press</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform text-pink-500 ${isOpen ? 'transform rotate-180' : ''}`} />
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
                  className="block p-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 transition-all duration-200 border border-pink-50 hover:shadow-md group whitespace-normal"
                >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 break-words">{item.title}</h4>
                  <span className="text-sm text-gray-500 shrink-0">{item.date}</span>
                </div>
                  <p className="text-xs mb-1 flex items-center gap-2">
                    <span className="px-2 py-1 bg-gray-100 border rounded-full text-gray-700 font-light">
                      {item.outlet}
                    </span>
                  </p>
                  {item.description && (
                    <p className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
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