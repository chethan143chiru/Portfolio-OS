import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Fingerprint, 
  Filter, 
  Search, 
  Layers, 
  Zap, 
  Grid, 
  Clock, 
  Loader, 
  Sparkles, 
  CheckCircle2, 
  Linkedin,
  Cpu
} from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { CertificationType } from '../types';

export default function CertificationsView() {
  const [certs, setCerts] = useState<CertificationType[]>(CERTIFICATIONS);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'GRID' | 'TIMELINE'>('GRID');
  
  // HUD Fingerprint Scanning State
  const [scanningCert, setScanningCert] = useState<CertificationType | null>(null);
  const [scanStep, setScanStep] = useState<number>(0); // 0: Idle, 1: Accessing, 2: Verifying, 3: Granted

  // 3D Card Hover Rotator Tilt Effect
  const [tiltMap, setTiltMap] = useState<Record<string, { rx: number; ry: number }>>({});

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -10; // -10deg to 10deg
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 10;   // -10deg to 10deg

    setTiltMap((prev) => ({ ...prev, [cardId]: { rx, ry } }));
  };

  const handleCardMouseLeave = (cardId: string) => {
    setTiltMap((prev) => ({ ...prev, [cardId]: { rx: 0, ry: 0 } }));
  };

  // Filter application
  useEffect(() => {
    let result = CERTIFICATIONS;

    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.company.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'ALL') {
      const cat = selectedCategory;
      if (cat === 'GOOGLE') {
        result = result.filter((c) => c.company.toLowerCase().includes('google'));
      } else if (cat === 'AWS') {
        result = result.filter((c) => c.company.toLowerCase().includes('aws'));
      } else if (cat === 'MICROSOFT') {
        result = result.filter((c) => c.company.toLowerCase().includes('microsoft'));
      } else if (cat === 'IBM') {
        result = result.filter((c) => c.company.toLowerCase().includes('ibm'));
      } else if (cat === 'AI') {
        result = result.filter(
          (c) =>
            c.category.toLowerCase().includes('artificial intelligence') ||
            c.name.toLowerCase().includes('ai') ||
            c.skills.some((s) => s.toLowerCase().includes('ai') || s.toLowerCase().includes('generative'))
        );
      } else if (cat === 'MACHINE LEARNING') {
        result = result.filter(
          (c) =>
            c.category.toLowerCase().includes('machine learning') ||
            c.skills.some((s) => s.toLowerCase().includes('ml') || s.toLowerCase().includes('learning') || s.toLowerCase().includes('neurons'))
        );
      } else if (cat === 'CLOUD') {
        result = result.filter(
          (c) =>
            c.category.toLowerCase().includes('cloud') ||
            c.company.toLowerCase().includes('aws') ||
            c.skills.some((s) => s.toLowerCase().includes('cloud') || s.toLowerCase().includes('vpc') || s.toLowerCase().includes('compute'))
        );
      } else if (cat === 'PROGRAMMING') {
        result = result.filter((c) => c.category === 'Programming');
      } else if (cat === 'DATA SCIENCE') {
        result = result.filter((c) => c.category === 'Data Science');
      } else if (cat === 'DEVOPS') {
        result = result.filter((c) => c.category === 'DevOps');
      } else if (cat === 'PROFESSIONAL DEVELOPMENT') {
        result = result.filter((c) => c.category === 'Professional Development');
      }
    }

    // Default chronological sorting (newest first for timeline preference)
    const sorted = [...result].sort((a, b) => b.issuedDate.localeCompare(a.issuedDate));
    setCerts(sorted);
  }, [selectedCategory, searchQuery]);

  // Trigger scanning animation sequence before redirect
  const startCredentialAccess = (cert: CertificationType) => {
    // Avoid double click
    if (scanningCert) return;

    setScanningCert(cert);
    setScanStep(1); // ACCESSING CREDENTIAL VAULT...

    // Transition of steps within 0.8 seconds (800ms)
    // Step 1: 0 - 250ms
    // Step 2: 250 - 550ms
    // Step 3: 550 - 800ms
    // Step 4: 800ms -> Open link + Reset

    const timer1 = setTimeout(() => {
      setScanStep(2); // VERIFYING DIGITAL CREDENTIAL...
    }, 250);

    const timer2 = setTimeout(() => {
      setScanStep(3); // ACCESS GRANTED
    }, 550);

    const timer3 = setTimeout(() => {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
      setScanningCert(null);
      setScanStep(0);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  // Map IDs to custom verification states to make the platform feel alive and authentic
  const getVerificationStatus = (id: string): string => {
    return '🔗 LINKEDIN VERIFIED';
  };

  const categoriesList = [
    'ALL',
    'GOOGLE',
    'AWS',
    'MICROSOFT',
    'IBM',
    'AI',
    'MACHINE LEARNING',
    'CLOUD',
    'PROGRAMMING',
    'DATA SCIENCE',
    'DEVOPS',
    'PROFESSIONAL DEVELOPMENT'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 pb-24 relative z-10 text-left font-mono" id="certification-vault-main">
      {/* ==================== 1. FUTURISTIC HEADER LAB MODULE ==================== */}
      <div className="relative mb-10 border-b border-white/10 pb-8 overflow-hidden bg-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl border border-white/5 shadow-[0_10px_50px_rgba(249,115,22,0.05)]">
        {/* Holographic grid scanner overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-2 flex items-center gap-3" id="certs-vault-title">
              <span>CERTIFICATION VAULT</span>
              <Award className="text-orange-500 w-7 h-7 animate-pulse shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed">
              Verified Credentials • Industry Certifications • Continuous Learning Journey
            </p>
          </div>

          {/* Core HUD Digital Counter Panel */}
          <div className="flex flex-col bg-black/40 border border-white/10 p-4 rounded-2xl min-w-[200px] text-right shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative justify-center overflow-hidden group">
            {/* Holographic scope corner decorators */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-orange-500/50" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-orange-500/20" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-orange-500/20" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-orange-500/50" />

            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">
              ARCHIVE SECURITY STATUS
            </div>
            <div className="text-xl sm:text-2xl font-black text-orange-400 tracking-wider font-mono glow-orange-400 animate-pulse">
              35+ VERIFIED
            </div>
            <div className="text-[9px] text-zinc-400 uppercase tracking-wider font-sans mt-0.5">
              MICRO-CREDENTIALS REGISTERED
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 2. CONTROL HUD PANEL (Filters, Search, View Switcher) ==================== */}
      <div className="flex flex-col gap-6 mb-10 bg-black/20 border border-white/5 rounded-2xl p-5 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Advanced Search Input */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-zinc-500 w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search by name, provider, skill, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all font-mono"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-[10px] uppercase font-bold"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Category Filter Pills (Glow support built-in) - Hidden in Mobile View */}
        <div className="hidden md:block">
          <div className="flex items-center gap-1.5 text-zinc-500 text-[9px] uppercase tracking-widest font-bold mb-3.5 px-1">
            <Filter size={10} className="text-orange-500" />
            <span>SELECT DATABASE PROFILE DIRECTORY:</span>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 text-[9px] md:text-[10px] uppercase font-bold rounded-xl border transition-all duration-300 cursor-pointer text-center relative ${
                    isActive
                      ? 'bg-transparent text-white border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.25)] scale-102 font-black'
                      : 'bg-white/5 text-zinc-400 border-white/10 hover:border-orange-500/30 hover:text-white hover:bg-orange-500/5'
                  }`}
                  style={isActive ? {
                    boxShadow: '0 0 15px rgba(249, 115, 22, 0.25), inset 0 0 8px rgba(249, 115, 22, 0.15)'
                  } : {}}
                >
                  {/* Subtle neon dot indicator inside active tab */}
                  {isActive && (
                    <span className="inline-block w-1 h-1 bg-orange-400 rounded-full mr-1.5 animate-pulse" />
                  )}
                  {cat.replace('_', ' ')}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================== 3. CERTIFICATIONS RENDERING STAGE ==================== */}
      {certs.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 bg-white/2 applied rounded-3xl p-10 flex flex-col items-center justify-center">
          <Award className="text-zinc-600 mb-4 animate-bounce" size={48} />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">No matching credentials found</h3>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
            Please optimize your filters or search terms inside the decryption vault directory system.
          </p>
        </div>
      ) : viewMode === 'GRID' ? (
        
        /* GRID VIEW (3 Columns - Premium Holographic Cards) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="certs-grid">
          {certs.map((c, i) => {
            const tilt = tiltMap[c.id] || { rx: 0, ry: 0 };
            const statusLabel = getVerificationStatus(c.id);

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.5) }}
                onMouseMove={(e) => handleCardMouseMove(e, c.id)}
                onMouseLeave={() => handleCardMouseLeave(c.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 md:p-6 group transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_15px_45px_rgba(249,115,22,0.15)] flex flex-col justify-between select-none overflow-hidden"
              >
                {/* Neon Accents: Subtle border glows and laser sweeps */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-orange-500/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-tr-full pointer-events-none group-hover:from-purple-500/10 transition-all duration-500" />
                
                {/* Rotating scanner laser element */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

                <div>
                  {/* Upper company/logo metadata panel */}
                  <div className="flex items-start justify-between gap-3 mb-4 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="relative p-1.5 bg-black/40 rounded-xl border border-white/10 group-hover:border-orange-500/30 transition-colors w-10 h-10 flex items-center justify-center">
                        <img
                          src={c.badgeUrl}
                          alt={c.company}
                          className="w-7 h-7 object-contain rounded-md"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-black text-white group-hover:text-orange-400 leading-tight transition-colors">
                          {c.company}
                        </span>
                        <span className="text-[8px] text-zinc-500 mt-0.5 tracking-wider uppercase font-mono">
                          VAULT DIRECTORY
                        </span>
                      </div>
                    </div>

                    {/* Date stamp certificate badge */}
                    <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[8px] text-zinc-300 font-bold font-mono">
                      <Calendar size={9} className="text-orange-400" />
                      <span>{c.issuedDate}</span>
                    </div>
                  </div>

                  {/* Certificate Main Title */}
                  <h3 className="text-xs font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-wide leading-relaxed mb-2.5 text-left h-[34px] overflow-hidden line-clamp-2">
                    {c.name}
                  </h3>

                  {/* Description of what was mastered */}
                  <p className="text-[9.5px] leading-relaxed text-zinc-400 mb-4 h-[54px] max-h-[54px] overflow-hidden line-clamp-3 font-sans text-left">
                    {c.description}
                  </p>

                  {/* Dynamic skills tags array display */}
                  <div className="flex flex-wrap gap-1 mb-5 h-[36px] overflow-hidden">
                    {c.skills.slice(0, 4).map((s) => (
                      <span key={s} className="bg-black/30 border border-white/10 px-2 py-0.5 rounded text-[8px] text-zinc-300 font-mono tracking-wide uppercase transition-colors hover:border-orange-500/40">
                        #{s}
                      </span>
                    ))}
                    {c.skills.length > 4 && (
                      <span className="text-[8px] text-zinc-500 self-center font-bold px-1 uppercase tracking-wide">
                        +{c.skills.length - 4} MORE
                      </span>
                    )}
                  </div>
                </div>

                {/* Lower control / verify status node */}
                <div className="border-t border-white/5 pt-3.5 mt-auto flex items-end justify-between text-[9px] relative z-20">
                  {/* Subtle neon green pulsers verification badge with metrics below */}
                  <div className="flex flex-col gap-1.5 items-start">
                    <div className="flex items-center gap-1 font-bold text-[9.5px] tracking-wider text-emerald-400 select-none bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded-lg">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="glow-green font-mono">{statusLabel}</span>
                    </div>
                    {c.metrics && (
                      <div className="flex flex-wrap items-center gap-1 text-[8px] text-zinc-500 font-mono mt-1 px-0.5 whitespace-nowrap">
                        <span className="hover:text-zinc-300 transition-colors">👍 {c.metrics.likes}</span>
                        <span className="text-zinc-800">•</span>
                        <span className="hover:text-zinc-300 transition-colors">💬 {c.metrics.comments}</span>
                        <span className="text-zinc-800">•</span>
                        <span className="hover:text-zinc-300 transition-colors">👁️ {c.metrics.impressions}</span>
                      </div>
                    )}
                  </div>

                  {/* ACCESS CREDENTIAL CTA BUTTON WITH NEON GLOW */}
                  <button
                    onClick={() => startCredentialAccess(c)}
                    className="bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-black border border-orange-500/30 hover:border-orange-500 py-1.5 px-3 rounded-xl flex items-center gap-2 font-bold cursor-pointer transition-all duration-300 shadow-sm font-mono tracking-wide uppercase text-[9px]"
                  >
                    <Fingerprint size={11} className="animate-pulse" />
                    <span>⚡ ACCESS CREDENTIAL</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        
        /* TIMELINE VIEW (Chronological Journey) */
        <div className="relative max-w-3xl mx-auto pl-4 sm:pl-8 py-4 text-left font-mono" id="certs-timeline">
          {/* Main vertical line of timeline */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500 via-purple-500/40 to-transparent" />

          {certs.map((c, i) => {
            const statusLabel = getVerificationStatus(c.id);

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.6) }}
                className="relative mb-10 pl-6 sm:pl-10 group"
              >
                {/* Timeline node selector pulse dot */}
                <div className="absolute left-[-5px] sm:left-[11px] top-4 w-2.5 h-2.5 rounded-full bg-orange-500 border border-black grid place-items-center group-hover:scale-130 transition-transform duration-300">
                  <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                </div>

                {/* Glassmorphism Container of timeline element */}
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-orange-500/50 rounded-2xl p-5 relative transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md hover:shadow-[0_5px_25px_rgba(249,115,22,0.1)]">
                  
                  <div className="flex-1 text-left">
                    {/* Upper date & company info bar */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="text-[10px] font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        {c.issuedDate}
                      </span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">
                        {c.company}
                      </span>
                      <span className="text-[8px] text-zinc-500 tracking-wider">
                        // {c.category}
                      </span>
                    </div>

                    {/* Certificate Name */}
                    <h3 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-wide mb-2">
                      {c.name}
                    </h3>

                    {/* Skills learned */}
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {c.skills.map((s) => (
                        <span key={s} className="bg-black/20 border border-white/5 py-0.5 px-2 rounded text-[8px] text-zinc-400">
                          #{s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification & Button controller */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-white/5 pt-3 md:pt-0 shrink-0">
                    {/* Pulsing indicator with metrics below */}
                    <div className="flex flex-col items-start md:items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-[8px] font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        <span>{statusLabel}</span>
                      </div>
                      {c.metrics && (
                        <div className="flex items-center gap-1 text-[7.5px] text-zinc-500 font-mono">
                          <span className="hover:text-zinc-300 transition-colors">👍 {c.metrics.likes}</span>
                          <span className="text-zinc-800">•</span>
                          <span className="hover:text-zinc-300 transition-colors">💬 {c.metrics.comments}</span>
                          <span className="text-zinc-800">•</span>
                          <span className="hover:text-zinc-300 transition-colors">👁️ {c.metrics.impressions}</span>
                        </div>
                      )}
                    </div>

                    {/* Button trigger */}
                    <button
                      onClick={() => startCredentialAccess(c)}
                      className="bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-black border border-orange-500/30 hover:border-orange-500 py-1.5 px-3 rounded-xl flex items-center gap-2 font-bold cursor-pointer transition-all duration-300 tracking-wide text-[8px]"
                    >
                      <Fingerprint size={10} />
                      <span>⚡ ACCESS CREDENTIAL</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ==================== 4. HUD ENCRYPT/SCANNING OVERLAY ACCESS SYSTEM ==================== */}
      <AnimatePresence>
        {scanningCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-[999]"
            id="credential-vault-hud-overlay"
          >
            {/* Ambient cyber pulse textures */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(249,115,22,0.02)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Cyber concentric orbit vectors */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-orange-500/10 border-dashed animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/5 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />

            {/* Glowing spotlight behind HUD */}
            <div className="absolute w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-md w-full px-6 flex flex-col items-center justify-center relative text-center">
              
              {/* Target bracket decorators */}
              <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

              {/* Holographic scanner visual element (Scanning beam) */}
              <div className="relative w-28 h-28 mb-8 flex items-center justify-center bg-orange-500/5 rounded-2xl border border-orange-500/30 overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)] group">
                
                {/* Fingerprint Glyph with scanning sweep line */}
                <Fingerprint className="text-orange-500 w-14 h-14 animate-pulse relative z-10" />

                {/* Repeating sweeping light line */}
                <div className="absolute left-0 w-full h-[3px] bg-orange-500/80 animate-scan pointer-events-none shadow-[0_0_12px_#f97316]" style={{
                  animation: 'sweep 1s ease-in-out infinite'
                }} />
              </div>

              {/* Animated Decryption / Verification Status Text Feed */}
              <div className="bg-black/60 p-5 rounded-xl border border-white/10 w-full shadow-inner text-left font-mono h-32 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-orange-400 text-[10px] tracking-widest uppercase font-black">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
                    <span>CREDENTIAL VAULT ARCHIVE LINK</span>
                  </div>
                  
                  <div className="text-zinc-400 text-[9px] uppercase mt-1">
                    TARGET: <span className="text-zinc-200">{scanningCert.company}</span>
                  </div>
                  <div className="text-zinc-450 text-[8.5px] uppercase truncate">
                    HASH: <span className="text-zinc-350">{scanningCert.id}-{scanningCert.issuedDate}</span>
                  </div>
                </div>

                {/* Live step sequence tracker */}
                <div className="border-t border-white/5 pt-2.5 mt-2 flex items-center gap-2 text-xs">
                  {scanStep === 1 && (
                    <span className="text-orange-400 flex items-center gap-1.5 tracking-wider uppercase font-extrabold animate-pulse">
                      <Loader className="animate-spin w-3.5 h-3.5" />
                      ACCESSING CREDENTIAL VAULT...
                    </span>
                  )}
                  {scanStep === 2 && (
                    <span className="text-purple-400 flex items-center gap-1.5 tracking-wider uppercase font-extrabold">
                      <Cpu className="animate-bounce w-3.5 h-3.5" />
                      VERIFYING DIGITAL CREDENTIAL...
                    </span>
                  )}
                  {scanStep === 3 && (
                    <span className="text-emerald-400 flex items-center gap-1.5 tracking-wider uppercase font-extrabold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      ACCESS GRANTED // BYPASSING OK
                    </span>
                  )}
                </div>
              </div>

              {/* Subtle visual instructions */}
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mt-5">
                SECURE HANDSHAKE COMPLETED • PORTFOLIO OS KEY SECURED
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled embedded keyframe animation block */}
      <style>{`
        @keyframes sweep {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .glow-orange-400 {
          text-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
        }
        .glow-green {
          text-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
}
