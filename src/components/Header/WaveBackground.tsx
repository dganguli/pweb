export const WaveBackground = () => (
  <div className="absolute inset-0 w-full h-full">
    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z" 
        fill="rgba(255,255,255,0.1)"
      >
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z;
                  M0,20 C200,0 400,40 600,30 C800,20 1000,40 1200,0 L1200,120 L0,120 Z;
                  M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z"
        />
      </path>
      <path 
        d="M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z" 
        fill="rgba(255,255,255,0.05)"
      >
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values="M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z;
                  M0,40 C300,20 600,60 900,20 C1000,30 1100,50 1200,20 L1200,120 L0,120 Z;
                  M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z"
        />
      </path>
    </svg>
  </div>
);