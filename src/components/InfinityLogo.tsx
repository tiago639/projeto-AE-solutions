import { useEffect, useRef } from "react";

interface InfinityLogoProps {
  size?: number;
  className?: string;
}

const InfinityLogo = ({ size = 160, className = "" }: InfinityLogoProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.animation = "draw-infinity 2.4s cubic-bezier(0.7,0,0.3,1) infinite alternate";
  }, []);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 0.55 }}
    >
      <svg
        viewBox="0 0 320 170"
        width={size}
        height={size * 0.55}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="inf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A74FF" />
            <stop offset="40%" stopColor="#69C3FF" />
            <stop offset="70%" stopColor="#0047FF" />
            <stop offset="100%" stopColor="#0A74FF" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="inf-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow suave para brilho de fundo */}
          <filter id="inf-glow-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
            </feMerge>
          </filter>
        </defs>

        {/* Raio horizontal que vira o ∞ — caminho de background (blur) */}
        <path
          d="M 160,85
             C 160,85 140,30 100,30
             C 55,30 25,55 25,85
             C 25,115 55,140 100,140
             C 140,140 160,85 160,85
             C 160,85 180,30 220,30
             C 265,30 295,55 295,85
             C 295,115 265,140 220,140
             C 180,140 160,85 160,85 Z"
          fill="none"
          stroke="#0A74FF"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#inf-glow-soft)"
          opacity="0.35"
        />

        {/* Caminho principal animado */}
        <path
          ref={pathRef}
          d="M 160,85
             C 160,85 140,30 100,30
             C 55,30 25,55 25,85
             C 25,115 55,140 100,140
             C 140,140 160,85 160,85
             C 160,85 180,30 220,30
             C 265,30 295,55 295,85
             C 295,115 265,140 220,140
             C 180,140 160,85 160,85 Z"
          fill="none"
          stroke="url(#inf-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          filter="url(#inf-glow)"
        />

        {/* Ponto de energia percorrendo o caminho */}
        <circle r="7" fill="#fff" filter="url(#inf-glow)" opacity="0.9">
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            path="M 160,85
                  C 160,85 140,30 100,30
                  C 55,30 25,55 25,85
                  C 25,115 55,140 100,140
                  C 140,140 160,85 160,85
                  C 160,85 180,30 220,30
                  C 265,30 295,55 295,85
                  C 295,115 265,140 220,140
                  C 180,140 160,85 160,85 Z"
          />
        </circle>

        {/* Relâmpago no centro */}
        <g transform="translate(151, 68)" opacity="0.85">
          <path
            d="M9,0 L0,14 L7,14 L2,26 L16,8 L9,8 Z"
            fill="#69C3FF"
            filter="url(#inf-glow)"
            style={{ animation: "bolt-flash 2.4s ease-in-out infinite" }}
          />
        </g>
      </svg>

      <style>{`
        @keyframes draw-infinity {
          0%   { stroke-dashoffset: var(--length, 900); opacity: 0.4; }
          40%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes bolt-flash {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default InfinityLogo;
