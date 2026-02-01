import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Code, Database, BarChart, Cpu, Image, Video, Megaphone,
  CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, X, Target
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showDetailModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showDetailModal]);

  const servicesList = useMemo(() => [
    {
      id: 0,
      slug: 'web-development',
      title: "Web Development",
      icon: <Code />,
      short: "Fast, responsive websites with clean structure and efficient logic.",
      desc: "We design and build fast, reliable, and visually refined websites focused on clarity, performance, and long-term usability. Every project is crafted with clean structure, precise visual execution, and efficient front-end logic to ensure seamless user experiences across devices.",
      features: [
        "High-performance, fast-loading websites",
        "Responsive, device-ready layouts",
        "Clean and scalable front-end structure",
        "Interactive and engaging user experiences",
        "Cross-browser and cross-platform compatibility"
      ],
      capabilities: [
        "Precision visual implementation",
        "Performance-focused front-end logic",
        "Interactive UI elements",
        "Maintainable and extensible structure"
      ],
      idealFor: [
        "Business websites",
        "Landing pages and brand platforms",
        "Product and portfolio sites",
        "Front-end optimization and rebuilds"
      ]
    },
    {
      id: 1,
      slug: 'martech-solutions',
      title: "Martech Solutions",
      icon: <Database />,
      short: "Architecting the central nervous system of your growth.",
      desc: "We architect the central nervous system of your business growth. By integrating and optimizing marketing technology stacks, we help you automate customer journeys, centralize data, and improve conversion across every digital touchpoint.",
      features: [
        "Integrated CRM and marketing automation platforms",
        "Cross-channel tracking and performance attribution",
        "Scalable marketing tech stacks for growth"
      ],
      capabilities: [
        "Custom Schema Design",
        "Multi-stack Synchronization",
        "Decoupled Architectures",
        "Automated Campaign Workflows"
      ],
      idealFor: [
        "Growth-stage startups",
        "E-commerce platforms",
        "Data-driven marketing teams",
        "Complex sales cycles"
      ]
    },
    {
      id: 2,
      slug: 'data-analysis',
      title: "Data Analysis",
      icon: <BarChart />,
      short: "Turning raw data into strategic intelligence.",
      desc: "We turn raw data into strategic intelligence. Our analysis solutions provide real-time tracking and visualization layers that offer actionable insights into business health, user behavior patterns, and operational efficiency.",
      features: [
        "Real-time performance dashboards and reporting",
        "Advanced behavioral tracking and heatmapping",
        "Predictive analytics for informed decision making"
      ],
      capabilities: [
        "Mixpanel & GA4 Setup",
        "Custom ETL Pipelines",
        "Behavioral Data Analysis",
        "Predictive Modeling"
      ],
      idealFor: [
        "Business decision makers",
        "Product and growth managers",
        "Operations and logistics teams",
        "Data-heavy enterprises"
      ]
    },
    {
      id: 3,
      slug: 'autonomous-ai',
      title: "Autonomous AI",
      icon: <Cpu />,
      short: "Intelligent systems that interact, respond, and operate automatically.",
      desc: "We build intelligent systems that communicate, respond, and operate in real time. These systems are designed to assist users, handle conversations, and deliver instant interactions without requiring constant human involvement. Our solutions help businesses stay responsive, reduce manual effort, and provide always-available digital experiences.",
      features: [
        "Intelligent conversational systems that interact through text or voice",
        "Real-time response logic for instant and accurate replies",
        "Always-available intelligent agents for continuous user engagement"
      ],
      capabilities: [
        "Conversational interaction systems",
        "Automated response logic",
        "Voice and text-based interfaces",
        "Real-time system behavior"
      ],
      idealFor: [
        "Customer support and assistance",
        "Lead engagement and qualification",
        "Appointment and inquiry handling",
        "Interactive digital assistants"
      ]
    },
    {
      id: 4,
      slug: 'graphic-designing',
      title: "Graphic Designing",
      icon: <Image />,
      short: "Premium visuals creating a cohesive brand language.",
      desc: "We create premium visuals that define a cohesive and commanding brand language. From brand identity to marketing collateral, our designs are crafted to maintain consistency and capture attention across all modern digital channels.",
      features: [
        "Complete brand identity and visual systems",
        "High-fidelity marketing and social media kits",
        "Professional vector illustrations and assets"
      ],
      capabilities: [
        "Brand Identity Design",
        "Social Media Visual Sets",
        "High-Resolution Rendering",
        "Marketing Collateral Design"
      ],
      idealFor: [
        "New brand launches",
        "Social media campaigns",
        "Internal communications",
        "Brand refreshes and updates"
      ]
    },
    {
      id: 5,
      slug: 'video-ai-ads',
      title: "Video & AI Ads",
      icon: <Video />,
      short: "High-impact video editing and AI-powered ad creation.",
      desc: "We create high-impact video content and AI-powered ad creatives designed to capture attention and drive results across digital platforms. Our focus is on visual clarity, performance, and consistency so every asset aligns with your brand and campaign goals.",
      features: [
        "Professional video editing with clean, polished visuals",
        "AI-powered ad creatives with optimized variations",
        "Platform-ready outputs for websites and digital ads"
      ],
      capabilities: [
        "Video editing and enhancement",
        "AI-driven ad creative generation",
        "Motion graphics and clean animations",
        "Audio cleanup and sound optimization",
        "Multi-format exports for web and ads"
      ],
      idealFor: [
        "Brand introduction and promo videos",
        "Website hero and background videos",
        "Digital advertising campaigns",
        "Social media ads and reels",
        "Product launch videos"
      ]
    },
    {
      id: 6,
      slug: 'digital-marketing',
      title: "Digital Marketing",
      icon: <Megaphone />,
      short: "Targeted ads and search optimization to help businesses reach the right audience.",
      desc: "We help businesses grow online by running targeted advertising campaigns and improving search visibility. Our focus is on reaching the right audience, generating quality leads, and tracking results clearly so marketing efforts stay effective and measurable.",
      features: [
        "Targeted advertising campaigns across major digital platforms",
        "Search visibility and optimization to improve discoverability",
        "Continuous monitoring and refinement of campaign performance"
      ],
      capabilities: [
        "Google Ads campaign management",
        "Meta Ads (Facebook & Instagram)",
        "Search engine optimization (SEO)",
        "Audience targeting and campaign optimization",
        "Performance monitoring and reporting"
      ],
      idealFor: [
        "Lead generation and customer acquisition",
        "Increasing online visibility",
        "Product and service promotions",
        "Local and online-first businesses"
      ]
    }
  ], []);

  // Deep linking logic
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceSlug = queryParams.get('service');
    
    if (serviceSlug) {
      const index = servicesList.findIndex(s => s.slug === serviceSlug);
      if (index !== -1) {
        // Move carousel to matching service
        setActiveIndex(index);
        // Automatically open the details modal
        setShowDetailModal(true);
      }
    }
  }, [location.search, servicesList]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  const onDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const currentService = servicesList[activeIndex];

  const handleConnect = () => {
    setShowDetailModal(false);
    const contactUrl = `#/contact?service=${encodeURIComponent(currentService.title)}`;
    window.open(contactUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-20 md:py-24 px-6 bg-brand-bg relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid -z-10 opacity-60" />
      
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto cursor-default">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-[9px] md:text-[10px] font-black mb-4 md:mb-6 tracking-[0.3em] uppercase"
          >
            Digital Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight text-brand-text"
          >
            Explore the <span className="text-gradient">Ecosystem.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-secondary text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed px-4"
          >
            High-performance solutions designed to navigate complex enterprise challenges.
          </motion.p>
        </div>

        {/* Carousel Area */}
        <div className="relative flex-grow flex items-center justify-center py-4 md:py-12">
          {/* Navigation Arrows (Desktop Only) */}
          <div className="hidden lg:flex absolute inset-y-0 -left-12 -right-12 justify-between items-center pointer-events-none z-30">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-slate-800/40 backdrop-blur-md border border-brand-primary/10 flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all pointer-events-auto shadow-lg shadow-black/20 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-slate-800/40 backdrop-blur-md border border-brand-primary/10 flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all pointer-events-auto shadow-lg shadow-black/20 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={containerRef}
            className="w-full h-full relative flex items-center justify-center overflow-visible"
          >
            <div className="flex items-center justify-center w-full max-w-4xl relative h-[400px] md:h-[500px]">
              <AnimatePresence mode="popLayout" initial={false}>
                {servicesList.map((service, index) => {
                  const isActive = index === activeIndex;
                  const isPrev = index === (activeIndex - 1 + servicesList.length) % servicesList.length;
                  const isNext = index === (activeIndex + 1) % servicesList.length;

                  if (!isActive && !isPrev && !isNext) return null;

                  return (
                    <motion.div
                      key={service.title}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={onDragEnd}
                      initial={isNext ? { x: '100%', opacity: 0 } : (isPrev ? { x: '-100%', opacity: 0 } : { opacity: 0 })}
                      animate={{
                        x: isActive ? 0 : (isPrev ? (isMobile ? '-100%' : '-105%') : (isMobile ? '100%' : '105%')),
                        scale: isActive ? 1 : (isMobile ? 1 : 0.92),
                        opacity: isActive ? 1 : (isMobile ? 0 : 0.4),
                        zIndex: isActive ? 20 : 10,
                        filter: isActive ? 'blur(0px)' : (isMobile ? 'blur(0px)' : 'blur(4px)'),
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.3 }
                      }}
                      transition={{ 
                        type: isMobile ? "tween" : "spring",
                        stiffness: 260,
                        damping: 26,
                        duration: isMobile ? 0.45 : 0.8,
                        ease: "easeOut"
                      }}
                      className="absolute w-full md:max-w-3xl glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row gap-6 md:gap-12 cursor-grab active:cursor-grabbing overflow-hidden"
                    >
                      {/* Left / Top Side: Core Info */}
                      <div className="flex flex-col md:w-[45%] cursor-default">
                        <div className="mb-4 md:mb-8 w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-[1.5rem] bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          {/* Fix: use React.ReactElement<any> to avoid TS error on 'className' prop */}
                          {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-10 md:h-10" })}
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-brand-text mb-2 md:mb-4 tracking-tight leading-tight">
                          {service.title}
                        </h2>
                        
                        {/* Mobile: One-line desc only */}
                        <p className="text-brand-secondary text-sm md:text-base font-medium leading-relaxed mb-4 md:mb-0 cursor-default">
                          {service.short}
                        </p>

                        {/* Mobile Detail CTA */}
                        {isMobile && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); setShowDetailModal(true); }}
                            className="mt-2 text-brand-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 cursor-pointer active:scale-95 transition-transform"
                          >
                            Learn More <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      {/* Right Side: Hidden on Mobile */}
                      {!isMobile && (
                        <div className="flex-grow flex flex-col justify-between md:border-l border-brand-primary/10 md:pl-12 cursor-default">
                          <div className="space-y-8">
                            <div className="cursor-default">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Key Milestones</h4>
                              <div className="space-y-4">
                                {service.features.slice(0, 3).map((f, i) => (
                                  <div key={i} className="flex items-center gap-4 text-xs font-black text-brand-text tracking-tight uppercase cursor-default">
                                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                                    {f.length > 40 ? f.substring(0, 37) + "..." : f}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="cursor-default">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Focus Areas</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.capabilities.slice(0, 3).map((cap, i) => (
                                  <span key={i} className="px-3 py-2 bg-slate-900/40 rounded-xl text-[9px] font-bold uppercase tracking-widest text-brand-secondary border border-brand-primary/10 cursor-default">
                                    {cap}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-12 pt-8 border-t border-brand-primary/10 flex justify-end items-center">
                            <motion.button
                              whileHover={{ x: 5 }}
                              onClick={() => setShowDetailModal(true)}
                              className="flex items-center gap-2 text-brand-primary font-black text-xs uppercase tracking-widest cursor-pointer"
                            >
                              Details <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 md:gap-3 mt-8 md:mt-12 pb-8">
          {servicesList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-500 rounded-full h-1 md:h-1.5 cursor-pointer ${
                i === activeIndex 
                  ? 'w-8 md:w-10 bg-brand-primary shadow-lg shadow-brand-primary/30' 
                  : 'w-1.5 md:w-2 bg-brand-primary/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal - Responsive centered modal / slide-up panel */}
      <AnimatePresence>
        {showDetailModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-md p-0 md:p-6 cursor-default"
            onClick={() => setShowDetailModal(false)}
          >
            <motion.div 
              initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.96 }}
              animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1 }}
              exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-brand-bg w-full max-w-2xl md:max-h-[85vh] h-auto md:rounded-[2.5rem] rounded-t-[2.5rem] p-8 md:p-12 overflow-y-auto shadow-2xl relative border-t md:border border-brand-primary/20 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowDetailModal(false)}
                className="absolute top-6 right-6 p-2 text-brand-secondary/60 active:scale-90 transition-transform cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-6 mb-10 cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  {/* Fix: use React.ReactElement<any> to avoid TS error on 'className' prop */}
                  {currentService && React.cloneElement(currentService.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-3xl font-black text-brand-text tracking-tight">{currentService?.title}</h3>
              </div>

              <div className="space-y-10 cursor-default">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Overview</h4>
                  <p className="text-brand-secondary text-base md:text-lg font-medium leading-relaxed">
                    {currentService?.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="pt-4 border-t border-brand-primary/10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">What We Deliver</h4>
                    <div className="space-y-4">
                      {currentService?.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-4 text-xs font-black text-brand-text uppercase tracking-tight">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-primary/10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Key Capabilities</h4>
                    <div className="space-y-3">
                      {currentService?.capabilities.map((c, i) => (
                        <div key={i} className="bg-slate-900/40 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-brand-primary/10 text-brand-secondary">
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {currentService?.idealFor && (
                  <div className="pt-8 border-t border-brand-primary/10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Ideal For</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentService.idealFor.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-[10px] font-black text-brand-text uppercase tracking-widest">
                          <Target className="w-3.5 h-3.5 text-brand-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-8 mt-4">
                  <button 
                    onClick={handleConnect}
                    className="w-full py-6 bg-brand-primary text-white rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-primary/30 active:scale-95 transition-transform cursor-pointer"
                  >
                    Connect for {currentService?.title}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;