import { Header } from './components/Header';
import { About } from './components/About';
import { ResearchContainer } from './components/Research/ResearchContainer';
import { MediaContainer } from './components/Media/MediaContainer';
import { Footer } from './components/Footer';
import { StickyNav } from './components/Navigation/StickyNav';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <StickyNav />
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="research">
        <ResearchContainer />
      </section>
      <section id="media">
        <MediaContainer />
      </section>
      <Footer />
    </div>
  );
};

export default PersonalWebsite;