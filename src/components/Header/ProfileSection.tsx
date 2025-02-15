import { SocialLinks } from '../SocialLinks';

export const ProfileSection = () => (
  <div className="flex flex-col items-center gap-8">
    <div className="relative w-48">
      <div className="absolute inset-0 bg-yellow-400 rounded-full scale-110 opacity-75 blur-sm"></div>
      <img 
        src="dg2.png"
        alt="Deep Ganguli"
        className="rounded-full shadow-lg w-48 h-48 object-cover relative z-10 transition-all duration-300"
      />
    </div>
    
    <div className="text-center z-10">
      <h1 className="text-5xl font-black mb-4 text-white drop-shadow-lg">
        deep ganguli
      </h1>
      <p className="text-2xl mb-2 font-light text-yellow-100">
        research scientist at anthropic
      </p>
      <SocialLinks />
    </div>
  </div>
);

