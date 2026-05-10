import { COMPANY } from "@/lib/contact";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo = ({ size = 120, className = "" }: AnimatedLogoProps) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer rotating ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "spin-slow 8s linear infinite" }}
      >
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A74FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#69C3FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A74FF" stopOpacity="1" />
          </linearGradient>
          <filter id="glowOuter">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Dashed rotating ring */}
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          filter="url(#glowOuter)"
        />
        {/* Electric arc dots on ring */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 60 + 56 * Math.cos(rad);
          const y = 60 + 56 * Math.sin(rad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2.5"
              fill="#69C3FF"
              opacity="0.9"
              filter="url(#glowOuter)"
            />
          );
        })}
      </svg>

      {/* Inner counter-rotating ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "spin-reverse 5s linear infinite" }}
      >
        <defs>
          <linearGradient id="innerRingGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0047FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4FC3FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="44"
          fill="none"
          stroke="url(#innerRingGrad)"
          strokeWidth="1"
          strokeDasharray="3 8"
        />
      </svg>

      {/* Lightning bolt pulse ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glowBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0A74FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0A74FF" stopOpacity="0" />
          </radialGradient>
          <filter id="bolt-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow circle */}
        <circle cx="60" cy="60" r="40" fill="url(#glowBg)" />

        {/* 4 lightning bolts at cardinal positions, rotating */}
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 60 + 49 * Math.cos(rad - Math.PI / 2);
          const cy = 60 + 49 * Math.sin(rad - Math.PI / 2);
          return (
            <g
              key={i}
              transform={`translate(${cx}, ${cy}) rotate(${angle})`}
              style={{
                animation: `bolt-pulse 2s ease-in-out ${i * 0.5}s infinite`,
              }}
            >
              <path
                d="M0,-5 L-2,0 L1,0 L-1,5 L3,0 L0,0 Z"
                fill="#69C3FF"
                filter="url(#bolt-glow)"
              />
            </g>
          );
        })}
      </svg>

      {/* Center logo image */}
      <div
        className="relative z-10 rounded-full overflow-hidden border border-blue-500/40"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          background: "hsl(220 55% 6% / 0.9)",
          boxShadow:
            "0 0 20px -4px rgba(10, 116, 255, 0.6), inset 0 0 15px -5px rgba(10, 116, 255, 0.2)",
        }}
      >
        <img
          src={COMPANY.logo}
          alt={COMPANY.name}
          className="w-full h-full object-contain p-1"
        />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes bolt-pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(var(--angle, 0deg)); }
          50% { opacity: 1; transform: scale(1.2) rotate(var(--angle, 0deg)); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
