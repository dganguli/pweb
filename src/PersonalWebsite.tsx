import { useState } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { ResearchSection } from './components/Research/ResearchSection';
import { MediaSection } from './components/Media/MediaSection';
import { researchSections } from './data/researchData';
import { Footer } from './components/Footer';


const PersonalWebsite = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openMediaSection, setOpenMediaSection] = useState(false);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <Header />
      {/* About */}
      <About />

      {/* Research */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center py-8">
          <h2 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            research
          </h2>
        </div>

        <div className="space-y-4">
          {researchSections.map((section) => (
            <ResearchSection
              key={section.id}
              {...section}
              isOpen={openSection === section.id}
              onToggle={() => setOpenSection(openSection === section.id ? null : section.id)}
            />
          ))}
        </div>
      </div>

      {/* Media  */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center pb-8">
          <h2 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            media
          </h2>
        </div>

        <MediaSection
          isOpen={openMediaSection}
          onToggle={() => setOpenMediaSection(!openMediaSection)}
        />
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default PersonalWebsite;