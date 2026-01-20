import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoAnimation from './LogoAnimation';

interface IntroSplashProps {
  onLaunch: () => void;
}

const IntroSplash: React.FC<IntroSplashProps> = ({ onLaunch }) => {
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-24"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLaunch();
            }}
            className="group relative flex items-center gap-6 px-12 py-5 bg-brand-primary rounded-full transition-all duration-700 active:scale-95 shadow-2xl shadow-brand-primary/30"
          >
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white transition-colors">Launch Experience</span>
            <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all" />
          </button>
        </motion.div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          onLaunch();
        }}
        className="absolute bottom-12 text-[10px] text-brand-secondary/40 hover:text-brand-text uppercase tracking-[0.4em] font-black transition-colors"
      >
        Skip Intro
      </button>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20vw_rgba(59,130,246,0.05)]" />
    </motion.div>
  );
}; export default IntroSplash;