import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Simplified Static Orbit - Thicker for small scale visibility */}
        <ellipse 
          cx="50" 
          cy="50" 
          rx="46" 
          ry="18" 
          transform="rotate(-25 50 50)" 
          stroke="#3B82F6" 
          strokeWidth="8" 
          strokeOpacity="0.9"
          fill="none"
        />

        {/* Simplified X - Sharp and clean, using primary text color */}
        <path
          d="M32 32L68 68"
          stroke="#F8FAFC"
          strokeWidth="10"
          strokeLinecap="square"
        />
        <path
          d="M68 32L32 68"
          stroke="#F8FAFC"
          strokeWidth="10"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default LogoIcon;