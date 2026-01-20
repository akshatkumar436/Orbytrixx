import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Instagram, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:contact@orbytrixx.com' },
    { name: 'X (Twitter)', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/orbytrixx' },
    { name: 'Instagram', icon: < Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/orbytrixx/' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/orbytrixx' },
  ];

  const services = [
    { name: 'Web Development', slug: 'web-development' },
    { name: 'Autonomous AI', slug: 'autonomous-ai' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'Video & AI Ads', slug: 'video-ai-ads' },
    { name: 'Graphic Design', slug: 'graphic-designing' },
    { name: 'Data Analysis', slug: 'data-analysis' },
    { name: 'Martech Solutions', slug: 'martech-solutions' },
  ];

  return (
    <footer className="bg-brand-bg border-t border-brand-primary/10 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-24 relative z-10">
          {/* 1. ORBYTRIXX Section (Brand) */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 mb-8 select-none cursor-default min-h-[40px]">
              <LogoIcon className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-[0.3em] text-brand-text">ORBYTRIXX</span>
                <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest -mt-1">Designed to Build. Built to Scale.</span>
              </div>
            </div>
            <p className="text-brand-secondary text-sm leading-relaxed mb-10 max-w-sm font-medium">
              Architecting high-performance digital ecosystems optimized for speed and built for global scale. Excellence in execution.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target={social.name === 'Email' ? '_self' : '_blank'} 
                  rel="noopener noreferrer"
                  aria-label={`${social.name === 'Email' ? 'Contact' : 'Follow'} Orbytrixx on ${social.name}`}
                  className="text-brand-secondary/60 hover:text-brand-primary hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation Section */}
          <div className="flex flex-col">
            <h4 className="text-brand-text font-black mb-8 uppercase tracking-[0.2em] text-[10px] cursor-default select-none h-[40px] flex items-center">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Careers</Link></li>
              <li><a href="#/contact" target="_blank" rel="noopener noreferrer" className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Connect</a></li>
            </ul>
          </div>

          {/* 3. Services Section */}
          <div className="flex flex-col">
            <h4 className="text-brand-text font-black mb-8 uppercase tracking-[0.2em] text-[10px] cursor-default select-none h-[40px] flex items-center">Services</h4>
            <ul className="grid grid-cols-1 gap-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={`/services?service=${service.slug}`} 
                    className="text-brand-secondary text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center text-brand-secondary/50 text-[9px] uppercase tracking-[0.3em] font-black">
          <p>© 2026 Orbytrixx. Excellence in Execution.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent -z-10" />
    </footer>
  );
};

export default Footer;