import { SocialLinks } from '../SocialLinks';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-orange-400 mt-4 text-white relative overflow-hidden">
      {/* Wave effect at the top */}
      <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,120 C600,0 1000,60 1200,120 L1200,0 L0,0 Z" fill="rgb(255 247 237)" />
      </svg>

      <div className="max-w-4xl mx-auto py-32 px-4 text-center relative">
        <div className="flex justify-center gap-6 mb-6">
          <SocialLinks />
        </div>
        <div className="text-sm opacity-90">
          <p className="mb-2">© 2024 deep ganguli</p>
          <p className="text-xs opacity-75">built with claude 3.5 sonnet</p>
        </div>
      </div>
    </footer>
  );
};