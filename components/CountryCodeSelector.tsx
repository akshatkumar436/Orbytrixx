import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Check, X } from 'lucide-react';

export interface Country {
  code: string;
  name: string;
  flag: string;
  iso: string;
}

export const countries: Country[] = [
  { code: '+91', name: 'India', flag: '🇮🇳', iso: 'IN' },
  { code: '+1', name: 'United States', flag: '🇺🇸', iso: 'US' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧', iso: 'GB' },
  { code: '+61', name: 'Australia', flag: '🇦🇺', iso: 'AU' },
  { code: '+49', name: 'Germany', flag: '🇩🇪', iso: 'DE' },
  { code: '+33', name: 'France', flag: '🇫🇷', iso: 'FR' },
  { code: '+81', name: 'Japan', flag: '🇯🇵', iso: 'JP' },
  { code: '+86', name: 'China', flag: '🇨🇳', iso: 'CN' },
  { code: '+971', name: 'UAE', flag: '🇦🇪', iso: 'AE' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬', iso: 'SG' },
  { code: '+39', name: 'Italy', flag: '🇮🇹', iso: 'IT' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱', iso: 'NL' },
  { code: '+34', name: 'Spain', flag: '🇪🇸', iso: 'ES' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭', iso: 'CH' },
  { code: '+1', name: 'Canada', flag: '🇨🇦', iso: 'CA' },
  { code: '+7', name: 'Russia', flag: '🇷🇺', iso: 'RU' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷', iso: 'BR' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦', iso: 'ZA' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷', iso: 'KR' },
].sort((a, b) => a.name.localeCompare(b.name));

interface CountryCodeSelectorProps {
  value: string;
  onChange: (code: string) => void;
  onBlur?: () => void;
  error?: boolean;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({ value, onChange, onBlur, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedCountry = useMemo(() => 
    countries.find(c => c.code === value) || countries.find(c => c.code === '+91')!, 
  [value]);

  const filteredCountries = useMemo(() => {
    const s = search.toLowerCase();
    return countries.filter(c => 
      c.name.toLowerCase().includes(s) || 
      c.code.includes(s) || 
      c.iso.toLowerCase().includes(s)
    );
  }, [search]);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setActiveIndex(0);
      if (!isMobile) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    }
  }, [isOpen, isMobile]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % filteredCountries.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredCountries.length) % filteredCountries.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCountries[activeIndex]) {
          onChange(filteredCountries[activeIndex].code);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const DropdownContent = (
    <div className="flex flex-col h-full md:max-h-[320px]">
      <div className="p-4 md:p-3 border-b border-brand-primary/5 sticky top-0 bg-white/95 backdrop-blur-md z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-3.5 md:h-3.5 text-brand-secondary/40" />
          <input
            ref={searchInputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="SEARCH COUNTRY..."
            className="w-full bg-white border border-slate-200 rounded-xl md:rounded-xl pl-10 pr-4 py-3 md:py-2.5 text-xs md:text-[9px] font-black uppercase tracking-widest text-[#0F172A] outline-none focus:ring-2 focus:ring-brand-primary/20 placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto py-2 custom-scrollbar">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((c, i) => (
            <button
              key={`${c.iso}-${c.code}`}
              type="button"
              onClick={() => { onChange(c.code); setIsOpen(false); }}
              onMouseEnter={() => !isMobile && setActiveIndex(i)}
              className={`w-full flex items-center justify-between px-5 py-4 md:px-4 md:py-3 transition-colors text-left ${activeIndex === i ? 'bg-brand-primary/5' : 'bg-transparent'}`}
            >
              <div className="flex items-center gap-4 md:gap-3">
                <span className="text-xl md:text-base">{c.flag}</span>
                <div className="flex flex-col">
                  <span className="text-xs md:text-[10px] font-black text-[#0F172A] uppercase tracking-tight">{c.name}</span>
                  <span className="text-[10px] md:text-[9px] font-bold text-brand-secondary/40 uppercase tracking-widest">{c.iso}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-2">
                <span className="text-[10px] md:text-[9px] font-black text-brand-primary uppercase tracking-widest">{c.code}</span>
                {value === c.code && <Check className="w-4 h-4 md:w-3.5 md:h-3.5 text-brand-primary" />}
              </div>
            </button>
          ))
        ) : (
          <div className="px-4 py-12 text-center">
            <p className="text-[10px] font-black text-brand-secondary/40 uppercase tracking-[0.2em]">No Matches Found</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`flex items-center gap-2 px-4 h-full bg-slate-50/50 hover:bg-slate-100/50 transition-colors border-r border-slate-200 focus:outline-none ${error ? 'text-red-500' : 'text-[#0F172A]'}`}
      >
        <span className="text-sm">{selectedCountry.flag}</span>
        <span className="text-[10px] font-black uppercase tracking-widest">{selectedCountry.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop Dropdown */}
      {!isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Click outside overlay for desktop */}
              <div className="fixed inset-0 z-[105]" onClick={() => setIsOpen(false)} />
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute top-full left-0 right-0 bg-white border border-brand-primary/10 rounded-2xl shadow-2xl z-[110] overflow-hidden origin-top"
              >
                {DropdownContent}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Bottom Sheet */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[1000] flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-text/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full bg-brand-bg rounded-t-[2.5rem] overflow-hidden max-h-[85vh] flex flex-col shadow-2xl border-t border-brand-primary/10"
              >
                <div className="flex items-center justify-between p-6 border-b border-brand-primary/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-text">Select Country</h3>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-brand-secondary/40">
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-grow overflow-hidden bg-white">
                  {DropdownContent}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default CountryCodeSelector;