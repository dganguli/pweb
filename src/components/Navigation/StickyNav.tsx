import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { researchSections } from '../../data/researchContent';
import { mediaSections, getOpenMediaSection } from '../Media/MediaContainer';
import { getOpenResearchSection } from '../Research/ResearchContainer';

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'research', label: 'research', hasDropdown: 'research' },
  { id: 'media', label: 'media', hasDropdown: 'media' },
];

export const StickyNav = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      // Check if at bottom of page - if so, highlight last section
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    // Check scroll position on mount (browser may restore scroll position on refresh)
    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleResearchClick = (categoryId: string) => {
    setOpenDropdown(null);

    // If this section is already open, just scroll to it
    if (getOpenResearchSection() === categoryId) {
      const element = document.getElementById(`research-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Close ALL sections (both research and media)
    window.dispatchEvent(new CustomEvent('closeResearchSections'));
    window.dispatchEvent(new CustomEvent('closeMediaSections'));

    // Wait for close animations, then open (container handles scrolling)
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openResearchCategory', { detail: categoryId }));
    }, 320);
  };

  const handleMediaClick = (sectionId: string) => {
    setOpenDropdown(null);

    // If this section is already open, just scroll to it
    if (getOpenMediaSection() === sectionId) {
      const element = document.getElementById(`media-${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Close ALL sections (both research and media)
    window.dispatchEvent(new CustomEvent('closeResearchSections'));
    window.dispatchEvent(new CustomEvent('closeMediaSections'));

    // Wait for close animations, then open (container handles scrolling)
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openMediaSection', { detail: sectionId }));
    }, 320);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-orange-50/85 backdrop-blur-md shadow-sm border-b border-orange-200/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center gap-2 sm:gap-3" ref={dropdownRef}>
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.hasDropdown ? null : item.hasDropdown)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.hasDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Research Dropdown */}
                  {item.hasDropdown === 'research' && (
                    <div
                      className={`absolute top-full mt-2 transition-all duration-200 left-0 ${
                        openDropdown === 'research'
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-orange-100 p-2 w-48">
                        <div className="flex flex-col gap-1">
                          {researchSections.map((section) => {
                            const Icon = section.icon;
                            return (
                              <button
                                key={section.id}
                                onClick={() => handleResearchClick(section.id)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left hover:bg-gray-50 ${section.textColor}`}
                              >
                                <Icon className="w-4 h-4" />
                                <span>{section.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Media Dropdown */}
                  {item.hasDropdown === 'media' && (
                    <div
                      className={`absolute top-full mt-2 transition-all duration-200 right-0 ${
                        openDropdown === 'media'
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-orange-100 p-2 w-48">
                        <div className="flex flex-col gap-1">
                          {mediaSections.map((section) => {
                            const Icon = section.icon;
                            return (
                              <button
                                key={section.id}
                                onClick={() => handleMediaClick(section.id)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left hover:bg-gray-50 ${section.textColor}`}
                              >
                                <Icon className="w-4 h-4" />
                                <span>{section.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
