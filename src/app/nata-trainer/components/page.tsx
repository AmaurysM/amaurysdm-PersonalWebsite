export default function WaveBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            fill="rgba(191, 219, 254, 0.3)"
            d="M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z;
                M0,350 C320,450 420,250 720,350 C1020,450 1120,250 1440,350 L1440,800 L0,800 Z;
                M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z
              "
            />
          </path>
          <path
            fill="rgba(147, 197, 253, 0.3)"
            d="M0,500 C360,600 540,400 880,500 C1220,600 1300,400 1440,500 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,500 C360,600 540,400 880,500 C1220,600 1300,400 1440,500 L1440,800 L0,800 Z;
                M0,450 C360,550 540,350 880,450 C1220,550 1300,350 1440,450 L1440,800 L0,800 Z;
                M0,500 C360,600 540,400 880,500 C1220,600 1300,400 1440,500 L1440,800 L0,800 Z
              "
            />
          </path>
          <path
            fill="rgba(96, 165, 250, 0.4)"
            d="M0,600 C400,700 600,500 960,600 C1320,700 1380,500 1440,600 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,600 C400,700 600,500 960,600 C1320,700 1380,500 1440,600 L1440,800 L0,800 Z;
                M0,550 C400,650 600,450 960,550 C1320,650 1380,450 1440,550 L1440,800 L0,800 Z;
                M0,600 C400,700 600,500 960,600 C1320,700 1380,500 1440,600 L1440,800 L0,800 Z
              "
            />
          </path>
        </svg>
      </div>
    );
}