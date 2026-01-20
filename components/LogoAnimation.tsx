import React from 'react';
import { motion } from 'framer-motion';

interface LogoAnimationProps {
  showWordmark?: boolean;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ showWordmark = true }) => {
  // Letters for the wordmark with individual timing
  const letters = "ORBYTRIXX".split("");

  return (
    <div className={`relative flex flex-col items-center justify-center ${showWordmark ? 'py-12' : 'py-4'}`}>
      {/* The Central Iconic Mark */}
      <div className={`relative w-24 h-24 md:w-32 md:h-32 ${showWordmark ? 'mb-10' : 'mb-4'}`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible">
          {/* Static Tilted Orbit - Back Half */}
          <g transform="rotate(-25 50 50)">
            <path
              d="M 2 50 A 48 20 0 0 1 98 50"
              stroke="#3B82F6"
              strokeWidth="3.0"
              strokeOpacity="0.25"
              fill="none"
            />
          </g>

          {/* Symmetrical Refined X */}
          <motion.path
            d="M35 35L65 65"
            stroke="#F8FAFC"
            strokeWidth="5.5"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M65 35L50 50"
            stroke="#3B82F6"
            strokeWidth="5.5"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          />
          <motion.path
            d="M50 50L35 65"
            stroke="#F8FAFC"
            strokeWidth="5.5"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          />

          {/* Static Tilted Orbit - Front Half */}
          <g transform="rotate(-25 50 50)">
            <path
              d="M 98 50 A 48 20 0 0 1 2 50"
              stroke="#3B82F6"
              strokeWidth="3.0"
              strokeOpacity="0.6"
              fill="none"
            />
          </g>
        </svg>

        {/* Ambient glow tuned for blue theme */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-brand-primary/20 blur-3xl -z-10 scale-150"
        />
      </div>

      {showWordmark && (
        <>
          {/* The Wordmark Reveal */}
          <div className="flex items-center">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + (i * 0.08), 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                className={`text-4xl md:text-5xl font-black tracking-widest text-brand-text px-0.5 md:px-1 ${
                  i >= 7 ? 'text-brand-primary' : ''
                }`}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Horizontal Progress Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 2, ease: "circOut" }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent mt-6 w-64 max-w-full"
          />
        </>
      )}
    </div>
  );
};

export default LogoAnimation;