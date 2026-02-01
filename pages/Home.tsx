import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Rocket, Layers, ArrowUpRight, Search, PencilRuler, Construction, 
  LineChart, ExternalLink, Globe, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoAnimation from '../components/LogoAnimation';

const Home: React.FC = () => {
  const features = [
    { title: "Intelligent Execution", icon: <Zap className="text-brand-primary" />, desc: "AI-driven workflows that prioritize precision and efficiency." },
    { title: "High-Performance", icon: <Rocket className="text-brand-primary" />, desc: "Built for speed. We deliver lightweight, ultra-fast digital solutions." },
    { title: "Scalable Core", icon: <Layers className="text-brand-primary" />, desc: "Architecture designed to grow seamlessly with your business needs." }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Deep dive into your business logic, user personas, and core technical requirements.",
      icon: <Search className="w-5 h-5" />
    },
    {
      number: "02",
      title: "Design",
      desc: "Creating high-fidelity, conversion-focused user interfaces and system architectures.",
      icon: <PencilRuler className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Build",
      desc: "Engineering scalable codebases with modern tech stacks and performance-first logic.",
      icon: <Construction className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Scale",
      desc: "Optimizing and expanding your digital asset to meet growing global demand.",
      icon: <LineChart className="w-5 h-5" />
    }
  ];

  const customerTags = ["Website Development", "Social Media Management", "AI Video Creation"];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid -z-10" />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <Link to="/" className="block cursor-pointer transition-transform hover:scale-[1.02] active:scale-95">
            <LogoAnimation showWordmark={false} />
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mt-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.15] text-brand-text">
              Designed to Build. <br /><span className="text-gradient">Built to Scale.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-brand-secondary text-base md:text-lg font-medium mb-12 leading-relaxed px-4">
              We design and build intelligent digital solutions that deliver clarity, performance, and long-term scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a 
                href="#/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-10 py-4 bg-brand-primary text-white rounded-full text-xs font-black uppercase tracking-widest transition-all hover:bg-brand-hover flex items-center justify-center active:scale-95 shadow-xl shadow-brand-primary/20"
              >
                Launch Your Project
                <ArrowUpRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-10 py-4 bg-slate-800/40 backdrop-blur hover:bg-slate-800/60 rounded-full text-xs font-black uppercase tracking-widest border border-brand-primary/10 text-brand-text transition-all flex items-center justify-center active:scale-95"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Happy Customer Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
            >
              Success Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-brand-text uppercase tracking-tight"
            >
              Our Happy <span className="text-gradient">Customer.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] overflow-hidden p-8 md:p-16 border-brand-primary/10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-2xl"
          >
            {/* Left: Customer Logo Area */}
            <div className="w-full lg:w-[40%] flex items-center justify-center">
              <img 
                src="https://duveworld.com/wp-content/uploads/2023/10/duve-logo-new.png" 
                alt="DuveWorld Logo" 
                className="w-full max-w-[200px] md:max-w-[280px] h-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/0A0F1E/3B82F6?text=DuveWorld";
                }}
              />
            </div>

            {/* Right: Customer Details */}
            <div className="flex-1 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter">DuveWorld</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Globe className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">Global Digital Presence</span>
                  </div>
                </div>
                <a 
                  href="https://duveworld.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/5 border border-brand-primary/10 hover:bg-brand-primary hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all group"
                >
                  Visit Website <ExternalLink className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <p className="text-brand-secondary text-base md:text-lg font-medium leading-relaxed italic">
                "DuveWorld is one of our early partners where we delivered a complete digital presence, including a modern website, social media management, and AI-driven video creation. This project reflects our ability to handle design, marketing, and intelligent content under one integrated workflow."
              </p>

              <div className="pt-6 border-t border-brand-primary/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Services Provided</h4>
                <div className="flex flex-wrap gap-3">
                  {customerTags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-primary/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-brand-text border border-brand-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 relative border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 glass-card rounded-[2.5rem] border-brand-primary/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary">
                  {/* Fix: use React.ReactElement<any> to avoid TS error on 'size' prop */}
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-xl font-black mb-4 text-brand-text uppercase tracking-tight">{feature.title}</h3>
                <p className="text-brand-secondary text-sm font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-brand-bg/50 border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tight text-brand-text"
          >
            Our <span className="text-gradient">Process.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 glass-card rounded-3xl border-brand-primary/5 text-left"
              >
                <span className="text-5xl font-black text-brand-primary/5 absolute top-4 right-6 select-none">{step.number}</span>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-black mb-3 text-brand-text uppercase tracking-tight">{step.title}</h3>
                <p className="text-brand-secondary text-xs font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border-brand-primary/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-brand-text mb-8 tracking-tight">Ready to Scale?</h2>
          <p className="text-brand-secondary text-lg mb-12 font-medium max-w-xl mx-auto">
            Our systems are built for long-term growth and high-performance execution. Let's start building yours.
          </p>
          <a 
            href="#/contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-5 bg-brand-primary text-white hover:bg-brand-hover rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-primary/30"
          >
            Start Conversion
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;