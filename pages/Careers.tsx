import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Cpu, Layers, Send, FileText, Trophy, Zap, Search, UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';
import CountryCodeSelector from '../components/CountryCodeSelector';

const Careers: React.FC = () => {
  const initialFormData = {
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    role: 'CHOOSE MISSION',
    portfolio: '',
    summary: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const errs: Record<string, string> = {};
    
    if (!formData.name.trim()) errs.name = "Full name is required";
    
    if (!formData.email) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email (e.g., name@domain.com).";
    }

    if (!formData.countryCode) errs.countryCode = "Code required";
    
    if (!formData.phone) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    
    if (!formData.company.trim()) errs.company = "Current company is required";
    if (formData.role === 'CHOOSE MISSION') errs.role = "Please select a role";
    if (!formData.portfolio.trim()) errs.portfolio = "Portfolio link is required";
    if (!formData.summary.trim()) errs.summary = "Performance summary is required";
    
    return errs;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isValid) return;

  const payload = {
    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    subject: "New Career Application — Orbytrixx",
    from_name: "Orbytrixx Careers",
    name: formData.name,
    email: formData.email,
    phone: `${formData.countryCode} ${formData.phone}`,
    company: formData.company,
    role: formData.role,
    portfolio: formData.portfolio,
    summary: formData.summary,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      alert("Application submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
};


  const handleReset = () => {
    setFormData(initialFormData);
    setTouched({});
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: digitsOnly }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
    setTouched(prev => ({ ...prev, phone: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched(prev => ({ ...prev, [e.target.id]: true }));
  };

  const openRoles = [
    {
      id: "fe-01",
      title: "Senior Frontend Engineer",
      team: "Execution",
      location: "Remote / NY",
      type: "Full-Time",
      desc: "Architecting high-performance React interfaces with millisecond-precision logic."
    },
    {
      id: "ai-01",
      title: "AI Solutions Architect",
      team: "Intelligence",
      location: "Remote",
      type: "Full-Time",
      desc: "Integrating advanced LLMs and neural logic into scalable enterprise workflows."
    },
    {
      id: "ux-01",
      title: "UI/UX Motion Designer",
      team: "Creative",
      location: "Remote",
      type: "Full-Time",
      desc: "Defining the visual and behavioral language of futuristic digital ecosystems."
    },
    {
      id: "cc-01",
      title: "Content Specialist",
      team: "Expansion",
      location: "Remote",
      type: "Coming Soon",
      desc: "Synthesizing technical concepts into high-impact digital narratives.",
      isFuture: true
    }
  ];

  const benefits = [
    { title: "Velocity Culture", icon: <Zap />, desc: "Focus on deep work and high-output execution over meetings." },
    { title: "Global Network", icon: <Layers />, desc: "Collaborate with top-tier engineers and designers worldwide." },
    { title: "AI-First Tools", icon: <Cpu />, desc: "Access the most advanced internal AI toolsets for maximum efficiency." },
    { title: "Continuous Standard", icon: <Trophy />, desc: "Defining new industry benchmarks through rigorous innovation." }
  ];

  const hiringSteps = [
    { num: "01", title: "Technical Application", desc: "Submit your core stack and portfolio demonstrating performance." },
    { num: "02", title: "Logic Assessment", desc: "A deep dive into your technical reasoning and problem-solving velocity." },
    { num: "03", title: "Cultural Orbit", desc: "Alignment check with our core values of intelligence and speed." },
    { num: "04", title: "Onboarding Launch", desc: "Joining the collective to engineer the next standard." }
  ];

  const inputClasses = (id: string) => `w-full bg-white border ${touched[id] && errors[id] ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-[#9CA3AF]`;

  return (
    <div className="py-24 px-6 bg-brand-bg relative min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-40 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-[10px] font-black mb-8 tracking-[0.4em] uppercase"
          >
            Designed to Build. Built to Scale.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight text-brand-text tracking-tighter"
          >
            Join the <span className="text-gradient">Orbit.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            We design and build intelligent digital solutions that deliver clarity, performance, and long-term scalability.
          </motion.p>
        </section>

        {/* Culture / Why Us */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] border-brand-primary/10 flex flex-col items-center text-center group hover:border-brand-primary/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {React.cloneElement(b.icon as React.ReactElement, { size: 20 })}
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-brand-text">{b.title}</h4>
                <p className="text-brand-secondary text-[11px] font-bold uppercase tracking-tight leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Roles */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-black text-brand-text mb-4">Open Missions</h2>
              <p className="text-brand-secondary text-sm font-medium">Select your specialization area.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role) => (
              <motion.div
                key={role.id}
                whileHover={{ y: -5 }}
                className={`glass-card p-10 rounded-[2.5rem] border-brand-primary/10 flex flex-col justify-between ${role.isFuture ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-[9px] font-black uppercase tracking-widest">
                      {role.team}
                    </span>
                    <span className="text-[9px] font-bold text-brand-secondary/60 uppercase tracking-widest">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-brand-text mb-4 tracking-tight">{role.title}</h3>
                  <p className="text-brand-secondary text-sm font-medium leading-relaxed mb-8">
                    {role.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/40">{role.type}</span>
                  {!role.isFuture && (
                    <button 
                      onClick={() => {
                        const form = document.getElementById('apply-form');
                        form?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group cursor-pointer"
                    >
                      Initialize Application <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How We Hire */}
        <section className="py-24 border-y border-brand-primary/10 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-brand-text uppercase tracking-widest">Onboarding Framework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-7 left-20 right-20 h-[1.5px] bg-brand-primary/10 -z-10" />
            {hiringSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-bg border-2 border-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-black mb-6 z-10">
                  {step.num}
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-text mb-3">{step.title}</h4>
                <p className="text-brand-secondary text-[10px] font-medium leading-relaxed max-w-[160px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="max-w-4xl mx-auto mb-32">
          <div className="glass-card rounded-[3rem] p-10 md:p-16 border-brand-primary/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center bg-[#141C2D]/90">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-black mb-4 text-brand-text">Application Logged.</h2>
                  <p className="text-brand-secondary font-medium mb-10">Our technical lead will review your profile within 48 hours.</p>
                  <button 
                    onClick={handleReset}
                    className="text-brand-primary font-black text-xs uppercase tracking-[0.3em] underline decoration-2 underline-offset-8 cursor-pointer"
                  >
                    Resubmit or New Role
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-black text-brand-text mb-10 text-center tracking-tight">Initiate Global Application</h3>
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Identifier</label>
                        <input 
                          required 
                          id="name"
                          placeholder="FULL NAME" 
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClasses('name')} 
                        />
                        {touched.name && errors.name && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Communication</label>
                        <input 
                          required 
                          id="email"
                          type="email" 
                          placeholder="EMAIL ADDRESS" 
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClasses('email')} 
                        />
                        {touched.email && errors.email && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Phone Number</label>
                        <div className={`relative flex bg-white border ${touched.phone && (errors.phone || errors.countryCode) ? 'border-red-500' : 'border-slate-200'} rounded-2xl transition-all h-14 md:h-16 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20 overflow-hidden`}>
                          <CountryCodeSelector 
                            value={formData.countryCode}
                            onChange={handleCountryCodeChange}
                            error={touched.phone && !!errors.countryCode}
                          />
                          <input 
                            required 
                            id="phone"
                            placeholder="PHONE NUMBER" 
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={10}
                            inputMode="numeric"
                            className="w-full bg-transparent px-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none placeholder:text-[#9CA3AF]" 
                          />
                        </div>
                        {touched.phone && errors.phone && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Current Company</label>
                        <input 
                          required 
                          id="company"
                          placeholder="CURRENT OR PREVIOUS COMPANY" 
                          value={formData.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClasses('company')} 
                        />
                        {touched.company && errors.company && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.company}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Role Selection</label>
                        <select 
                          id="role"
                          value={formData.role}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white border ${touched.role && errors.role ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 appearance-none transition-all`}
                        >
                          <option>CHOOSE MISSION</option>
                          <option>FRONTEND ENGINEER</option>
                          <option>AI ARCHITECT</option>
                          <option>MOTION DESIGNER</option>
                          <option>GENERAL INQUIRY</option>
                        </select>
                        {touched.role && errors.role && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.role}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Digital Portfolio / CV Link</label>
                        <input 
                          required 
                          id="portfolio"
                          placeholder="URL (LINKEDIN/GITHUB/PORTFOLIO)" 
                          value={formData.portfolio}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClasses('portfolio')} 
                        />
                        {touched.portfolio && errors.portfolio && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.portfolio}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-primary ml-4">Brief Performance Summary</label>
                      <textarea 
                        required
                        id="summary"
                        rows={4} 
                        placeholder="TELL US ABOUT YOUR MOST COMPLEX PROJECT..." 
                        value={formData.summary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border ${touched.summary && errors.summary ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none transition-all placeholder:text-[#9CA3AF]`}
                      ></textarea>
                      {touched.summary && errors.summary && <p className="text-[8px] text-red-500 font-bold px-4 flex items-center gap-1 uppercase tracking-tighter"><AlertCircle size={10} /> {errors.summary}</p>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={!isValid}
                      className={`w-full py-5 ${isValid ? 'bg-brand-primary hover:bg-brand-hover shadow-brand-primary/20' : 'bg-brand-primary/40 cursor-not-allowed'} text-white rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl active:scale-[0.98] cursor-pointer`}
                    >
                      Submit Logic Profile
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;