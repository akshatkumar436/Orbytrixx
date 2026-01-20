import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Why Us', path: '/why-us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-bg/95 backdrop-blur-xl border-b border-brand-primary/10 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none cursor-pointer">
            <LogoIcon className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-110" />
            <span className="text-base md:text-lg font-black tracking-[0.25em] text-brand-text leading-none mt-1">ORBYTRIXX</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary ${
                    location.pathname === link.path ? 'text-brand-text' : 'text-brand-secondary'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-brand-primary"
                    />
                  )}
                </Link>
              ))}
              <a 
                href="#/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:bg-brand-hover active:scale-95 shadow-lg shadow-brand-primary/20"
              >
                Connect
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-primary p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-bg border-b border-brand-primary/10"
          >
            <div className="px-6 pt-4 pb-10 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#/contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-6 bg-brand-primary text-white px-4 py-4 rounded-full font-black uppercase tracking-widest text-xs active:scale-95"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;