import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Layers, Award, FileText, Mail, Github, Linkedin, Download, Menu, Terminal, Cpu, Cloud, Trophy } from 'lucide-react';
import { CONTACT_INFO } from './data';
import { ViewSection } from './types';

// Importing Custom Core System Elements
import BackgroundSystem from './components/BackgroundSystem';
import CursorSystem from './components/CursorSystem';
import LoadingScreen from './components/LoadingScreen';
import InteractivePortrait from './components/InteractivePortrait';
import HeroContent from './components/HeroContent';
import ProjectsView from './components/ProjectsView';
import CertificationsView from './components/CertificationsView';
import ResumeView from './components/ResumeView';
import ContactView from './components/ContactView';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeSection, setActiveSection] = useState<ViewSection>('Home');
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isMissionHovered, setIsMissionHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsProfileHovered(false);
      setIsMissionHovered(false);
    };
    window.addEventListener('click', handleDocumentClick);
    window.addEventListener('touchstart', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('touchstart', handleDocumentClick);
    };
  }, []);

  const handleNavTransition = (section: ViewSection) => {
    setActiveSection(section);
  };

  return (
    <>
      <style>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes badgeShine {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(249, 115, 22, 0.2); box-shadow: 0 0 4px rgba(249, 115, 22, 0.1); }
          50% { border-color: rgba(168, 85, 247, 0.4); box-shadow: 0 0 12px rgba(168, 85, 247, 0.2); }
        }
        .animate-badge-float {
          animation: badgeFloat 4s ease-in-out infinite;
        }
        .animate-badge-shine {
          animation: badgeShine 3s ease-in-out infinite;
        }
        .animate-border-pulse {
          animation: borderPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* 1. FUTURISTIC CANVAS BACKGROUND LAYER */}
      <BackgroundSystem />

      {/* 2. CUSTOM NEON HUD CURSOR TRACKER */}
      <CursorSystem />

      {/* 3. DIAGNOSTIC BOOT LOADER SEQUENCES */}
      <AnimatePresence mode="wait">
        {isBooting ? (
          <LoadingScreen key="bootloader" onComplete={() => setIsBooting(false)} />
        ) : (
          <motion.div
            key="os-primary-hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-screen flex flex-col justify-between text-[#eae5ef] font-mono select-none overflow-x-hidden"
            id="portfolio-os-viewport"
          >
            {/* ==================== 4. HEADER NAVIGATION HUD BAR ==================== */}
            <header className="w-full px-4 sm:px-6 md:px-12 py-3.5 flex items-center justify-between border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0 z-50 select-none">
              {/* BRAND CORNER LOGO MODULE */}
              <div
                className="relative z-50 flex items-center"
                onMouseLeave={() => {
                  if (!isMobileOrTablet) setIsProfileHovered(false);
                }}
              >
                {/* Brand Link Trigger (Only hovering logo/name triggers the display) */}
                <div 
                  onMouseEnter={() => {
                    if (!isMobileOrTablet) setIsProfileHovered(true);
                  }}
                  onClick={(e) => {
                    if (isMobileOrTablet) {
                      e.stopPropagation();
                      setIsProfileHovered(!isProfileHovered);
                      setIsMissionHovered(false);
                    }
                  }}
                  className="flex items-center gap-3 cursor-pointer group/brand"
                >
                  {/* Metallic neon pulse monogram outer rim */}
                  <motion.div 
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/15 relative"
                    animate={{
                      y: [0, -3, 0],
                      boxShadow: [
                        "0 0 15px rgba(249, 115, 22, 0.2), inset 0 0 8px rgba(255,255,255,0.05)",
                        "0 0 25px rgba(168, 85, 247, 0.3), inset 0 0 8px rgba(255,255,255,0.05)",
                        "0 0 15px rgba(249, 115, 22, 0.2), inset 0 0 8px rgba(255,255,255,0.05)"
                      ]
                    }}
                    transition={{
                      y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                      boxShadow: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.05, rotate: 6 }}
                  >
                    {/* Futuristic custom vector SVG Monogram logo */}
                    <svg viewBox="0 0 100 100" className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] filter drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">
                      <defs>
                        {/* Premium 3D Bevel Gradients */}
                        <linearGradient id="glow-orange-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fff5c3" />
                          <stop offset="30%" stopColor="#f97316" />
                          <stop offset="70%" stopColor="#9a3412" />
                          <stop offset="100%" stopColor="#431407" />
                        </linearGradient>
                        
                        <linearGradient id="glow-purple-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="40%" stopColor="#c084fc" />
                          <stop offset="80%" stopColor="#6b21a8" />
                          <stop offset="100%" stopColor="#3b0764" />
                        </linearGradient>

                        <linearGradient id="neon-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>

                        <radialGradient id="logo-glow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="rgba(249, 115, 22, 0.35)" />
                          <stop offset="60%" stopColor="rgba(168, 85, 247, 0.15)" />
                          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                        </radialGradient>
                      </defs>

                      {/* Subtle Radial Backlight Glow */}
                      <circle cx="50" cy="50" r="44" fill="url(#logo-glow)" opacity="0.4" />

                      {/* Glassmorphism background hexagonal shield */}
                      <polygon
                        points="50,10 85,28 85,72 50,90 15,72 15,28"
                        fill="rgba(10, 10, 12, 0.9)"
                        stroke="url(#neon-glow-line)"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />

                      {/* Subtle micro dots */}
                      <circle cx="50" cy="10" r="1.2" fill="#f97316" />
                      <circle cx="85" cy="28" r="1.2" fill="#a855f7" />
                      <circle cx="85" cy="72" r="1.2" fill="#3b82f6" />
                      <circle cx="50" cy="90" r="1.2" fill="#f97316" />
                      <circle cx="15" cy="72" r="1.2" fill="#3b82f6" />
                      <circle cx="15" cy="28" r="1.2" fill="#a855f7" />

                      {/* LAYER 1: R Stem (Background Bottom Plate) */}
                      <path
                        d="M 43,26 L 50,23 V 77 L 43,80 Z"
                        fill="url(#glow-purple-silver)"
                      />

                      {/* LAYER 2: C Crescent (Middle Plate overlapping R Stem) */}
                      <path
                        d="M 64,27 A 28 28 0 1 0 64,73 L 57,65 A 19 19 0 1 1 57,35 Z"
                        fill="url(#glow-orange-gold)"
                      />

                      {/* Layer 2b: Cast Shadow over R Stem with CSS color */}
                      <path d="M 43,30 H 50 V 42 H 43 Z" fill="#000000" opacity="0.45" />
                      <path d="M 43,58 H 50 V 70 H 43 Z" fill="#000000" opacity="0.45" />

                      {/* LAYER 3: R Loop (Top overlapping C Crescent at top-right) */}
                      <path
                        d="M 50,23 H 67 C 78,23 78,48 67,48 H 50 V 40 H 65 C 70,40 70,31 65,31 H 50 Z"
                        fill="url(#glow-purple-silver)"
                      />

                      {/* Layer 3b: Cast Shadow on C at top-right intersection */}
                      <path d="M 50,23 H 55 V 31 H 50 Z" fill="#000000" opacity="0.3" />

                      {/* LAYER 4: R Leg (Slanting down-right overlapping bottom of C) */}
                      <path
                        d="M 58,48 L 74,77 H 84 L 68,48 Z"
                        fill="url(#glow-purple-silver)"
                      />

                      {/* Layer 4b: Cast Shadow under R Leg over bottom-right C crescent */}
                      <path d="M 58,48 L 68,66 L 63,68 L 54,50 Z" fill="#000000" opacity="0.45" />
                    </svg>
                  </motion.div>
                  
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] sm:text-[14px] font-black text-white uppercase tracking-wider group-hover/brand:text-orange-400 transition-colors">
                      CHETHAN R
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-orange-400 font-bold tracking-[0.15em] mt-0.5 uppercase">
                      BUILDING THE FUTURE
                    </span>
                  </div>
                </div>

                {/* ==================== HOLOGRAPHIC MINI PROFILE CARD ==================== */}
                <AnimatePresence>
                  {isProfileHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-14 left-0 w-[290px] bg-transparent backdrop-blur-none border border-transparent p-[1.5px] rounded-2xl shadow-[0_4px_30px_rgba(249,115,22,0.15),_0_4px_30px_rgba(168,85,247,0.15)] text-left font-mono z-50 text-xs text-[#eae5ef]"
                      style={{
                        backgroundImage: "linear-gradient(rgba(10, 10, 12, 0.2), rgba(10, 10, 12, 0.2)), linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                      id="brand-hologram-card"
                    >
                      {/* Floating overlay panels */}
                      <div className="p-4 relative">
                        {/* Laser target corner lines */}
                        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-orange-500/50 pointer-events-none" />
                        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-orange-500/20 pointer-events-none" />
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-orange-500/20 pointer-events-none" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-orange-500/50 pointer-events-none" />

                        <div className="border-b border-white/10 pb-2.5 mb-3.5">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black text-white tracking-widest uppercase">CHIRU.OS</span>
                          </div>
                          <span className="text-[8px] text-white tracking-wider block mt-1">PROJ_ID // chethan143chiru</span>
                        </div>

                        {/* Cyberpunk Operating System Credentials */}
                        <div className="flex flex-col gap-3 mb-4 text-[10px]">
                          <div className="border-l-2 border-orange-500 pl-2">
                            <span className="text-orange-400 font-extrabold tracking-wider block text-[8px] uppercase">SYSTEM CREATOR</span>
                            <span className="text-zinc-300 leading-tight block mt-0.5">Transforming Ideas Into Software</span>
                          </div>
                          <div className="border-l-2 border-purple-500 pl-2">
                            <span className="text-purple-400 font-extrabold tracking-wider block text-[8px] uppercase">PLATFORM ENGINEER</span>
                            <span className="text-zinc-300 leading-tight block mt-0.5">Building Future-Ready Applications</span>
                          </div>
                          <div className="border-l-2 border-blue-500 pl-2">
                            <span className="text-blue-400 font-extrabold tracking-wider block text-[8px] uppercase">AI PIONEER</span>
                            <span className="text-zinc-300 leading-tight block mt-0.5">Exploring Intelligent Automation</span>
                          </div>
                        </div>

                        {/* BADGE VAULT */}
                        <div className="bg-black/40 border border-white/10 rounded-xl p-2.5 shadow-lg select-none">
                          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
                            <span className="text-[8px] text-zinc-400 font-black tracking-widest block uppercase">BADGE VAULT</span>
                            <span className="text-[7px] text-orange-400 font-black px-1.5 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded">SECURE REGISTRY</span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-1.5">
                            {/* CARD 01 - Google Cloud */}
                            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col items-center justify-between min-h-[95px] text-center animate-badge-float animate-border-pulse" style={{ animationDelay: '0s' }}>
                              {/* Sliding metallic shine overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50px] h-full animate-badge-shine pointer-events-none" style={{ animationDelay: '0s' }} />
                              
                              {/* Chrome/metallic outer ring, glowing */}
                              <div className="relative w-7 h-7 rounded-full bg-black/50 border border-white/15 flex items-center justify-center p-0.5 shadow-inner">
                                <img
                                  src="https://img.icons8.com/color/48/google-cloud.png"
                                  alt="Google Cloud"
                                  className="w-4 h-4 object-contain filter saturate-[1.25]"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-pulse" />
                              </div>
                              
                              <div className="mt-1 flex flex-col">
                                <span className="text-[7.5px] font-extrabold text-blue-400 tracking-wide leading-none uppercase">Google Cloud</span>
                                <span className="text-[9px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-purple-400 tracking-widest mt-1 leading-none font-sans">PLATINUM</span>
                                <span className="text-[6.5px] font-bold tracking-widest text-zinc-400 uppercase leading-none mt-0.5">BADGE</span>
                              </div>
                            </div>

                            {/* CARD 02 - AWS Educate */}
                            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col items-center justify-between min-h-[95px] text-center animate-badge-float animate-border-pulse" style={{ animationDelay: '1s' }}>
                              {/* Sliding metallic shine overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50px] h-full animate-badge-shine pointer-events-none" style={{ animationDelay: '1s' }} />
                              
                              <div className="relative w-7 h-7 rounded-full bg-black/50 border border-white/15 flex items-center justify-center p-0.5 shadow-inner">
                                <img
                                  src="https://img.icons8.com/color/48/amazon-web-services.png"
                                  alt="AWS Educate"
                                  className="w-4 h-4 object-contain filter saturate-[1.25]"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse" />
                              </div>
                              
                              <div className="mt-1 flex flex-col">
                                <span className="text-[7.5px] font-extrabold text-orange-400 tracking-wide leading-none uppercase">AWS Educate</span>
                                <span className="text-[9px] font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 tracking-widest mt-1 leading-none font-sans font-black">GOLD</span>
                                <span className="text-[6.5px] font-bold tracking-widest text-zinc-400 uppercase leading-none mt-0.5">BADGE</span>
                              </div>
                            </div>

                            {/* CARD 03 - 10+ badges premium trophy */}
                            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col items-center justify-between min-h-[95px] text-center animate-badge-float animate-border-pulse" style={{ animationDelay: '2s' }}>
                              {/* Sliding metallic shine overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50px] h-full animate-badge-shine pointer-events-none" style={{ animationDelay: '2s' }} />
                              
                              <div className="relative w-7 h-7 rounded-full bg-black/50 border border-white/15 flex items-center justify-center p-0.5 shadow-inner">
                                <Trophy size={11} className="text-yellow-400 drop-shadow-[0_0_6px_rgba(234,179,8,0.6)]" />
                                <div className="absolute inset-0 rounded-full border border-yellow-500/20 animate-pulse" />
                              </div>
                              
                              <div className="mt-1 flex flex-col">
                                <span className="text-[7.5px] font-extrabold text-yellow-500 tracking-wide leading-none uppercase font-sans">10+ BADGES</span>
                                <span className="text-[9px] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 tracking-widest mt-1 leading-none">PREMIUM</span>
                                <span className="text-[6.5px] font-bold tracking-widest text-orange-400 uppercase leading-none mt-0.5">BADGE</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ACTION: Top Right Status Indicator (Pulser Status Badge is replaced with CURRENT MISSION interactive HUD status panel) */}
              <div 
                className="relative z-50 animate-fade-in flex flex-col items-end"
                onMouseLeave={() => {
                  if (!isMobileOrTablet) setIsMissionHovered(false);
                }}
              >
                <div 
                  onMouseEnter={() => {
                    if (!isMobileOrTablet) setIsMissionHovered(true);
                  }}
                  onClick={(e) => {
                    if (isMobileOrTablet) {
                      e.stopPropagation();
                      setIsMissionHovered(!isMissionHovered);
                      setIsProfileHovered(false);
                    }
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.1)] group/mission select-none"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] text-white font-black tracking-widest uppercase font-mono">
                    CURRENT MISSION
                  </span>
                </div>

                {/* HOLOGRAPHIC MISSION CARD OVERLAY */}
                <AnimatePresence>
                  {isMissionHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -4, 0], 
                        scale: 1,
                        boxShadow: [
                          "0 4px 30px rgba(249,115,22,0.15), 0 4px 30px rgba(168,85,247,0.15)",
                          "0 4px 30px rgba(249,115,22,0.25), 0 4px 30px rgba(168,85,247,0.25)",
                          "0 4px 30px rgba(249,115,22,0.15), 0 4px 30px rgba(168,85,247,0.15)"
                        ]
                      }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                        boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                        default: { type: "spring", stiffness: 350, damping: 25 }
                      }}
                      whileHover={{
                        scale: 1.03,
                        filter: "brightness(1.15)",
                        transition: { duration: 0.2 }
                      }}
                      className="absolute top-12 right-0 w-[300px] bg-transparent backdrop-blur-none border border-transparent p-[1.5px] rounded-2xl text-left font-mono z-50 text-xs text-[#eae5ef]"
                      style={{
                        backgroundImage: "linear-gradient(rgba(10, 10, 12, 0.2), rgba(10, 10, 12, 0.2)), linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Holographic scanner grid texture */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-2xl" />
                      
                      {/* Laser target corner lines */}
                      <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-orange-500/50 pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-orange-500/50 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-orange-500/50 pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-orange-500/50 pointer-events-none" />

                      {/* Ambient light sparks inside */}
                      <div className="absolute top-12 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute bottom-12 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                      <div className="p-5 relative">
                        <div className="border-b border-white/10 pb-2.5 mb-3.5 flex items-center justify-between flex-row">
                          <span className="text-xs font-black text-orange-400 tracking-widest uppercase">CR_HUB</span>
                        </div>

                        {/* Sequential lines layout on load */}
                        <motion.div 
                          className="flex flex-col gap-3.5 mb-4 text-[10.5px]"
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: { opacity: 0 },
                            show: {
                              opacity: 1,
                              transition: { staggerChildren: 0.15 }
                            }
                          }}
                        >
                          <motion.div 
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0 }
                            }}
                            className="border-l-2 border-orange-500 pl-2.5 py-0.5 hover:bg-orange-500/5 transition-colors"
                          >
                            <span className="text-orange-400 font-extrabold tracking-wider block text-[7.5px] uppercase">CREATING:</span>
                            <span className="text-white font-bold leading-tight block mt-0.5">Intelligent Systems</span>
                          </motion.div>
                          
                          <motion.div 
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0 }
                            }}
                            className="border-l-2 border-purple-500 pl-2.5 py-0.5 hover:bg-purple-500/5 transition-colors"
                          >
                            <span className="text-purple-400 font-extrabold tracking-wider block text-[7.5px] uppercase">ARCHITECTING:</span>
                            <span className="text-white font-bold leading-tight block mt-0.5">Next-Gen Platforms</span>
                          </motion.div>
                          
                          <motion.div 
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0 }
                            }}
                            className="border-l-2 border-blue-500 pl-2.5 py-0.5 hover:bg-blue-500/5 transition-colors"
                          >
                            <span className="text-blue-400 font-extrabold tracking-wider block text-[7.5px] uppercase">EXPLORING:</span>
                            <span className="text-white font-bold leading-tight block mt-0.5">AI Agents</span>
                          </motion.div>
                        </motion.div>

                        {/* FOCUS AREAS CONTAINER */}
                        <div className="border-t border-white/10 pt-3 mt-4">
                          <span className="text-[8.5px] text-zinc-400 font-black tracking-widest block uppercase mb-2">FOCUS AREAS:</span>
                          <div className="grid grid-cols-2 gap-2 text-[9.5px] text-zinc-300 font-semibold">
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                              <span>Backend Eng</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                              <span>Machine Learning</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                              <span>AI Automation</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Scalable Apps</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </header>            {/* ==================== 5. CORE CENTRAL OPERATIONS STAGE ==================== */}
            <main className="flex-grow w-full max-w-[1300px] mx-auto px-4 md:px-12 py-8 flex flex-col justify-start min-h-[75vh]" id="os-stage-body">
              <AnimatePresence mode="wait">
                {activeSection === 'Home' ? (
                  <motion.div
                    key="home-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="w-full flex flex-col gap-10"
                  >
                    {/* Row 1: Portrait and details column side-by-side */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                      {/* LEFT 65% STAGE: PORTRAIT HUB WITH INTEGRATED FLIGHT GRAPHICS */}
                      <div className="col-span-1 lg:col-span-7 flex justify-center">
                        <InteractivePortrait onNavToSection={handleNavTransition} />
                      </div>

                      {/* RIGHT 35% STAGE: HERO INFO */}
                      <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 md:pl-4">
                        <HeroContent onNavToSection={handleNavTransition} />
                      </div>
                    </div>


                  </motion.div>
                ) : (
                  <motion.div
                    key="custom-view-container"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full"
                  >
                    {activeSection === 'Projects' && <ProjectsView />}
                    {activeSection === 'Certificates' && <CertificationsView />}
                    {activeSection === 'Resume' && <ResumeView />}
                    {activeSection === 'Contact' && <ContactView />}
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

            {/* ==================== 6. NAVIGATION VERTICAL DOCK - DOCKED FAR ON THE EDGE ==================== */}
            <nav className="fixed left-0.5 sm:left-1 md:left-2 lg:left-4 top-[32%] lg:top-1/2 -translate-y-1/2 flex flex-col gap-2 lg:gap-3.5 z-40 bg-transparent p-1 lg:p-2 rounded-full border border-orange-500/30 select-none animate-fade-in" id="left-nav-sidebar">
              {[
                { id: 'Home', label: 'Home', icon: Home },
                { id: 'Projects', label: 'Projects', icon: Layers },
                { id: 'Certificates', label: 'Credentials', icon: Award },
                { id: 'Resume', label: 'Dossier', icon: FileText },
                { id: 'Contact', label: 'Comms', icon: Mail },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <div key={item.id} className="relative group/nav">
                    <button
                      onClick={() => handleNavTransition(item.id as any)}
                      className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300 ${
                        isActive
                           ? 'bg-orange-500 border-white/10 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]'
                           : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-orange-500/15'
                      }`}
                      title={item.label}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] lg:w-[19px] lg:h-[19px]" />
                    </button>
                    
                    {/* Hover text flag tooltip */}
                    <div className="absolute left-10 sm:left-12 lg:left-15 top-1/2 -translate-y-1/2 bg-black/95 border border-white/10 text-white text-[9px] lg:text-[10px] font-bold py-1 px-2.5 rounded-lg opacity-0 pointer-events-none group-hover/nav:opacity-100 transition-all duration-300 group-hover/nav:left-[40px] sm:group-hover/nav:left-[48px] lg:group-hover/nav:left-[58px] shadow-lg uppercase tracking-wider whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* ==================== 7. BOTTOM CORNER SOCIAL SYSTEM HUB - DOCKED ON DOWN-RIGHT SIDE EDGE ==================== */}
            <aside className="fixed bottom-0.5 right-0.5 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 z-30 flex items-center gap-2 select-none animate-fade-in" id="bottom-dock-socials">
              <div className="bg-transparent border border-orange-500/30 rounded-xl p-1.5 flex items-center gap-1.5 hover:border-orange-500/80 transition-colors">
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-zinc-300 hover:text-orange-400 hover:bg-orange-500/15 rounded-xl transition-all cursor-pointer"
                  title="GitHub Link"
                >
                  <Github className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-zinc-300 hover:text-orange-400 hover:bg-orange-500/15 rounded-xl transition-all cursor-pointer"
                  title="LinkedIn Link"
                >
                  <Linkedin className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-zinc-300 hover:text-orange-400 hover:bg-orange-500/15 rounded-xl transition-all cursor-pointer"
                  title="Send Email (Gmail Link)"
                >
                  <Mail className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
              </div>
            </aside>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
