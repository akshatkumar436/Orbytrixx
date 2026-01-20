
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, TrendingUp, Users, Smartphone } from 'lucide-react';

const WhyOrbytrixx: React.FC = () => {
  const advantages = [
    {
      title: "Performance First",
      icon: <Zap className="w-6 h-6" />,
      desc: "Every script and pixel optimized for milliseconds, ensuring a seamless user experience."
    },
    {
      title: "Vetted Quality",
      icon: <Shield className="w-6 h-6" />,
      desc: "Robust QA processes ensure battle-tested and secure releases at every stage."
    },
    {
      title: "Massive Scale",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Future-ready architectures that grow seamlessly with your user base from day one."
    },
    {
      title: "Client Centric",
      icon: <Users className="w-6 h-6" />,
      desc: "Clear, consistent communication focused on solving specific business challenges."
    },
    {
      title: "Agile Implementation",
      icon: <Clock className="w-6 h-6" />,
      desc: "Rapid concept-to-launch methodology to give you the first-mover advantage."
    },
    {
      title: "Device Optimal",
      icon: <Smartphone className="w-6 h-6" />,
      desc: "Flawless mobile-first experiences across all modern screen resolutions."
    }
  ];

  return (
    <div className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 text-brand-text"
          >
            Designed to Build. <br /><span className="text-gradient">Built to Scale.</span>
          </motion.h1>
          <p className="text-brand-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            We design and build intelligent digital solutions that deliver clarity, performance, and long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="glass-card p-10 rounded-[2.5rem] border-brand-primary/10 hover:border-brand-primary/40 transition-all duration-300 shadow-sm"
            >
              <div className="mb-6 text-brand-primary">
                {adv.icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-brand-text tracking-tight">{adv.title}</h3>
              <p className="text-brand-secondary text-sm font-medium leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 mb-20">
          <h2 className="text-2xl md:text-3xl font-black mb-16 text-center uppercase tracking-widest text-brand-text">The Scalability Benchmark</h2>
          <div className="overflow-x-auto glass-card rounded-[2.5rem] border-brand-primary/10 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-brand-primary/10 bg-white/40">
                  <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-brand-secondary">Metric</th>
                  <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-brand-text/50 text-center">Standard Agency</th>
                  <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-brand-primary text-center">Orbytrixx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/10">
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="py-8 px-8 text-xs font-bold text-brand-text uppercase tracking-wider">Build Time</td>
                  <td className="py-8 px-8 text-brand-secondary/50 text-xs font-medium text-center italic">12 - 24 Weeks</td>
                  <td className="py-8 px-8 text-brand-primary text-xs font-black text-center uppercase tracking-widest">4 - 8 Weeks</td>
                </tr>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="py-8 px-8 text-xs font-bold text-brand-text uppercase tracking-wider">Performance</td>
                  <td className="py-8 px-8 text-brand-secondary/50 text-xs font-medium text-center italic">65 - 80 Score</td>
                  <td className="py-8 px-8 text-brand-primary text-xs font-black text-center uppercase tracking-widest">95 - 100 Score</td>
                </tr>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="py-8 px-8 text-xs font-bold text-brand-text uppercase tracking-wider">Technology</td>
                  <td className="py-8 px-8 text-brand-secondary/50 text-xs font-medium text-center italic">Conventional</td>
                  <td className="py-8 px-8 text-brand-primary text-xs font-black text-center uppercase tracking-widest">Modern Edge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}; export default WhyOrbytrixx;
