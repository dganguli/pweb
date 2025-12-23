import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { ResearchSectionProps, Paper } from '../../types';
import { RoleBadge } from './RoleBadge';

export const ResearchSection = ({
  title,
  icon: Icon,
  gradient,
  hoverGradient,
  papers,
  textColor,
  isOpen,
  onToggle
}: ResearchSectionProps) => (
  <div className="transform transition-transform">
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className={`h-0.5 ${gradient}`}></div>
      
      <button 
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Icon className={`h-6 w-6 ${textColor}`} />
            <span className={textColor}>{title}</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${textColor} ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <CardContent>
          <ul className="space-y-4">
            {papers.map((paper: Paper, i: number) => (
              <li key={i}>
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg ${hoverGradient} transition-all duration-200 border border-orange-100 hover:shadow-md group whitespace-normal`}
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 break-words">{paper.title}</h4>
                 <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <p className="text-gray-600 text-xs flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-gray-100 rounded-full border text-gray-500 font-light break-words">
                        {paper.details.split(',')[0]}
                      </span>
                      <RoleBadge role={paper.role} />
                    </p>
                    <span className="text-sm text-gray-500">
                      {paper.details.split(',')[1]?.trim()}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  </div>
);