import { WaveBackground } from './WaveBackground';
import { ProfileSection } from './ProfileSection';

export const Header = () => (
  <header className="bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-400 text-white relative overflow-hidden">
    <WaveBackground />
    <div className="container max-w-4xl mx-auto px-4 pt-16 pb-32 relative">
      <ProfileSection />
    </div>
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C600,120 1000,60 1200,0 L1200,120 L0,120 Z" fill="rgb(255 247 237)" />
    </svg>
  </header>
);