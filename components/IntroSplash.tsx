
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation';

interface IntroSplashProps {
  onLaunch: () => void;
}

const IntroSplash: React.FC<IntroSplashProps> = ({ onLaunch }) => {
  useEffect(() => {
    // Automatically transition to the home page after 5 seconds
    // This allows the full logo reveal and subtitle animation to play (approx 4s total)
    // plus a small buffer for the user to see the final static state.
    const timer = setTimeout(() => {
      onLaunch();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLaunch]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg overflow-hidden cursor-pointer"
      onClick={onLaunch}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[180px] -z-10"
      />

      <div className="relative flex flex-col items-center text-center px-6">
        <LogoAnimation />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-4"
        >
          <p className="text-brand-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Designed to Build. Built to Scale.
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20vw_rgba(59,130,246,0.05)]" />
    </motion.div>
  );
};

export default IntroSplash;
