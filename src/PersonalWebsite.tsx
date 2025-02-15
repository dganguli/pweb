import { Header } from './components/Header';
import { About } from './components/About';
import { ResearchContainer } from './components/Research/ResearchContainer';
import { MediaContainer } from './components/Media/MediaContainer';
import { Footer } from './components/Footer';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <About />
      <ResearchContainer />
      <MediaContainer />
      <Footer />
    </div>
  );
};

export default PersonalWebsite;