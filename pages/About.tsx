import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Code, TrendingUp, Sparkles, Calendar, Zap, Rocket, Globe } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      date: "December 2025",
      title: "The Beginning",
      desc: "Orbytrixx was founded in India by two engineers with a shared belief: great digital systems are built with discipline, not shortcuts.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "Early 2026",
      title: "Building from Zero",
      desc: "With zero clients and a clear engineering-first mindset, we focused on creating clean, scalable systems and refining our service framework.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      date: "Today",
      title: "Engineering in Motion",
      desc: "We now deliver web platforms, autonomous AI systems, digital marketing, and AI-driven media solutions — building every project with performance, clarity, and long-term scalability at the core.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      date: "The Road Ahead",
      title: "The Road Ahead",
      desc: "We continue to grow carefully, guided by technical excellence, integrity, and a long-term vision to become a trusted global digital partner.",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <div className="py-24 px-6 bg-brand-bg relative min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-40 -z-10" />
      
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-[10px] font-black mb-8 tracking-[0.4em] uppercase"
          >
            Engineering Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight text-brand-text tracking-tighter"
          >
            The <span className="text-gradient">Orbytrixx</span> Narrative.
          </motion.h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full opacity-30" />
        </section>

        {/* Core Content Narrative */}
        <section className="space-y-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 rounded-[3rem] border-brand-primary/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
            
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl text-brand-text font-semibold leading-relaxed">
                Orbytrixx is a service-based technology company founded on <span className="text-brand-primary">24 December 2025</span> in India by two engineers with a clear vision — to build high-performance digital systems with discipline, clarity, and long-term scalability.
              </p>
              
              <div className="h-px w-full bg-brand-primary/10" />

              <p className="text-brand-secondary text-lg leading-relaxed font-medium">
                We started with zero clients and a strong engineering-first mindset. From the beginning, our focus has been on designing and building digital solutions that are reliable, maintainable, and built to grow with businesses over time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-white/5 border border-brand-primary/5 rounded-2xl">
                  <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-3">Our Role</h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    We work as an engineering partner — not just a service provider. Every system we design is built with clean structure, performance focus, and future readiness.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-brand-primary/5 rounded-2xl">
                  <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-3">Our Philosophy</h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    At Orbytrixx, we believe that strong engineering creates lasting impact, clarity in systems leads to better business outcomes, and every solution should be built to scale from day one.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* New "Our Story" Timeline Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-brand-text uppercase tracking-widest">Our Story</h2>
            <div className="w-12 h-0.5 bg-brand-primary/40 mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto relative px-4">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-brand-primary/10 -translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((milestone, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-[31px] md:left-1/2 w-8 h-8 rounded-full bg-brand-bg border-2 border-brand-primary flex items-center justify-center text-brand-primary z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {/* Fix: use React.ReactElement<any> to avoid TS error on 'size' prop */}
                    {React.cloneElement(milestone.icon as React.ReactElement<any>, { size: 14 })}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                    <div className="glass-card p-6 rounded-2xl border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                      <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-2 block">
                        {milestone.date}
                      </span>
                      <h3 className="text-lg font-black text-brand-text mb-3 tracking-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-brand-secondary text-xs font-medium leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Capability Overview */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-brand-text uppercase tracking-widest">Global Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code />, text: "Web Development" },
              { icon: <Cpu />, text: "Autonomous AI Systems" },
              { icon: <TrendingUp />, text: "Digital Marketing" },
              { icon: <Sparkles />, text: "AI-Driven Media Solutions" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border-brand-primary/10 flex flex-col items-center text-center group hover:border-brand-primary/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {/* Fix: use React.ReactElement<any> to avoid TS error on 'size' prop */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text">{item.text}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section className="text-center pb-24 border-t border-brand-primary/10 pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <p className="text-brand-secondary text-lg font-medium leading-relaxed italic">
              "We are at the early stage of our journey, but we are building with integrity, technical excellence, and a long-term vision to become a trusted digital partner for growing businesses worldwide."
            </p>
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter uppercase">
                Designed to Build. <span className="text-brand-primary">Built to Scale.</span>
              </h3>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;