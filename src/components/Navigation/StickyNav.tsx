import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { researchSections } from '../../data/researchContent';

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'research', label: 'research', hasDropdown: true },
  { id: 'media', label: 'media' },
];

export const StickyNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
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
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    // Immediately highlight the clicked section
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

  const handleCategoryClick = (categoryId: string) => {
    setIsDropdownOpen(false);

    // First close any open section
    window.dispatchEvent(new CustomEvent('closeResearchSections'));

    // Wait for close animation, then open new section and scroll
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openResearchCategory', { detail: categoryId }));

      setTimeout(() => {
        const element = document.getElementById(`research-${categoryId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }, 320); // Wait for close animation (300ms transition)
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-md border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base sm:text-lg font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            deep ganguli
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.id} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full mt-2 transition-all duration-200 right-0 sm:right-0 ${
                      isDropdownOpen
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
                              onClick={() => handleCategoryClick(section.id)}
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
