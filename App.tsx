import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyOrbytrixx from './pages/WhyOrbytrixx';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import IntroSplash from './components/IntroSplash';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Internal wrapper to access navigation context
const AppContent = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // If user lands directly on the contact page, skip the intro splash
    // to provide a better experience for new tab CTAs.
    if (location.pathname === '/contact') {
      setIsLaunched(true);
    }
  }, [location.pathname]);

  const handleLaunch = () => {
    // Just launch the experience without forcing a navigation to home
    // This allows deep-linked tabs to stay on their intended route.
    setIsLaunched(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text selection:bg-brand-primary/20 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isLaunched ? (
          <IntroSplash key="intro" onLaunch={handleLaunch} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow pt-20">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/why-us" element={<WhyOrbytrixx />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;