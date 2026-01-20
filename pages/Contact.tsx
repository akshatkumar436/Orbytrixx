import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Twitter, Github, Instagram } from 'lucide-react';
import CountryCodeSelector from '../components/CountryCodeSelector';

const Contact: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preselectedService = queryParams.get('service');

  const initialFormData = {
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        message: `${preselectedService} – Project Inquiry`
      }));
    }
  }, [preselectedService]);

  const errors = useMemo(() => {
    const errs: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }
    
    if (!formData.email) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address (e.g., hello@domain.com).";
    }

    if (!formData.countryCode) {
      errs.countryCode = "Select code";
    }
    
    if (!formData.phone) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    
    if (!formData.message.trim()) {
      errs.message = "Project overview is required";
    }
    
    return errs;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setTouched({});
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleCountryCodeBlur = () => {
    setTouched(prev => ({ ...prev, countryCode: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched(prev => ({ ...prev, [e.target.id]: true }));
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail className="w-4 h-4" />, url: 'mailto:contact@orbytrixx.com' },
    { name: 'X', icon: <Twitter className="w-4 h-4" />, url: 'https://x.com/orbytrixx' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, url: 'https://www.instagram.com/orbytrixx/' },
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, url: 'https://github.com/orbytrixx' },
  ];

  const inputClasses = (id: string) => `w-full bg-white border ${touched[id] && errors[id] ? 'border-red-500' : 'border-slate-200'} rounded-xl px-5 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 placeholder:text-[#9CA3AF] transition-all`;

  return (
    <div className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-brand-text">Let's <span className="text-gradient">Connect.</span></h1>
            <p className="text-brand-secondary text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-lg">
              Engineering visionary projects into reality. Experience the premium standard of execution.
            </p>

            <div className="space-y-10 mb-16">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text mb-1">Contact Us</h4>
                  <a 
                    href="mailto:contact@orbytrixx.com"
                    className="text-brand-secondary text-sm font-medium hover:text-brand-primary transition-colors cursor-pointer block underline decoration-brand-primary/20 hover:decoration-brand-primary"
                  >
                    contact@orbytrixx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text mb-1">Primary</h4>
                  <a 
                    href="tel:+917488932243"
                    className="text-brand-secondary text-sm font-medium hover:text-brand-primary transition-colors cursor-pointer block underline decoration-brand-primary/20 hover:decoration-brand-primary"
                  >
                    +91 7488932243
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text mb-1">HQ</h4>
                  <p className="text-brand-secondary text-sm font-medium">Greater Noida, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-brand-primary/10 max-w-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Digital Orbit</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={`Follow Orbytrixx on ${social.name}`}
                    className="w-10 h-10 rounded-full bg-white/40 border border-brand-primary/10 flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="glass-card rounded-[3rem] p-8 md:p-12 border-brand-primary/10 shadow-2xl shadow-brand-primary/5 min-h-[500px] flex flex-col justify-center bg-[#141C2D]/90">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-brand-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-black mb-4 text-brand-text">Inquiry Received</h2>
                  <p className="text-brand-secondary text-sm font-medium mb-8">Response timeline: 4 hours.</p>
                  <button 
                    onClick={handleReset} 
                    className="text-brand-primary text-xs font-black uppercase tracking-widest underline decoration-2 underline-offset-4 cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <input 
                        required 
                        id="name" 
                        placeholder="FULL NAME" 
                        value={formData.name} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses('name')} 
                      />
                      {touched.name && errors.name && (
                        <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter px-2 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
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
                      {touched.email && errors.email && (
                        <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter px-2 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className={`relative flex bg-white border ${touched.phone && (errors.phone || errors.countryCode) ? 'border-red-500' : 'border-slate-200'} rounded-xl transition-all focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20 overflow-hidden`}>
                        <CountryCodeSelector 
                          value={formData.countryCode}
                          onChange={handleCountryCodeChange}
                          onBlur={handleCountryCodeBlur}
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
                          className="w-full bg-transparent px-4 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none placeholder:text-[#9CA3AF]" 
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter px-2 flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <input 
                        id="company" 
                        placeholder="COMPANY (OPTIONAL)" 
                        value={formData.company} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses('company')} 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <textarea 
                      required 
                      id="message" 
                      rows={4} 
                      placeholder="PROJECT OVERVIEW" 
                      value={formData.message} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white border ${touched.message && errors.message ? 'border-red-500' : 'border-slate-200'} rounded-xl px-5 py-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none placeholder:text-[#9CA3AF] transition-all`}
                    ></textarea>
                    {touched.message && errors.message && (
                      <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter px-2 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    disabled={!isValid}
                    className={`w-full py-5 ${isValid ? 'bg-brand-primary hover:bg-brand-hover shadow-brand-primary/30' : 'bg-brand-primary/40 cursor-not-allowed'} text-white rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer`}
                  >
                    Initiate Connection
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; export default Contact;